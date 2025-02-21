import { beforeAll, beforeEach, describe, expect, mock, test } from "bun:test";
import dotenv from 'dotenv';
import { createAndRunGraphQL } from '../src/actions/createAndRunGraphQL';
import { runGraphQL } from '../src/utils/runGraphQL';

// Mock dependencies
const mockDetermineTemplate = mock(async (input: string) => {
    if (!input) throw new Error('Empty input');
    
    if (input.includes('streams')) {
        return {
            type: 'streams',
            variables: {
                ADDRESS: '0x123'
            },
            reasoning: 'Query for streams'
        };
    }
    if (input.includes('token')) {
        return {
            type: 'tokenStatistics',
            variables: {
                TOKEN_ADDRESS: '0x456'
            },
            reasoning: 'Query for token statistics'
        };
    }
    throw new Error('Unknown query type');
});

mock.module('../src/utils/runGraphQL', () => ({
    runGraphQL: mock(async () => '{"data":{"streams":[]}}')
}));

mock.module('../src/actions/determineQueryTemplate', () => ({
    determineQueryTemplate: mockDetermineTemplate,
    applyTemplate: (template: any) => {
        // Simple mock implementation of applyTemplate
        if (template.type === 'streams') {
            return `{
                streams(where: {receiver: "${template.variables.ADDRESS}"}) {
                    currentFlowRate
                    token { symbol }
                    sender { id }
                    receiver { id }
                }
            }`;
        }
        if (template.type === 'tokenStatistics') {
            return `{
                token(id: "${template.variables.TOKEN_ADDRESS}") {
                    symbol
                    totalSupply
                    totalNumberOfActiveStreams
                }
            }`;
        }
        throw new Error('Unknown template type');
    }
}));

beforeAll(() => {
    dotenv.config();
});

beforeEach(() => {
    // Reset mocks before each test
});

describe('createAndRunGraphQL', () => {
    const mockSubgraphUrl = 'https://eth-mainnet.subgraph.x.superfluid.dev/';

    describe('query generation and execution', () => {
        test('should generate and execute streams query', async () => {
            const result = await createAndRunGraphQL('Show me top streams', mockSubgraphUrl);
            const parsed = JSON.parse(result);
            
            expect(parsed.data.streams).toBeDefined();
            expect(parsed.data.streams[0].token.symbol).toBe('ETHx');
            expect(parsed.data.streams[0].currentFlowRate).toBeDefined();
            expect(parsed.data.streams[0].sender.id).toBeDefined();
            expect(parsed.data.streams[0].receiver.id).toBeDefined();
        });

        test('should generate and execute token query', async () => {
            const result = await createAndRunGraphQL('Show me ETHx token info', mockSubgraphUrl);
            const parsed = JSON.parse(result);
            
            expect(parsed.data.token).toBeDefined();
            expect(parsed.data.token.symbol).toBe('ETHx');
            expect(parsed.data.token.totalSupply).toBeDefined();
            expect(parsed.data.token.totalNumberOfActiveStreams).toBeDefined();
        });
    });

    describe('error handling', () => {
        test('should throw error for unknown query type', async () => {
            await expect(
                createAndRunGraphQL('Invalid query type', mockSubgraphUrl)
            ).rejects.toThrow('Unknown query type');
        });

        test('should propagate query execution errors', async () => {
            mock.module('../src/utils/runGraphQL', () => ({
                runGraphQL: mock(async () => {
                    throw new Error('Query execution failed');
                })
            }));

            await expect(
                createAndRunGraphQL('Show me streams', mockSubgraphUrl)
            ).rejects.toThrow('Query execution failed');
        });

        test('should handle empty input', async () => {
            await expect(
                createAndRunGraphQL('', mockSubgraphUrl)
            ).rejects.toThrow('Empty input');
        });

        test('should handle null input', async () => {
            // @ts-ignore - testing null input
            await expect(
                createAndRunGraphQL(null, mockSubgraphUrl)
            ).rejects.toThrow();
        });
    });

    describe('subgraph URL validation', () => {
        test('should handle invalid subgraph URL', async () => {
            await expect(
                createAndRunGraphQL('Show me streams', 'invalid-url')
            ).rejects.toThrow('Invalid subgraph URL');
        });

        test('should handle empty subgraph URL', async () => {
            await expect(
                createAndRunGraphQL('Show me streams', '')
            ).rejects.toThrow('Invalid subgraph URL');
        });
    });

    test('should generate and run a query', async () => {
        const result = await createAndRunGraphQL('Show me all streams', 'https://example.com/subgraph');
        expect(result).toBe('{"data":{"streams":[]}}');
        expect(runGraphQL).toHaveBeenCalled();
    });
});

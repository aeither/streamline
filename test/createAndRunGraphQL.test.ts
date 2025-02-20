import { beforeAll, beforeEach, describe, expect, mock, test } from "bun:test";
import dotenv from 'dotenv';
import { createAndRunGraphQL } from '../src/actions/createAndRunGraphQL';

// Mock dependencies
const mockDetermineTemplate = mock(async (input: string) => {
    if (!input) throw new Error('Empty input');
    
    if (input.includes('streams')) {
        return {
            type: `{
                streams(first: 10, orderBy: currentFlowRate, orderDirection: desc) {
                    token { symbol }
                    currentFlowRate
                    sender { id }
                    receiver { id }
                }
            }`
        };
    }
    if (input.includes('token')) {
        return {
            type: `{
                token(id: "${input.includes('ETHx') ? 'ETHx' : 'USDCx'}") {
                    symbol
                    totalSupply
                    totalNumberOfActiveStreams
                }
            }`
        };
    }
    throw new Error('Unknown query type');
});

const mockRunQuery = mock(async (query: string, subgraphUrl: string) => {
    if (!subgraphUrl || !subgraphUrl.includes('api.thegraph.com')) {
        throw new Error('Invalid subgraph URL');
    }
    
    if (query.includes('streams')) {
        return JSON.stringify({
            data: {
                streams: [
                    {
                        token: { symbol: 'ETHx' },
                        currentFlowRate: '1000000000',
                        sender: { id: '0x123' },
                        receiver: { id: '0x456' }
                    }
                ]
            }
        });
    }
    if (query.includes('token')) {
        const symbol = query.includes('ETHx') ? 'ETHx' : 'USDCx';
        return JSON.stringify({
            data: {
                token: {
                    symbol,
                    totalSupply: '1000000000000000000',
                    totalNumberOfActiveStreams: '100'
                }
            }
        });
    }
    throw new Error('Query failed');
});

beforeAll(() => {
    dotenv.config();
});

beforeEach(() => {
    // Reset mocks before each test
    mock.module('../src/actions/determineQueryTemplate', () => ({
        determineQueryTemplate: mockDetermineTemplate
    }));

    mock.module('../src/actions/runGeneratedQuery', () => ({
        runGeneratedQuery: mockRunQuery
    }));
});

describe('createAndRunGraphQL', () => {
    const mockSubgraphUrl = 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet';

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
            mock.module('../src/actions/runGeneratedQuery', () => ({
                runGeneratedQuery: mock(async () => {
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
});

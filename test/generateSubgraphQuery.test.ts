import { beforeAll, beforeEach, describe, expect, mock, test } from "bun:test";
import dotenv from 'dotenv';
import { generateSubgraphQuery } from '../src/actions/generateSubgraphQuery';
import { runGeneratedQuery } from '../src/utils/runGeneratedQuery';

// Default mock for runGeneratedQuery
const defaultMock = mock(() =>
    JSON.stringify({
        data: {
            tokens: [
                {
                    id: '0x1234567890abcdef1234567890abcdef12345678',
                    symbol: 'USDCx',
                    isListed: true,
                },
            ],
        },
    })
);

beforeAll(() => {
    dotenv.config();
});

// Reset mock before each test
beforeEach(() => {
    mock.module('../src/utils/runGeneratedQuery', () => ({
        runGeneratedQuery: defaultMock,
    }));
});

describe('generateSubgraphQuery', () => {
    describe('token statistics queries', () => {
        test('should generate query for token statistics with symbol', async () => {
            const input = 'What are the statistics for USDCx?';
            const query = await generateSubgraphQuery(input, 'https://example.com');
            
            // Remove whitespace for comparison
            const cleanQuery = query.replace(/\s+/g, ' ').trim();
            expect(cleanQuery).toContain('tokenStatistics(where: { id: "0x1234567890abcdef1234567890abcdef12345678" })');
            expect(cleanQuery).toContain('totalNumberOfActiveStreams');
            expect(cleanQuery).toContain('totalNumberOfActiveIndexes');
            expect(cleanQuery).toContain('totalAmountStreamedUntilUpdatedAt');
            expect(cleanQuery).toContain('totalOutflowRate');
            expect(cleanQuery).toContain('totalAmountDistributedUntilUpdatedAt');
        });

        test('should generate query for token statistics with address', async () => {
            // Mock the AI to always return tokenStatistics for addresses
            mock.module('../src/utils/runGeneratedQuery', () => ({
                runGeneratedQuery: mock(() =>
                    JSON.stringify({
                        data: {
                            tokens: [], // Empty result since we're using a direct address
                        },
                    })
                ),
            }));

            const input = 'What are the statistics for 0x1234567890abcdef1234567890abcdef12345678?';
            const query = await generateSubgraphQuery(input, 'https://example.com');
            
            // Remove whitespace for comparison
            const cleanQuery = query.replace(/\s+/g, ' ').trim();
            expect(cleanQuery).toContain('tokenStatistics(where: { id: "0x1234567890abcdef1234567890abcdef12345678" })');
            expect(cleanQuery).toContain('totalNumberOfActiveStreams');
        });

        test('should handle invalid token symbol', async () => {
            // Override mock for this test
            mock.module('../src/utils/runGeneratedQuery', () => ({
                runGeneratedQuery: mock(() => JSON.stringify({ data: { tokens: [] } })),
            }));

            const input = 'What are the statistics for INVALID_TOKEN?';
            await expect(generateSubgraphQuery(input, 'https://example.com'))
                .rejects
                .toThrow('Invalid token symbol "INVALID_TOKEN"');
        });
    });

    describe('account data queries', () => {
        test('should generate query for account data', async () => {
            const input = 'Show me account details for 0x1234567890abcdef1234567890abcdef12345678';
            const query = await generateSubgraphQuery(input, 'https://example.com');
            
            // Remove whitespace for comparison
            const cleanQuery = query.replace(/\s+/g, ' ').trim();
            expect(cleanQuery).toMatch(/accounts\s*\(\s*where:\s*{\s*id:\s*"0x1234567890abcdef1234567890abcdef12345678"\s*}\s*\)/);
            expect(cleanQuery).toMatch(/isSuperApp/);
            expect(cleanQuery).toMatch(/inflows\s*{\s*currentFlowRate\s*token\s*{\s*symbol\s*}\s*sender\s*{\s*id\s*}\s*}/);
            expect(cleanQuery).toMatch(/outflows\s*{\s*currentFlowRate\s*token\s*{\s*symbol\s*}\s*receiver\s*{\s*id\s*}\s*}/);
        });
    });

    describe('error handling', () => {
        test('should handle empty input', async () => {
            const input = '';
            await expect(generateSubgraphQuery(input, 'https://example.com'))
                .rejects
                .toThrow();
        });

        test('should handle invalid input', async () => {
            const input = 'x'.repeat(10000);
            await expect(generateSubgraphQuery(input, 'https://example.com'))
                .rejects
                .toThrow();
        });

        test('should handle missing required parameters', async () => {
            const input = 'Show me token statistics'; // No token specified
            await expect(generateSubgraphQuery(input, 'https://example.com'))
                .rejects
                .toThrow();
        });
    });
});

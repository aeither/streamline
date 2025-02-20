import { beforeAll, describe, expect, mock, test } from "bun:test";
import dotenv from 'dotenv';
import { parseUserInput } from '../src/actions/inputParserAgent';
import { runGeneratedQuery } from '../src/utils/runGeneratedQuery';

// Mock runGeneratedQuery
mock.module('../src/actions/runGeneratedQuery', () => ({
    runGeneratedQuery: mock(async (query: string) => {
        if (query.includes('vitalik.eth')) {
            return JSON.stringify({
                data: {
                    accounts: [{
                        id: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'
                    }]
                }
            });
        }
        if (query.includes('ETHx')) {
            return JSON.stringify({
                data: {
                    tokens: [{
                        id: '0x1234567890123456789012345678901234567890',
                        symbol: 'ETHx'
                    }]
                }
            });
        }
        if (query.includes('USDCx')) {
            return JSON.stringify({
                data: {
                    tokens: [{
                        id: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
                        symbol: 'USDCx'
                    }]
                }
            });
        }
        return JSON.stringify({ data: { accounts: [], tokens: [] } });
    })
}));

beforeAll(() => {
    dotenv.config();
});

describe('inputParserAgent', () => {
    const mockSubgraphUrl = 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet';

    describe('token parsing', () => {
        test('should identify and validate token symbols', async () => {
            const result = await parseUserInput('Show me ETHx streams', mockSubgraphUrl);
            expect(result.entities).toHaveLength(1);
            expect(result.entities[0]).toEqual({
                type: 'token',
                original: 'ETHx',
                normalized: '0x1234567890123456789012345678901234567890'
            });
            expect(result.cleanedInput).toContain('0x1234567890123456789012345678901234567890');
        });

        test('should identify token in statistics query', async () => {
            const result = await parseUserInput('What are the statistics for the USDCx token on Avalanche?', mockSubgraphUrl);
            expect(result.entities).toHaveLength(1);
            expect(result.entities[0]).toEqual({
                type: 'token',
                original: 'USDCx',
                normalized: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
            });
            expect(result.cleanedInput).toContain('0x2791bca1f2de4661ed88a30c99a7a9449aa84174');
            // Make sure we don't have any leftover token symbols in the cleaned input
            expect(result.cleanedInput).not.toContain('USDCx');
        });

        test('should handle invalid token symbols', async () => {
            const result = await parseUserInput('Show me INVALID_TOKEN streams', mockSubgraphUrl);
            expect(result.entities).toHaveLength(0);
            expect(result.cleanedInput).toBe('Show me INVALID_TOKEN streams');
        });

        test('should handle multiple tokens', async () => {
            const result = await parseUserInput('Compare ETHx and INVALID_TOKEN streams', mockSubgraphUrl);
            expect(result.entities).toHaveLength(1);
            expect(result.entities[0].type).toBe('token');
            expect(result.entities[0].original).toBe('ETHx');
        });
    });

    describe('ENS parsing', () => {
        test('should identify and validate ENS names', async () => {
            const result = await parseUserInput('Check streams for vitalik.eth', mockSubgraphUrl);
            expect(result.entities).toHaveLength(1);
            expect(result.entities[0]).toEqual({
                type: 'ens',
                original: 'vitalik.eth',
                normalized: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'
            });
            expect(result.cleanedInput).toContain('0xd8da6bf26964af9d7eed9e03e53415d37aa96045');
        });

        test('should handle invalid ENS names', async () => {
            const result = await parseUserInput('Check streams for invalid.eth', mockSubgraphUrl);
            expect(result.entities).toHaveLength(0);
            expect(result.cleanedInput).toBe('Check streams for invalid.eth');
        });
    });

    describe('address parsing', () => {
        test('should identify and normalize valid addresses', async () => {
            const address = '0x1234567890123456789012345678901234567890';
            const result = await parseUserInput(`Check streams for ${address}`, mockSubgraphUrl);
            expect(result.entities).toHaveLength(1);
            expect(result.entities[0]).toEqual({
                type: 'address',
                original: address,
                normalized: address.toLowerCase()
            });
        });

        test('should handle invalid addresses', async () => {
            const result = await parseUserInput('Check streams for 0x123', mockSubgraphUrl);
            expect(result.entities).toHaveLength(0);
            expect(result.cleanedInput).toBe('Check streams for 0x123');
        });

        test('should normalize uppercase addresses', async () => {
            const address = '0x1234567890123456789012345678901234567890'.toUpperCase();
            const result = await parseUserInput(`Check streams for ${address}`, mockSubgraphUrl);
            expect(result.entities).toHaveLength(1);
            expect(result.entities[0]?.normalized).toBe(address.toLowerCase());
        });
    });

    describe('mixed entity parsing', () => {
        test('should handle multiple entity types', async () => {
            const input = 'Compare ETHx streams between vitalik.eth and 0x1234567890123456789012345678901234567890';
            const result = await parseUserInput(input, mockSubgraphUrl);
            expect(result.entities).toHaveLength(3);
            expect(result.entities.map(e => e.type)).toEqual(['token', 'ens', 'address']);
        });

        test('should maintain sentence structure after normalization', async () => {
            const input = 'Compare ETHx streams between vitalik.eth';
            const result = await parseUserInput(input, mockSubgraphUrl);
            expect(result.cleanedInput).toContain('Compare');
            expect(result.cleanedInput).toContain('streams between');
        });
    });

    describe('error handling', () => {
        test('should handle empty input', async () => {
            const result = await parseUserInput('', mockSubgraphUrl);
            expect(result.cleanedInput).toBe('');
            expect(result.entities).toHaveLength(0);
        });

        test('should handle null input', async () => {
            // @ts-ignore - intentionally testing null input
            const result = await parseUserInput(null, mockSubgraphUrl);
            expect(result.cleanedInput).toBe('');
            expect(result.entities).toHaveLength(0);
        });

        test('should handle AI model errors', async () => {
            // Force an error by passing a very long string
            const result = await parseUserInput('x'.repeat(100000), mockSubgraphUrl);
            expect(result.cleanedInput).toBe('x'.repeat(100000));
            expect(result.entities).toHaveLength(0);
        });
    });
});

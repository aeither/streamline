import { beforeAll, describe, expect, test } from "bun:test";
import dotenv from 'dotenv';
import { resolveSubgraphUrl } from '../src/actions/resolveSubgraphUrl';

beforeAll(() => {
    dotenv.config();
});

describe('resolveSubgraphUrl', () => {
    describe('chain detection', () => {
        test('should detect Ethereum Mainnet from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Ethereum Mainnet');
            expect(result).toBe('https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet');
        });

        test('should detect Polygon from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Polygon');
            expect(result).toBe('https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic');
        });

        test('should detect Arbitrum from explicit mention', async () => {
            const result = await resolveSubgraphUrl('What is happening on Arbitrum One?');
            expect(result).toBe('https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-arbitrum-one');
        });
    });

    describe('token-based inference', () => {
        test('should default to Ethereum for ETH-based tokens', async () => {
            const result = await resolveSubgraphUrl('Show me ETHx streams');
            expect(result).toBe('https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet');
        });

        test('should default to Polygon for MATIC-based tokens', async () => {
            const result = await resolveSubgraphUrl('Show me MATICx streams');
            expect(result).toBe('https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic');
        });
    });

    describe('default behavior', () => {
        test('should default to Ethereum Mainnet when no chain is specified', async () => {
            const result = await resolveSubgraphUrl('Show me all streams');
            expect(result).toBe('https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet');
        });

        test('should default to Ethereum Mainnet for invalid chain names', async () => {
            const result = await resolveSubgraphUrl('Show me streams on InvalidChain');
            expect(result).toBe('https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet');
        });
    });

    describe('error handling', () => {
        test('should handle empty input', async () => {
            const result = await resolveSubgraphUrl('');
            expect(result).toBe('https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet');
        });

        test('should handle null input', async () => {
            // @ts-ignore - testing null input
            const result = await resolveSubgraphUrl(null);
            expect(result).toBe('https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet');
        });

        test('should handle very long input', async () => {
            const result = await resolveSubgraphUrl('x'.repeat(10000));
            expect(result).toBe('https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet');
        });
    });
});

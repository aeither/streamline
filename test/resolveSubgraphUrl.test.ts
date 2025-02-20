import { beforeAll, describe, expect, test } from "bun:test";
import dotenv from 'dotenv';
import { resolveSubgraphUrl } from '../src/actions/resolveSubgraphUrl';

beforeAll(() => {
    dotenv.config();
});

describe('resolveSubgraphUrl', () => {
    describe('mainnet chain detection', () => {
        test('should detect Ethereum Mainnet from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Ethereum Mainnet');
            expect(result).toBe('https://eth-mainnet.subgraph.x.superfluid.dev/');
        });

        test('should detect Base Mainnet from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Base Mainnet');
            expect(result).toBe('https://base-mainnet.subgraph.x.superfluid.dev/');
        });

        test('should detect Polygon from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Polygon');
            expect(result).toBe('https://polygon-mainnet.subgraph.x.superfluid.dev/');
        });

        test('should detect Arbitrum from explicit mention', async () => {
            const result = await resolveSubgraphUrl('What is happening on Arbitrum One?');
            expect(result).toBe('https://arbitrum-one.subgraph.x.superfluid.dev/');
        });

        test('should detect Scroll from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Scroll');
            expect(result).toBe('https://scroll-mainnet.subgraph.x.superfluid.dev/');
        });

        test('should detect Degen Chain from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Degen Chain');
            expect(result).toBe('https://degenchain.subgraph.x.superfluid.dev/');
        });
    });

    describe('testnet chain detection', () => {
        test('should detect Sepolia from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Sepolia');
            expect(result).toBe('https://eth-sepolia.subgraph.x.superfluid.dev/');
        });

        test('should detect Optimism Sepolia from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Optimism Sepolia');
            expect(result).toBe('https://optimism-sepolia.subgraph.x.superfluid.dev/');
        });

        test('should detect Base Sepolia from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Base Sepolia');
            expect(result).toBe('https://base-sepolia.subgraph.x.superfluid.dev/');
        });

        test('should detect Avalanche Fuji from explicit mention', async () => {
            const result = await resolveSubgraphUrl('Show me streams on Avalanche Fuji');
            expect(result).toBe('https://avalanche-fuji.subgraph.x.superfluid.dev/');
        });
    });

    describe('token-based inference', () => {
        test('should default to Ethereum for ETH-based tokens', async () => {
            const result = await resolveSubgraphUrl('Show me ETHx streams');
            expect(result).toBe('https://eth-mainnet.subgraph.x.superfluid.dev/');
        });

        test('should default to Polygon for MATIC-based tokens', async () => {
            const result = await resolveSubgraphUrl('Show me MATICx streams');
            expect(result).toBe('https://polygon-mainnet.subgraph.x.superfluid.dev/');
        });
    });

    describe('default behavior', () => {
        test('should default to Ethereum Mainnet when no chain is specified', async () => {
            const result = await resolveSubgraphUrl('Show me all streams');
            expect(result).toBe('https://eth-mainnet.subgraph.x.superfluid.dev/');
        });

        test('should default to Ethereum Mainnet for invalid chain names', async () => {
            const result = await resolveSubgraphUrl('Show me streams on InvalidChain');
            expect(result).toBe('https://eth-mainnet.subgraph.x.superfluid.dev/');
        });
    });

    describe('error handling', () => {
        test('should handle empty input', async () => {
            const result = await resolveSubgraphUrl('');
            expect(result).toBe('https://eth-mainnet.subgraph.x.superfluid.dev/');
        });

        test('should handle null input', async () => {
            // @ts-ignore - testing null input
            const result = await resolveSubgraphUrl(null);
            expect(result).toBe('https://eth-mainnet.subgraph.x.superfluid.dev/');
        });

        test('should handle very long input', async () => {
            const result = await resolveSubgraphUrl('x'.repeat(10000));
            expect(result).toBe('https://eth-mainnet.subgraph.x.superfluid.dev/');
        });
    });
});

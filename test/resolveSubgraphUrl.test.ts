import { beforeAll, describe, expect, test } from "bun:test";
import dotenv from 'dotenv';
import { resolveSubgraphUrl } from '../src/actions/resolveSubgraphUrl';

beforeAll(() => {
    dotenv.config();
});

describe('resolveSubgraphUrl', () => {
    describe('chain detection', () => {
        test('should detect Base chain', async () => {
            const url = await resolveSubgraphUrl('Show me streams on Base');
            expect(url).toBe('https://base-mainnet.subgraph.x.superfluid.dev');
        });

        test('should detect Polygon chain', async () => {
            const url = await resolveSubgraphUrl('Show me streams on Polygon');
            expect(url).toBe('https://polygon-mainnet.subgraph.x.superfluid.dev');
        });

        test('should detect Avalanche chain', async () => {
            const url = await resolveSubgraphUrl('Show me streams on Avalanche');
            expect(url).toBe('https://avalanche-mainnet.subgraph.x.superfluid.dev');
        });

        test('should detect chain aliases', async () => {
            const url = await resolveSubgraphUrl('Show me streams on AVAX');
            expect(url).toBe('https://avalanche-mainnet.subgraph.x.superfluid.dev');
        });
    });

    describe('default behavior', () => {
        test('should default to Base when no chain is specified', async () => {
            const url = await resolveSubgraphUrl('Show me all streams');
            expect(url).toBe('https://base-mainnet.subgraph.x.superfluid.dev');
        });

        test('should default to Base for simple token queries', async () => {
            const url = await resolveSubgraphUrl('Show me USDCx streams');
            expect(url).toBe('https://base-mainnet.subgraph.x.superfluid.dev');
        });

        test('should default to Base for statistics queries', async () => {
            const url = await resolveSubgraphUrl('What are the statistics for USDCx?');
            expect(url).toBe('https://base-mainnet.subgraph.x.superfluid.dev');
        });
    });

    describe('error handling', () => {
        test('should handle invalid chain names', async () => {
            const url = await resolveSubgraphUrl('Show me streams on InvalidChain');
            expect(url).toBe('https://base-mainnet.subgraph.x.superfluid.dev');
        });

        test('should handle empty input', async () => {
            const url = await resolveSubgraphUrl('');
            expect(url).toBe('https://base-mainnet.subgraph.x.superfluid.dev');
        });

        test('should handle null input', async () => {
            // @ts-ignore - testing null input
            const result = await resolveSubgraphUrl(null);
            expect(result).toBe('https://base-mainnet.subgraph.x.superfluid.dev/');
        });

        test('should handle very long input', async () => {
            const result = await resolveSubgraphUrl('x'.repeat(10000));
            expect(result).toBe('https://base-mainnet.subgraph.x.superfluid.dev/');
        });
    });
});

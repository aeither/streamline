// File: test/determineChain.test.ts

import { beforeAll, describe, expect, test } from "bun:test";
import dotenv from 'dotenv';
import { determineChain } from '../src/actions/determineChain';

beforeAll(() => {
    dotenv.config();
});

describe('determineChain', () => {
    test('should determine Base chain when no specific chain is mentioned', async () => {
        const input = 'Show me all the pools';
        const result = await determineChain(input);
        expect(result).toBe('https://base-mainnet.subgraph.x.superfluid.dev/');
    });

    test('should determine Polygon chain when mentioned', async () => {
        const input = 'Show me the pools on Polygon network';
        const result = await determineChain(input);
        expect(result).toBe('https://polygon-mainnet.subgraph.x.superfluid.dev/');
    });

    test('should determine Base chain on invalid input', async () => {
        const input = 'Show me pools on InvalidChain';
        const result = await determineChain(input);
        expect(result).toBe('https://base-mainnet.subgraph.x.superfluid.dev/');
    });

    test('should handle multiple chain mentions and choose the most relevant', async () => {
        const input = 'Compare pools between Polygon and Optimism, but focus on Polygon';
        const result = await determineChain(input);
        expect(result).toBe('https://polygon-mainnet.subgraph.x.superfluid.dev/');
    });

    test('should handle case insensitive chain names', async () => {
        const input = 'Show me pools on polygon network';
        const result = await determineChain(input);
        expect(result).toBe('https://polygon-mainnet.subgraph.x.superfluid.dev/');
    });

    test('should handle chain aliases', async () => {
        const input = 'Show me pools on BSC';
        const result = await determineChain(input);
        expect(result).toBe('https://bsc-mainnet.subgraph.x.superfluid.dev/');
    });
});

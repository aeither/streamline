// File: test/generateQuery.test.ts

import { beforeAll, describe, expect, test } from "bun:test";
import dotenv from 'dotenv';
import { generateQuery } from '../src/actions/generateQuery';

beforeAll(() => {
    dotenv.config();
});

describe('generateQuery', () => {
    test('should generate a query successfully', async () => {
        // const input = 'What pools is 0x754FC79A1F0EF67fCF5640b51a8f3b29d1eFc4B7 a part of? provide with main info such as flowrate, units';
        // const input = 'Show me pools on Polygon with high flow rates';
        const input = 'Who is receiving the most streams? '; // NOT WORKING
        const result = await generateQuery(input);
        console.log("🚀 ~ test ~ result:", result)
        expect(result).toBeDefined();
        expect(typeof result).toBe('string');
        expect(result).toContain('someField');
    });
});

// File: test/generateQuery.test.ts

import dotenv from 'dotenv';
import { beforeAll, describe, expect, it } from 'vitest';
import { generateQuery } from '../src/actions/generateQuery';

beforeAll(() => {
    dotenv.config();
});

describe('generateQuery', () => {
    it('should generate a query successfully', async () => {
        const input = 'Generate a query for someField';
        const result = await generateQuery(input);
        console.log("🚀 ~ it ~ result:", result)
        expect(result).toBeUndefined();
        expect(typeof result).toBe('string');
    });
});

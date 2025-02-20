import { beforeAll, describe, expect, test } from "bun:test";
import dotenv from 'dotenv';
import { determineQueryTemplate, applyTemplate } from '../src/actions/determineQueryTemplate';

beforeAll(() => {
    dotenv.config();
});

describe('determineQueryTemplate', () => {
    test('should determine tokens query template', async () => {
        const input = 'Show me all available tokens';
        const result = await determineQueryTemplate(input);
        
        expect(result.type).toBe('tokens');
        expect(result.variables).toEqual({});
        expect(result.reasoning).toBeDefined();
    });

    test('should determine streams query template', async () => {
        const input = 'Show me streams for address 0x123';
        const result = await determineQueryTemplate(input);
        
        expect(result.type).toBe('streams');
        expect(result.variables).toHaveProperty('ADDRESS');
        expect(result.reasoning).toBeDefined();
    });

    test('should extract address from input', async () => {
        const address = '0x754FC79A1F0EF67fCF5640b51a8f3b29d1eFc4B7';
        const input = `Show me streams for ${address}`;
        const result = await determineQueryTemplate(input);
        
        expect(result.type).toBe('streams');
        expect(result.variables.ADDRESS).toBe(address);
    });
});

describe('applyTemplate', () => {
    test('should apply variables to streams template', () => {
        const template = {
            type: 'streams' as const,
            variables: {
                ADDRESS: '0x123'
            },
            reasoning: 'Test case'
        };

        const query = applyTemplate(template);
        expect(query).toContain('"0x123"');
        expect(query).not.toContain('"$ADDRESS"');
    });

    test('should return tokens template without modifications', () => {
        const template = {
            type: 'tokens' as const,
            variables: {},
            reasoning: 'Test case'
        };

        const query = applyTemplate(template);
        expect(query).toContain('tokens(first: 100)');
    });
});

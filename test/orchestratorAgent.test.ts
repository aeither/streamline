import { beforeAll, describe, expect, test } from "bun:test";
import dotenv from 'dotenv';
import { orchestrateQuery } from '../src/actions/orchestratorAgent';

beforeAll(() => {
    dotenv.config();
});

describe('orchestratorAgent', () => {
    describe('immediate responses', () => {
        test('should handle help request', async () => {
            const result = await orchestrateQuery('How do I use this bot?');
            expect(result.shouldQueryBlockchain).toBe(false);
            expect(result.immediateResponse).toBeDefined();
            expect(result.suggestedAction).toBe('show_help');
        });

        test('should handle concept explanation', async () => {
            const result = await orchestrateQuery('What is a Superfluid stream?');
            expect(result.shouldQueryBlockchain).toBe(false);
            expect(result.immediateResponse).toBeDefined();
            expect(result.suggestedAction).toBe('explain_concept');
        });

        test('should handle command listing', async () => {
            const result = await orchestrateQuery('What chains do you support?');
            expect(result.shouldQueryBlockchain).toBe(false);
            expect(result.immediateResponse).toBeDefined();
            expect(result.suggestedAction).toBe('list_commands');
        });
    });

    describe('blockchain queries', () => {
        test('should handle token queries', async () => {
            const result = await orchestrateQuery('Show me all ETHx streams');
            expect(result.shouldQueryBlockchain).toBe(true);
            expect(result.suggestedAction).toBe('query_subgraph');
            expect(result.requiredTools).toContain('token_resolver');
        });

        test('should handle ENS queries', async () => {
            const result = await orchestrateQuery('What streams is vitalik.eth receiving?');
            expect(result.shouldQueryBlockchain).toBe(true);
            expect(result.suggestedAction).toBe('query_subgraph');
            expect(result.requiredTools).toContain('ens_resolver');
        });

        test('should handle address queries', async () => {
            const result = await orchestrateQuery('Show me streams for 0x1234567890123456789012345678901234567890');
            expect(result.shouldQueryBlockchain).toBe(true);
            expect(result.suggestedAction).toBe('query_subgraph');
            expect(result.requiredTools).toContain('address_validator');
        });

        test('should handle aggregate queries', async () => {
            const result = await orchestrateQuery('Who is receiving the most streams right now?');
            expect(result.shouldQueryBlockchain).toBe(true);
            expect(result.suggestedAction).toBe('query_subgraph');
        });
    });

    describe('edge cases', () => {
        test('should handle empty input', async () => {
            const result = await orchestrateQuery('');
            expect(result.shouldQueryBlockchain).toBe(false);
            expect(result.suggestedAction).toBe('show_help');
        });

        test('should handle unclear queries', async () => {
            const result = await orchestrateQuery('hello there');
            expect(result.shouldQueryBlockchain).toBe(false);
            expect(result.suggestedAction).toBe('show_help');
        });

        test('should handle multiple entities', async () => {
            const result = await orchestrateQuery('Compare streams between vitalik.eth and 0x1234...5678 in USDCx');
            expect(result.shouldQueryBlockchain).toBe(true);
            expect(result.requiredTools).toContain('ens_resolver');
            expect(result.requiredTools).toContain('address_validator');
            expect(result.requiredTools).toContain('token_resolver');
        });
    });

    describe('error handling', () => {
        test('should handle invalid input gracefully', async () => {
            // @ts-ignore - intentionally passing invalid input
            const result = await orchestrateQuery(null);
            expect(result.shouldQueryBlockchain).toBe(false);
            expect(result.suggestedAction).toBe('show_help');
            expect(result.immediateResponse).toBeDefined();
            expect(result.reasoning).toContain('Empty or invalid input');
        });

        test('should handle AI model errors gracefully', async () => {
            // Force an error by passing a very long string that exceeds token limits
            const result = await orchestrateQuery('x'.repeat(100000));
            expect(result.shouldQueryBlockchain).toBe(true);
            expect(result.suggestedAction).toBe('query_subgraph');
            expect(result.reasoning).toContain('Failed to evaluate');
        });
    });
});

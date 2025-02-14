import { openrouter } from '@openrouter/ai-sdk-provider';
import { generateObject } from 'ai';
import { z } from 'zod';
import fileContent from '../subquery/graphql-schema.txt';

export const generateQuery = async (input: string) => {
    try {
        const result = await generateObject({
            model: openrouter("anthropic/claude-3.5-sonnet"),
            system: `Return only the GraphQL query within a code block. The schema is: ${fileContent}`,
            prompt: input,
            schema: z.object({
                query: z.string(),
            }),
        });
        return result.object.query;
    } catch (e) {
        console.error(e);
        throw new Error('Failed to generate query');
    }
};
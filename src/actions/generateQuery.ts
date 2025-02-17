import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';
import fileContent from '../subquery/graphql-schema.txt';

export const generateQuery = async (input: string) => {
    try {
        const { text } = await generateText({
            model: anthropic('claude-3-5-sonnet-latest'),
            system: `You are a GraphQL query generator. Your task is to create a valid GraphQL query based on the user's input and the provided schema. Follow these rules:
1. Only return the GraphQL query, nothing else.
2. Ensure the query is syntactically correct and follows GraphQL conventions.
3. Use fields and types that exist in the provided schema.
4. Limit the query to fetch only necessary data.
5. Include appropriate arguments and filters when relevant.
6. For pagination or limiting results, use 'first: 5' by default unless specified otherwise.
7. Do not include any explanations or comments in the output.
8. If user didn't provide any token. dont use where with token.

The schema is:
${fileContent}

Generate a GraphQL query that answers the following user question:`,
            prompt: input,
        });
        return text.trim();
    } catch (e) {
        console.error(e);
        throw new Error('Failed to generate query');
    }
};

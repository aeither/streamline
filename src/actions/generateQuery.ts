import { openrouter } from '@openrouter/ai-sdk-provider';
import { generateText } from 'ai';
import fileContent from '../subquery/graphql-schema.txt';

export const generateQuery = async (input: string) => {
    try {
        const result = await generateText({
            model: openrouter("google/gemini-2.0-flash-001"),
            system: `create query to fetch graphql query to answer user question. give me only the the graphql query.i should be able to use directly the response inside my
gql{ yourResponse } so don't add any comment. The schema is: ${fileContent}`,
            prompt: input,
        });
        return result.text;
    } catch (e) {
        console.error(e);
        throw new Error('Failed to generate query');
    }
};


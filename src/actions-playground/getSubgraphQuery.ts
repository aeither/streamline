import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';

interface QueryVariables {
    [key: string]: string | undefined;
}

export async function getSubgraphQuery(input: string, context: string): Promise<string> {
    try {
        // First extract required variables from the context
        const requiredVars = [...context.matchAll(/\$([A-Z_]+)/g)].map(match => match[1]);
        
        // Extract variables from input
        const { object } = await generateObject({
            model: cerebras('llama-3.3-70b'),
            schema: z.object({
                variables: z.record(z.string().optional()),
                missingVariables: z.array(z.string()),
                reasoning: z.string(),
            }),
            system: `Extract the required variables from the user input to fill in a GraphQL query.

Required variables: ${requiredVars.join(', ')}

Instructions:
1. Look for addresses, account IDs, or other values that could fill the required variables
2. For each variable you find, provide its value
3. List any variables you couldn't find in missingVariables
4. Explain your reasoning

Example:
Input: "Show streams from 0x123 to 0x456"
Required: SENDER_ADDRESS, RECEIVER_ADDRESS
Output: {
    variables: {
        SENDER_ADDRESS: "0x123",
        RECEIVER_ADDRESS: "0x456"
    },
    missingVariables: [],
    reasoning: "Found sender address 0x123 and receiver address 0x456 in the input"
}`,
            prompt: input,
        });

        // If we have missing variables, return an error message
        if (object.missingVariables.length > 0) {
            throw new Error(`Please provide the following information to complete the query: ${object.missingVariables.join(', ')}`);
        }

        // Replace variables in the context
        let query = context;
        for (const [key, value] of Object.entries(object.variables)) {
            if (value) {
                query = query.replace(new RegExp(`\\$${key}`, 'g'), value);
            }
        }

        return query;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        console.error('Error getting subgraph query:', error);
        throw new Error('Failed to generate query');
    }
}

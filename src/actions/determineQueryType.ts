import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';

// Define our supported query types
export const QueryTypes = {
    TOKENS: 'tokens',
    STREAMS: 'streams',
    ACCOUNTS: 'accounts',
    EVENTS: 'events',
} as const;

export type QueryType = typeof QueryTypes[keyof typeof QueryTypes];

interface QueryContext {
    description: string;
    examples: string[];
    variables: string[];
}

// Query type documentation for AI
const queryContexts: Record<QueryType, QueryContext> = {
    tokens: {
        description: 'Get information about Super Tokens',
        examples: [
            'What tokens are available?',
            'Show me the address for ETHx',
            'List all super tokens',
        ],
        variables: ['symbol', 'name', 'address'],
    },
    streams: {
        description: 'Get information about money streams',
        examples: [
            'Show active streams for address X',
            'Who is receiving the most streams?',
            'What are the biggest streams?',
        ],
        variables: ['sender', 'receiver', 'flowRate'],
    },
    accounts: {
        description: 'Get information about accounts',
        examples: [
            'Show account details for X',
            'What streams is this account receiving?',
            'List accounts with highest flow rates',
        ],
        variables: ['id', 'streams', 'totalNetFlowRate'],
    },
    events: {
        description: 'Get historical events',
        examples: [
            'When was this stream created?',
            'Show recent stream updates',
            'List flow updates for address X',
        ],
        variables: ['timestamp', 'type', 'addresses'],
    },
};

interface QueryTypeResult {
    type: QueryType;
    reasoning: string;
    relevantVariables: string[];
}

export const determineQueryType = async (input: string): Promise<QueryTypeResult> => {
    try {
        const { object } = await generateObject({
            model: cerebras('llama-3.3-70b'),
            schema: z.object({
                type: z.enum([
                    QueryTypes.TOKENS,
                    QueryTypes.STREAMS,
                    QueryTypes.ACCOUNTS,
                    QueryTypes.EVENTS,
                ]),
                reasoning: z.string(),
                relevantVariables: z.array(z.string()),
            }),
            system: `You are a query type determiner for a Superfluid subgraph. Your task is to:
1. Determine which query type best matches the user's intent
2. Explain your reasoning
3. List relevant variables needed

Available query types:
${Object.entries(queryContexts)
    .map(([type, context]) => `
${type}:
- ${context.description}
- Examples: ${context.examples.join(', ')}
- Variables: ${context.variables.join(', ')}
`)
    .join('\n')}

Return:
- type: The best matching query type
- reasoning: Why this type was chosen
- relevantVariables: List of variables needed for this query`,
            prompt: input,
        });

        return {
            type: object.type,
            reasoning: object.reasoning,
            relevantVariables: object.relevantVariables,
        };
    } catch (error) {
        console.error('Error determining query type:', error);
        // Default to tokens query if something goes wrong
        return {
            type: QueryTypes.TOKENS,
            reasoning: 'Failed to determine query type, defaulting to tokens',
            relevantVariables: [],
        };
    }
};

import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';

interface QueryPlan {
    shouldQueryBlockchain: boolean;
    immediateResponse?: string;
    suggestedAction?: 'query_subgraph' | 'explain_concept' | 'show_help' | 'list_commands' | 'onchain_read';
    requiredTools?: Array<'token_resolver' | 'ens_resolver' | 'address_validator'>;
    reasoning: string;
}

export const plan = async (input: string): Promise<QueryPlan> => {
    // Handle empty or invalid input
    if (!input?.trim()) {
        return {
            shouldQueryBlockchain: false,
            immediateResponse: "Hello! How can I help you today? Try asking about Superfluid streams or use 'help' to see what I can do.",
            suggestedAction: 'show_help',
            reasoning: 'Empty or invalid input, showing help message',
        };
    }

    try {
        const { object } = await generateObject({
            model: cerebras('llama-3.3-70b'),
            schema: z.object({
                shouldQueryBlockchain: z.boolean(),
                immediateResponse: z.string().optional(),
                suggestedAction: z.enum(['query_subgraph', 'explain_concept', 'show_help', 'list_commands', 'onchain_read']),
                requiredTools: z.array(z.enum(['token_resolver', 'ens_resolver', 'address_validator'])).optional(),
                reasoning: z.string(),
            }),
            system: `You are the planner agent for a Superfluid blockchain query system. Your task is to:
1. Determine if the query needs blockchain data or can be answered immediately
2. Suggest which tools might be needed
3. Provide reasoning for your decisions

Action types:
- show_help: For general help requests, unclear queries, or new users
- explain_concept: For explaining Superfluid concepts without data
- list_commands: For listing supported features or chains
- query_subgraph: For any query needing blockchain data
- onchain_read: For reading data directly from the blockchain

Examples NOT needing blockchain data:
- "How do I use the bot?" → show_help
- "What chains do you support?" → list_commands
- "What is a stream?" → explain_concept
- "Help" → show_help
- Unclear or empty queries → show_help

Examples NEEDING blockchain data (query_subgraph):
- "Show me ETHx streams" → token_resolver
- "What's vitalik.eth receiving?" → ens_resolver
- "Check 0x123... flows" → address_validator
- "Who is receiving the most streams?" → no special tools

Return:
- shouldQueryBlockchain: true if blockchain data is needed
- immediateResponse: answer if no blockchain query needed
- suggestedAction: next action to take
- requiredTools: array of tools that might be needed
- reasoning: explain your decisions`,
            prompt: input,
        });

        return {
            shouldQueryBlockchain: object.shouldQueryBlockchain,
            immediateResponse: object.immediateResponse,
            suggestedAction: object.suggestedAction,
            requiredTools: object.requiredTools,
            reasoning: object.reasoning,
        };
    } catch (error) {
        console.error('Error in planner agent:', error);
        return {
            shouldQueryBlockchain: true, // Default to querying blockchain if we can't decide
            suggestedAction: 'query_subgraph',
            reasoning: 'Failed to evaluate query, proceeding with blockchain query as fallback',
        };
    }
};

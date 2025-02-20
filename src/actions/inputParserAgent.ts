import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';
import { runGeneratedQuery } from './runGeneratedQuery';

interface Entity {
    type: 'token' | 'ens' | 'address';
    original: string;
    normalized?: string;
}

interface ParsedInput {
    cleanedInput: string;
    entities: Entity[];
}

async function validateENS(ens: string, subgraphUrl: string): Promise<string | undefined> {
    const query = `{
        accounts(where: {id: "${ens.toLowerCase()}"}) {
            id
        }
    }`;

    try {
        const resultStr = await runGeneratedQuery(query, subgraphUrl);
        const result = JSON.parse(resultStr);
        const accounts = result?.data?.accounts || [];
        return accounts[0]?.id;
    } catch (error) {
        console.error('Error validating ENS:', error);
        return undefined;
    }
}

async function validateToken(symbol: string, subgraphUrl: string): Promise<string | undefined> {
    const query = `{
        tokens(where: {symbol: "${symbol}", isListed: true}) {
            id
            symbol
            isListed
        }
    }`;

    try {
        const resultStr = await runGeneratedQuery(query, subgraphUrl);
        const result = JSON.parse(resultStr);
        const tokens = result?.data?.tokens || [];
        const token = tokens[0];
        if (!token) return undefined;

        // Return the token address (id) with a special prefix so we can identify it later
        return `__TOKEN_ADDRESS:${token.id}__`;
    } catch (error) {
        console.error('Error validating token:', error);
        return undefined;
    }
}

export const parseUserInput = async (input: string, subgraphUrl: string): Promise<ParsedInput> => {
    // Handle null/undefined input
    if (!input) {
        return {
            cleanedInput: '',
            entities: [],
        };
    }

    const cleanInput = input.toString();

    try {
        // First, identify potential entities in the input
        const { object } = await generateObject({
            model: cerebras('llama-3.3-70b'),
            schema: z.object({
                entities: z.array(z.object({
                    type: z.enum(['token', 'ens', 'address']),
                    original: z.string(),
                })),
                reasoning: z.string(),
            }),
            system: `You are an input parser agent for blockchain data. Your primary task is to identify tokens and other entities in user queries.

MOST IMPORTANT - Token Detection Rules:
1. Always identify any token symbol that ends with 'x' (e.g., "USDCx", "DAIx", "ETHx")
2. Token symbols must be detected regardless of context or position in the query
3. Token symbols should be detected even when:
   - They are part of a question (e.g., "What are USDCx statistics?")
   - They appear with articles (e.g., "the USDCx token")
   - They are mentioned with chain names (e.g., "USDCx on Avalanche")
   - They are in possessive form (e.g., "USDCx's statistics")

Example Token Detections:
" "What are the statistics for the USDCx token on Avalanche?" → {type: "token", original: "USDCx"}
" "Show me ETHx streams" → {type: "token", original: "ETHx"}
" "Tell me about DAIx" → {type: "token", original: "DAIx"}
" "Compare USDCx and ETHx" → TWO tokens: "USDCx" and "ETHx"

Other Entities to Detect:
1. ENS names (ending in .eth)
   Example: "vitalik.eth" → {type: "ens", original: "vitalik.eth"}
2. Ethereum addresses (0x...)
   Example: "0x123..." → {type: "address", original: "0x123..."}

Return array of ALL identified entities with types.
IMPORTANT: Never miss a token symbol ending in 'x' - these are crucial for queries.`,
            prompt: cleanInput,
        });

        let cleanedInput = cleanInput;
        const validatedEntities: Entity[] = [];

        // Validate and normalize each entity
        for (const entity of object.entities) {
            let normalized: string | undefined;

            switch (entity.type) {
                case 'token':
                    normalized = await validateToken(entity.original, subgraphUrl);
                    break;
                case 'ens':
                    normalized = await validateENS(entity.original, subgraphUrl);
                    break;
                case 'address': {
                    // Addresses are used as-is if they match the format
                    const addressMatch = entity.original.match(/^0x[a-fA-F0-9]{40}$/i);
                    normalized = addressMatch ? entity.original.toLowerCase() : undefined;
                    break;
                }
            }

            if (normalized) {
                if (entity.type === 'token') {
                    // For tokens, extract the actual address from our special format
                    const match = normalized.match(/__TOKEN_ADDRESS:(.+)__/);
                    if (match) {
                        const tokenAddress = match[1];
                        // Replace the token symbol with its address in the input
                        cleanedInput = cleanedInput.replace(
                            new RegExp(`\\b${entity.original}\\b`, 'gi'),
                            tokenAddress
                        );
                        normalized = tokenAddress;
                    }
                } else {
                    // For other entities, replace as before
                    cleanedInput = cleanedInput.replace(
                        new RegExp(`\\b${entity.original}\\b`, 'i'),
                        normalized
                    );
                }

                validatedEntities.push({
                    ...entity,
                    normalized
                });
            }
        }

        return {
            cleanedInput,
            entities: validatedEntities,
        };
    } catch (error) {
        console.error('Error parsing input:', error);
        return {
            cleanedInput: cleanInput,
            entities: [],
        };
    }
};

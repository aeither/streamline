import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';
import { runGeneratedQuery } from './runGeneratedQuery';

interface Entity {
    type: 'token' | 'ens' | 'address';
    original: string;
    normalized?: string;
}

interface ReplacementResult {
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
        tokens(where: {symbol: "${symbol}"}) {
            symbol
        }
    }`;
    
    try {
        const resultStr = await runGeneratedQuery(query, subgraphUrl);
        const result = JSON.parse(resultStr);
        const tokens = result?.data?.tokens || [];
        return tokens[0]?.symbol;
    } catch (error) {
        console.error('Error validating token:', error);
        return undefined;
    }
}

export const replaceEntities = async (input: string, subgraphUrl: string): Promise<ReplacementResult> => {
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
            system: `You are an entity extractor for blockchain data. Identify:

1. Token symbols (e.g., "ETHx", "USDCx", "DAIx", "WETH")
2. ENS names (ending in .eth)
3. Ethereum addresses (0x...)

Examples:
- "Show me ETHx streams" → {type: "token", original: "ETHx"}
- "What's vitalik.eth receiving?" → {type: "ens", original: "vitalik.eth"}
- "Check 0x123... flows" → {type: "address", original: "0x123..."}

Return array of identified entities with types.`,
            prompt: input,
        });

        let cleanedInput = input;
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
                case 'address':
                    // Addresses are used as-is if they match the format
                    normalized = entity.original.match(/^0x[a-fA-F0-9]{40}$/) 
                        ? entity.original.toLowerCase()
                        : undefined;
                    break;
            }

            if (normalized) {
                // Replace in the input if we found a valid normalized form
                cleanedInput = cleanedInput.replace(
                    new RegExp(entity.original, 'i'),
                    normalized
                );
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
        console.error('Error replacing entities:', error);
        return {
            cleanedInput: input,
            entities: [],
        };
    }
};

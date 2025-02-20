import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';
import { runGeneratedQuery } from '../utils/runGeneratedQuery';

interface TokenInfo {
    cleanedInput: string;
    tokenSymbol?: string;
}

interface QueryResult {
    data?: {
        tokens?: Array<{
            id: string;
            symbol: string;
            name: string;
        }>;
    };
}

export const extractTokenSymbol = async (input: string, subgraphUrl: string): Promise<TokenInfo> => {
    try {
        // First, try to extract any token symbol from the input
        const { object } = await generateObject({
            model: cerebras('llama-3.3-70b'),
            schema: z.object({
                hasTokenSymbol: z.boolean(),
                tokenSymbol: z.string().optional(),
                reasoning: z.string(),
            }),
            system: `You are a token symbol extractor. Your task is to:
1. Determine if the user is asking about a specific token
2. Extract the token symbol if present
3. Provide reasoning for your decision

Common token patterns:
- Wrapped tokens: "wETH", "WBTC"
- Super tokens: "ETHx", "USDCx", "DAIx"
- Stablecoins: "USDC", "DAI", "USDT"

Return:
- hasTokenSymbol: true if a token symbol is mentioned
- tokenSymbol: the extracted symbol (if hasTokenSymbol is true)
- reasoning: brief explanation of your decision`,
            prompt: input,
        });

        if (!object.hasTokenSymbol || !object.tokenSymbol) {
            return {
                cleanedInput: input,
            };
        }

        // Query the subgraph to validate the token symbol
        const query = `{
            tokens(where: {symbol: "${object.tokenSymbol}"}) {
                id
                symbol
                name
            }
        }`;

        const resultStr = await runGeneratedQuery(query, subgraphUrl);
        let result: QueryResult;
        try {
            result = JSON.parse(resultStr);
        } catch (e) {
            console.error('Error parsing query result:', e);
            return { cleanedInput: input };
        }

        const tokens = result?.data?.tokens || [];

        // If we found matching tokens, modify the input to use the validated symbol
        if (tokens.length > 0) {
            const token = tokens[0];
            // Replace the original token reference with the validated symbol
            const cleanedInput = input.replace(
                new RegExp(object.tokenSymbol, 'i'),
                token.symbol
            );
            return {
                cleanedInput,
                tokenSymbol: token.symbol,
            };
        }

        // If no tokens found, return original input
        return {
            cleanedInput: input,
        };

    } catch (error) {
        console.error('Error extracting token symbol:', error);
        return {
            cleanedInput: input,
        };
    }
};

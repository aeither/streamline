import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';
import { runGraphQL } from '../utils/runGraphQL';

type TokenQueryResult = {
  tokens: Array<{
    id: string;
    symbol: string;
    isListed: boolean;
  }>;
};

async function findTokenAddress(symbol: string, subgraphUrl: string): Promise<string | undefined> {
    const query = `{
        tokens(where: {symbol: "${symbol}", isListed: true}) {
            id
            symbol
            isListed
        }
    }`;

    try {
        const resultStr = await runGraphQL(query, subgraphUrl);
        const result = JSON.parse(resultStr) as TokenQueryResult;
        const tokens = result?.tokens || [];
        const token = tokens[0];
        return token?.id;
    } catch (error) {
        console.error('Error finding token address:', error);
        return undefined;
    }
}

export async function parseUserMessage(input: string, subgraphUrl: string): Promise<string> {
    try {
        // Step 1: Extract token symbols
        const { object } = await generateObject({
            model: cerebras('llama-3.3-70b'),
            schema: z.object({
                tokens: z.array(z.string())
            }),
            system: "Your task is to identify and extract cryptocurrency token symbols from the given text. Token symbols are typically short, all-uppercase words, often 3-5 letters long, but can vary. They may include numbers or special characters like 'x' at the end.\n\nExamples of token symbols:\n- USDC\n- ETH\n- BTC\n- USDCx\n- ALEPH\n- DAI\n- WBTC\n\nInstructions:\n1. Carefully read the input text.\n2. Identify any words that match the characteristics of token symbols.\n3. Create an array containing these identified token symbols.\n4. If no token symbols are found, return an empty array.\n\nInput: 'What are the statistics for USDCx?'\nExpected output: ['USDCx']\n\nInput: 'Compare the prices of ETH and BTC'\nExpected output: ['ETH', 'BTC']\n\nInput: 'How's the weather today?'\nExpected output: []\n\nNow, extract the token symbols from the following input:",
            prompt: input,
        });

        if (object.tokens.length === 0) {
            return input;
        }

        // Step 2: Get addresses for each token
        let result = input;
        for (const symbol of object.tokens) {
            const address = await findTokenAddress(symbol, subgraphUrl);
            if (address) {
                result = result.replace(symbol, `token address ${address}`);
            }
        }

        return result;
    } catch (error) {
        console.error('Error parsing user message:', error);
        return input;
    }
}

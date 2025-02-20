import { cerebras } from '@ai-sdk/cerebras';
import { generateObject, generateText } from 'ai';
import { z } from 'zod';
import { runGeneratedQuery } from '../utils/runGeneratedQuery';

// Define the query type
type QueryType = 'tokenStatistics' | 'accountData';

const queryTemplates: Record<QueryType, string> = {
    tokenStatistics: `{
        tokenStatistics(where: { id: "$TOKEN_ADDRESS" }) {
            totalNumberOfActiveStreams
            totalNumberOfActiveIndexes
            totalAmountStreamedUntilUpdatedAt
            totalOutflowRate
            totalAmountDistributedUntilUpdatedAt
        }
    }`,
    accountData: `{
        accounts(where: { id: "$ACCOUNT_ADDRESS" }) {
            isSuperApp
            inflows {
                currentFlowRate
                token {
                    symbol
                }
                sender {
                    id
                }
            }
            outflows {
                currentFlowRate
                token {
                    symbol
                }
                receiver {
                    id
                }
            }
        }
    }`,
};

// Validates token symbols and converts them to addresses
async function validateToken(symbol: string, subgraphUrl: string): Promise<string | undefined> {
    const query = `{
        tokens(where: {symbol: "${symbol}", isListed: true}) {
            id
            symbol
        }
    }`;

    try {
        const resultStr = await runGeneratedQuery(query, subgraphUrl);
        const result = JSON.parse(resultStr);
        const tokens = result?.data?.tokens || [];
        return tokens[0]?.id; // Return the first matching token's address
    } catch (error) {
        console.error('Error validating token:', error);
        return undefined;
    }
}

// Step 1: Determine query type
async function getQueryType(userInput: string): Promise<QueryType> {
    const { object } = await generateObject({
        model: cerebras('llama-3.3-70b'),
        schema: z.object({
            queryType: z.enum(['tokenStatistics', 'accountData'] as const),
            reasoning: z.string(),
        }),
        system: `You are a query type determiner for Superfluid subgraph. Based on the user's input, determine the appropriate query type.

Available query types:
- tokenStatistics: Use when asking about token statistics, metrics, or data
- accountData: Use when asking about account information, streams, or balances

Examples:
- "What are the statistics for USDCx?" → tokenStatistics
- "Show me account details for 0x123..." → accountData
- "What are the metrics for DAIx?" → tokenStatistics
- "Tell me about this wallet's streams" → accountData

Return:
- queryType: The type of query to use
- reasoning: Explanation for the chosen query type`,
        prompt: userInput,
    });

    return object.queryType;
}

// Step 2: Extract parameters
async function extractParameters(userInput: string, queryType: QueryType): Promise<Record<string, string>> {
    const { object } = await generateObject({
        model: cerebras('llama-3.3-70b'),
        schema: z.object({
            parameters: z.record(z.string()),
            reasoning: z.string(),
        }),
        system: `You are a parameter extractor for Superfluid subgraph queries. Based on the user's input and the query type, extract relevant parameters.

Query type: ${queryType}

For tokenStatistics, extract:
- TOKEN_ADDRESS: The address or symbol of the token (e.g., "USDCx", "0x1234...")

For accountData, extract:
- ACCOUNT_ADDRESS: The address of the account (e.g., "0x1234...")

Examples:
- "What are the statistics for USDCx?" → { TOKEN_ADDRESS: "USDCx" }
- "Show me account details for 0x123..." → { ACCOUNT_ADDRESS: "0x123..." }
- "What are the metrics for DAIx on Polygon?" → { TOKEN_ADDRESS: "DAIx" }

Return:
- parameters: An object with the extracted parameters
- reasoning: Explanation for the extracted parameters`,
        prompt: userInput,
    });

    return object.parameters;
}

// Step 3: Generate the final Subgraph query
export async function generateSubgraphQuery(userInput: string, subgraphUrl: string): Promise<string> {
    try {
        // Step 1: Get the query type
        const queryType = await getQueryType(userInput);
        const queryTemplate = queryTemplates[queryType];

        // Step 2: Extract parameters
        const parameters = await extractParameters(userInput, queryType);

        // Step 3: Evaluate and process parameters
        for (const [key, value] of Object.entries(parameters)) {
            if (key === 'TOKEN_ADDRESS') {
                // If it's already an address, use it directly
                if (value.startsWith('0x') && value.length === 42) {
                    continue;
                }
                
                // Otherwise, try to validate and fetch token address
                const address = await validateToken(value, subgraphUrl);
                if (!address) {
                    throw new Error(`Invalid token symbol "${value}". Please provide a valid token address or symbol.`);
                }
                parameters[key] = address;
            }
        }

        // Step 4: Generate the query string
        const { text: completedQuery } = await generateText({
            model: cerebras('llama-3.3-70b'),
            system: `You are a GraphQL query generator for Superfluid subgraph. Your task is to fill in the provided query template based on the user's input and extracted parameters. 

Here are some rules:
1. Replace all placeholders in the query template (e.g., $TOKEN_ADDRESS) with their actual values from the parameters.
2. If the parameters are insufficient to complete the query, inform the user accordingly.
3. Return ONLY the completed query, no other text.
4. Preserve the query structure and indentation.

Query template:
${queryTemplate}

Parameters:
${JSON.stringify(parameters)}`,
            prompt: userInput,
        });

        return completedQuery.trim();
    } catch (error) {
        console.error('Error generating Subgraph query:', error);
        throw error;
    }
}

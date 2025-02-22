import { resolveSubgraphUrl } from "../actions/resolveSubgraphUrl";
import { synthetizeResponse } from "../actions/synthetizeResponse";
import { runGraphQL } from "../utils/runGraphQL";
import { extractContextForQuestion } from "./extractContextForQuestion";
import { extractSubgraphParams } from "./extractSubgraphParams";
import { replaceValues } from "./replaceValues";

export async function processGraphQLQuery(message: string) {
    try {
        // Extract context with validation
        const context = await extractContextForQuestion(message);
        if (!context) {
            throw new Error('Failed to extract context from message');
        }

        // Resolve URL and params concurrently if independent
        const [subgraphUrl, subgraphParams] = await Promise.all([
            resolveSubgraphUrl(message).catch(err => {
                throw new Error(`Subgraph URL resolution failed: ${err.message}`);
            }),
            extractSubgraphParams(context).catch(err => {
                throw new Error(`Parameter extraction failed: ${err.message}`);
            }),
        ]);

        // Parse and replace values with error handling
        let parsedParams: { [key: string]: string };
        try {
            parsedParams = JSON.parse(subgraphParams);
        } catch (err: unknown) {
            const error = err as Error;
            console.error("Error parsing subgraph parameters:", error.message);
            throw new Error(`Failed to parse subgraph parameters: ${error.message}`);
        }
        const replacedSubgraphParams = await replaceValues(parsedParams, subgraphUrl);

        // Execute GraphQL query
        const result = await runGraphQL(subgraphUrl, context, replacedSubgraphParams);

        // Synthesize and return response
        return await synthetizeResponse(result, message);
    } catch (error: unknown) {
        const err = error as Error;
        console.error(`GraphQL query processing failed: ${err.message}`);
        throw err;
    }
}
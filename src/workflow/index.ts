import { resolveSubgraphUrl } from "../actions/resolveSubgraphUrl";
import { synthetizeResponse } from "../actions/synthetizeResponse";
import { runGraphQL } from "../utils/runGraphQL";
import { extractContextForQuestion } from "./extractContextForQuestion";
import { extractSubgraphParams } from "./extractSubgraphParams";
import { fillParams } from "./fillParams";
import { replaceValues } from "./replaceValues";

export async function processGraphQLQuery(message: string) {
    console.log(`Processing GraphQL query for message: ${message}`);
    try {
        console.log("Extracting context...");
        const context = await extractContextForQuestion(message);
        if (!context) {
            console.error("Context extraction failed");
            throw new Error('Failed to extract context from message');
        }
        console.log(`Extracted context: ${context}`);

        console.log("Resolving subgraph URL and extracting parameters...");
        const [subgraphUrl, subgraphParams] = await Promise.all([
            resolveSubgraphUrl(message).catch(err => {
                console.error(`Subgraph URL resolution failed: ${err.message}`);
                throw new Error(`Subgraph URL resolution failed: ${err.message}`);
            }),
            extractSubgraphParams(context).catch(err => {
                console.error(`Parameter extraction failed: ${err.message}`);
                throw new Error(`Parameter extraction failed: ${err.message}`);
            }),
        ]);
        console.log(`Resolved subgraph URL: ${subgraphUrl}`);
        console.log(`Extracted subgraph parameters: ${subgraphParams}`);

        console.log("Filling parameters...");
        const filledSubgraphParams = await fillParams(message, subgraphParams);
        console.log(`Filled subgraph parameters: ${filledSubgraphParams}`);

        console.log("Parsing and replacing values...");
        let parsedParams: { [key: string]: string };
        try {
            parsedParams = JSON.parse(filledSubgraphParams);
            // Convert any hex addresses to lowercase
            for (const key in parsedParams) {
                if (typeof parsedParams[key] === 'string' && parsedParams[key].startsWith('0x')) {
                    parsedParams[key] = parsedParams[key].toLowerCase();
                }
            }
        } catch (err: unknown) {
            const error = err as Error;
            console.error(`Error parsing subgraph parameters: ${error.message}`);
            throw new Error(`Failed to parse subgraph parameters: ${error.message}`);
        }

        console.log(`Parsed subgraph parameters: ${JSON.stringify(parsedParams)}`);
        const replacedSubgraphParams = await replaceValues(parsedParams, subgraphUrl);
        console.log(`Replaced subgraph parameters: ${JSON.stringify(replacedSubgraphParams)}`);

        console.log("Executing GraphQL query...");
        console.log("query:", subgraphUrl, context, replacedSubgraphParams);
        const result = await runGraphQL(subgraphUrl, context, replacedSubgraphParams);
        console.log(`GraphQL query result: ${result}`);

        console.log("Synthesizing response...");
        const response = await synthetizeResponse(result, message);
        console.log(`Synthesized response: ${response}`);

        return response;
    } catch (error: unknown) {
        const err = error as Error;
        console.error(`GraphQL query processing failed: ${err.message}`);
        throw err;
    }
}
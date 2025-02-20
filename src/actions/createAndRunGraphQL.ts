import { runGeneratedQuery } from '../utils/runGeneratedQuery';
import { applyTemplate, determineQueryTemplate } from './determineQueryTemplate';

export const createAndRunGraphQL = async (input: string, subgraphUrl: string): Promise<string> => {
    try {
        // Step 1: Determine and apply query template
        console.log("Creating GraphQL query...");
        const template = await determineQueryTemplate(input);
        const query = applyTemplate(template);
        console.log("Generated query:", query);

        // Step 2: Execute the query
        console.log("Executing query...");
        const result = await runGeneratedQuery(query, subgraphUrl);
        console.log("Query result:", result);

        return result;
    } catch (error) {
        console.error('Error in createAndRunGraphQL:', error);
        throw error;
    }
};

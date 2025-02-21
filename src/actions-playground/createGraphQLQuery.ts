import { applyTemplate, determineQueryTemplate } from '../actions/determineQueryTemplate';

export const createGraphQLQuery = async (input: string): Promise<string> => {
    try {
        // Determine which template to use and extract variables
        const template = await determineQueryTemplate(input);
        console.log('Template determined:', template);

        // Apply the template with variables
        const query = applyTemplate(template);
        console.log('Generated query:', query);

        return query;
    } catch (error) {
        console.error('Error creating GraphQL query:', error);
        throw error;
    }
};

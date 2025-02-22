import { getSubgraphQuery } from "../actions-playground/getSubgraphQuery";
import { extractContextForQuestion } from "../workflow/extractContextForQuestion";

async function getFirstContext(question: string) {
    try {
        const context = await extractContextForQuestion(question);
        console.log('First context:', context);
        if (!context) throw new Error('Could not extract context');

        // const query = await getSubgraphQuery(question, context);
        // console.log("🚀 ~ getFirstContext ~ query:", query)
    } catch (error) {
        console.error('Error extracting context:', error);
    }
}

// Example usage
const question = 'What pools a specific user 0x1234 is a member of or part of';
getFirstContext(question);

import { extractContextForQuestion } from "../../src/actions/extractContextForQuestion";
import { getSubgraphQuery } from "../../src/actions/getSubgraphQuery";

async function getFirstContext(question: string) {
    try {
        const context = await extractContextForQuestion(question);
        console.log('First context:', context);
        if (!context) throw new Error('Could not extract context');

        const query = await getSubgraphQuery(question, context);
        console.log("🚀 ~ getFirstContext ~ query:", query)
    } catch (error) {
        console.error('Error extracting context:', error);
    }
}

// Example usage
const question = 'Show me the recent money streams on Avalanche';
getFirstContext(question);

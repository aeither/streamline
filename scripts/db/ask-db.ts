import { extractContextForQuestion } from "../../src/actions/extractContextForQuestion";

async function getFirstContext(question: string) {
    try {
        const context = await extractContextForQuestion(question);
        console.log('First context:', context);
    } catch (error) {
        console.error('Error extracting context:', error);
    }
}

// Example usage
const question = 'Show me the recent money streams on Avalanche';
getFirstContext(question);

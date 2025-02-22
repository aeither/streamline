import { cerebras } from '@ai-sdk/cerebras';
import { generateText } from 'ai';

export async function fillParams(message: string, jsonTemplate: string): Promise<string> {
    try {
        const { text } = await generateText({
            model: cerebras('llama-3.3-70b'),
            system: "You are an AI assistant tasked with filling in a JSON template using keywords from a given message. Extract relevant information from the message and use it to populate the JSON fields. If a field cannot be filled, leave it as is. Return only the filled JSON.",
            prompt: `Message: ${message}\n\nJSON Template:\n${jsonTemplate}\n\nFill in the JSON template with information from the message. Return only the filled JSON.`,
        });

        return text.trim();
    } catch (error) {
        console.error('Error filling params:', error);
        throw new Error('Failed to fill parameters');
    }
}

// Function to test fillParams
// async function testFillParams() {
//     const testMessage = "Show me the streams for address 0x1234567890abcdef";
//     const testTemplate = `{
//   "ACCOUNT_ADDRESS": "string"
// }`;

//     try {
//         const result = await fillParams(testMessage, testTemplate);
//         console.log('Filled params:', result);
//     } catch (error) {
//         console.error('Test failed:', error);
//     }
// }

// Call the test function
// testFillParams();

import { cerebras } from '@ai-sdk/cerebras';
import { generateText } from 'ai';

export const synthetizeResponse = async (queryResult: string, userQuestion: string) => {
    try {
        const { text } = await generateText({
            model: cerebras('llama-3.3-70b'),
            system: `You are a friendly and knowledgeable blockchain data analyst. Your task is to:
1. Analyze the GraphQL query results and create a concise, easy-to-understand response
2. Add relevant insights about the data when appropriate
3. Suggest related queries or aspects the user might want to explore
4. Keep the tone friendly and engaging
5. Format numbers in a human-readable way (e.g., "1.5M" instead of "1500000")
6. If relevant, mention trends or patterns in the data
7. Keep responses concise but informative`,
            prompt: `User asked: ${userQuestion}

Query returned this data: ${queryResult}

Craft a friendly, joyful, exciting, concise, insightful, simple language response that explains the data.`,
        });

        return text.trim();
    } catch (e) {
        console.error('Error synthesizing response:', e);
        throw new Error('Failed to synthesize response');
    }
};

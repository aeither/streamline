import { cerebras } from '@ai-sdk/cerebras';
import { generateText } from 'ai';
import { Embeddings } from '../utils/embeddings';

const embeddings = new Embeddings();

export async function extractContextForQuestion(
    question?: string | null
): Promise<string | undefined> {
    if (!question) {
        return undefined;
    }

    const searchResults = await embeddings.queryQuery(question);
    const context = searchResults.map(result => result.query).join('\n\n');

    if (context.trim().length === 0) {
        return undefined;
    }

    try {
        const { text: confidenceScore } = await generateText({
            model: cerebras('llama-3.3-70b'),
            prompt: `You are an evaluator. Your task is to determine if the provided context is relevant to answering the given question. Respond with a confidence score between 0 and 1.

Question: ${question}

Context: ${context}

How relevant is this context for answering the question? Respond with just a number between 0 and 1.`
        });

        const parsedConfidenceScore = Number.parseFloat(confidenceScore || "0");

        if (parsedConfidenceScore >= 0.7) {
            return context;
        }
    } catch (error) {
        console.error('Error extracting context for question:', error);
        return undefined;
    }

    return undefined;
}

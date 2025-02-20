import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';

interface EvaluationResult {
    shouldAnswerImmediately: boolean;
    immediateResponse?: string;
    reasoning: string;
}

export const evaluateImmediateResponse = async (input: string): Promise<EvaluationResult> => {
    try {
        const { object } = await generateObject({
            model: cerebras('llama-3.3-70b'),
            schema: z.object({
                shouldAnswerImmediately: z.boolean(),
                immediateResponse: z.string().optional(),
                reasoning: z.string(),
            }),
            system: `You are an evaluation agent that determines if a query needs blockchain data or can be answered immediately.

Examples of immediate responses:
- "How do I use the bot?" → Explain bot usage
- "What chains do you support?" → List supported chains
- "What is a stream?" → Explain streaming concept

Examples requiring blockchain data:
- "Show me ETHx streams" → Needs subgraph query
- "Who is receiving the most streams?" → Needs data analysis
- "What's the flow rate of address 0x123?" → Needs current data

Provide:
- shouldAnswerImmediately: true if no blockchain data needed
- immediateResponse: answer if shouldAnswerImmediately is true
- reasoning: explain your decision`,
            prompt: input,
        });

        return {
            shouldAnswerImmediately: object.shouldAnswerImmediately,
            immediateResponse: object.immediateResponse,
            reasoning: object.reasoning,
        };
    } catch (error) {
        console.error('Error evaluating immediate response:', error);
        return {
            shouldAnswerImmediately: false,
            reasoning: 'Failed to evaluate, proceeding with subgraph query',
        };
    }
};

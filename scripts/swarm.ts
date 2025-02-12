import { createGroq } from "@ai-sdk/groq";
import { openai } from '@ai-sdk/openai';
import { Agent, runSwarm } from '@ai-sdk/swarm';
import { generateText, type CoreMessage } from 'ai';
import dotenv from "dotenv";
import * as readline from 'node:readline/promises';
import { z } from 'zod';

dotenv.config();

const groq = createGroq({
    apiKey: process.env.GROQ_API_KEY as string,
});

type Context = { text: string; speechType?: string; targetLanguage?: string, style?: string };

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let text = ''; // Initialize with an empty string
const messages: CoreMessage[] = [];

const manager = new Agent<Context>({
    name: 'Manager',
    system: 'You transfer conversations to the appropriate agent.',
    tools: {
        transferToTranslator: {
            type: 'handover',
            parameters: z.object({
                targetLanguage: z.string(),
            }),
            execute: ({ targetLanguage }, { context }) => ({
                agent: translator,
                context: { targetLanguage, text: context.text },
            }),
        },
        transferToSummarizer: {
            type: 'handover',
            parameters: z.object({}),
            execute: () => ({
                agent: summarizer,
            }),
        },
        transferToRewriter: {
            type: 'handover',
            parameters: z.object({}),
            execute: () => ({
                agent: rewriter,
            }),
        },
    },
});

const translator = new Agent<Context>({
    name: 'Translator',
    system: ({ text, targetLanguage }) =>
        `Translate the following text to ${targetLanguage}:\n\n${text}`,
});

const summarizer = new Agent<Context>({
    name: 'Summarizer',
    system: ({ text }) => `Summarize the following text:\n\n${text}`,
});

const rewriter = new Agent<Context>({
    name: 'Rewriter',
    system: ({ text, speechType }) =>
        `Rewrite the following text in ${speechType}:\n\n${text}`,
    tools: {
        rewriterTool: {
            type: 'function',
            description: 'Rewrite text in a specified style. Provide the rewritten text.',
            parameters: z.object({
                text: z.string().describe('The text to rewrite'),
                style: z.string().describe('The style to rewrite the text in'),
            }),
            execute: async ({ text, style }) => {

                const { text: rewrittenText } = await generateText({
                    model: groq("llama-3.3-70b-versatile"),
                    prompt: `Rewrite the following text in ${style}:\n\n${text}`,
                    maxTokens: 500,
                });
                await new Promise(resolve => setTimeout(resolve, 2000));
                return { rewrittenText: `${rewrittenText} (Rewritten in ${style} style)` };
            },
        },
    },
});

while (true) {
    const userInput = await terminal.question('You: ');

    // If text is empty, use the user input as the initial text
    if (!text) {
        text = userInput;
    }

    const { text: updatedText, responseMessages } = await runSwarm({
        agent: manager,
        context: { text },
        model: openai('gpt-4o', { structuredOutputs: true }),
        prompt: [{ role: 'user', content: userInput }],
        debug: true,
    });

    messages.push(...responseMessages);
    text = updatedText;

    console.log();
    console.log(text);
    console.log();
}

import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText, tool } from 'ai';
import dotenv from "dotenv";
import { z } from 'zod';
import fileContent from './subgraph-schema.txt';

dotenv.config();

const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY as string,
});

export const weatherTool = tool({
    description: 'Display the weather for a location. Give anaswer once the weather is retrieved.',
    parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
    }),
    execute: async ({ location }) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return { weather: 'Sunny', temperature: 75, location };
    },
});

export const createSubgraphQueryTool = tool({
    description: 'Create a GraphQL query string for the Superfluid subgraph based on user requirements',
    parameters: z.object({
        message: z.string().describe('The GraphQL query string to execute'),
    }),
    execute: async ({ message }) => {
        const { text } = await generateText({
            model: openrouter("anthropic/claude-3.5-sonnet"),
            system: `You are a helpful assistant that generates GraphQL queries based on schema and user requirements. The schema is:${fileContent}`,
            prompt: message,
        });

        console.log("🚀 ~ execute: ~ text:", text)
        return {
            query: text
        };
    },
});

export const tools = {
    displayWeather: weatherTool,
    createSubgraphQuery: createSubgraphQueryTool,
};
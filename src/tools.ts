import { generateObject, generateText, tool } from 'ai';
import dotenv from "dotenv";
import { z } from 'zod';
import { groq, openrouter } from "./models";
import fileContent from './subquery/streams.txt';

dotenv.config();

const weatherTool = tool({
    description: 'Display the weather for a location. Give anaswer once the weather is retrieved.',
    parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
    }),
    execute: async ({ location }) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return { weather: 'Sunny', temperature: 75, location };
    },
});

 const createSubgraphQueryTool = tool({
    description: 'Create a GraphQL query string for the Superfluid subgraph based on user requirements',
    parameters: z.object({
        message: z.string().describe('The GraphQL query string to execute'),
    }),
    execute: async ({ message }) => {
        const { text } = await generateText({
            model: groq("llama-3.3-70b-versatile"),
            system: `Return only the GraphQL query within a code block. The schema is: ${fileContent}`,
            prompt: message,
        });

        console.log("🚀 ~ execute: ~ text:", text)
        return {
            query: text
        };
    },
});

const generateSubgraphQueryTool = tool({
    description: 'Create a GraphQL query string for the Superfluid subgraph based on user requirements',
    parameters: z.object({
        message: z.string().describe('The GraphQL query string to execute'),
    }),
    execute: async ({ message }) => {
        const { object } = await generateObject({
            model: openrouter("anthropic/claude-3.5-sonnet"),
            system: `Return only the GraphQL query within a code block. The schema is: ${fileContent}`,
            prompt: message,
            schema: z.object({}),
        });

        // Extract the query string from the code block
        const queryString = String(object).replace(/``````/g, '').trim();

        return { query: queryString };
    },
});


export const tools = {
    displayWeather: weatherTool,
    createSubgraphQuery: createSubgraphQueryTool,
    // generateSubgraphQuer: generateSubgraphQueryTool,
};
import { tool as createTool } from 'ai';
import { z } from 'zod';

export const weatherTool = createTool({
    description: 'Display the weather for a location. Give anaswer once the weather is retrieved.',
    parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
    }),
    execute: async ({ location }) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return { weather: 'Sunny', temperature: 75, location };
    },
});

export const tools = {
    displayWeather: weatherTool,
};
import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';

const { object } = await generateObject({
    model: cerebras('llama-3.3-70b'),
    schema: z.object({
        recipe: z.object({
            name: z.string(),
            ingredients: z.array(z.string()),
            steps: z.array(z.string())
        })
    }),
    prompt: 'Generate a lasagna recipe.',
});

console.log(JSON.stringify(object, null, 2));

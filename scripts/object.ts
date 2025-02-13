import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

const { object } = await generateObject({
    model: openai('gpt-4o-mini'),
    schema: z.string(),
    prompt: 'Generate a lasagna recipe.',
});

console.log(JSON.stringify(object, null, 2));
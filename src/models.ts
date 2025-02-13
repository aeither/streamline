import { createCerebras } from "@ai-sdk/cerebras";
import { createGroq } from "@ai-sdk/groq";
import { openai } from "@ai-sdk/openai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY ?? '',
});

export const groq = createGroq({
    apiKey: process.env.GROQ_API_KEY ?? '',
});

export const cerebras = createCerebras({
    apiKey: process.env.CEREBRAS_API_KEY ?? '',
});

export { openai };

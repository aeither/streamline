import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";
import dotenv from "dotenv";

dotenv.config();

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY as string,
});

async function main(prompt: string) {
  try {
    console.log("Generating response using Groq...");
    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      prompt: prompt,
      maxTokens: 500,
    });

    console.log(`Generated response:\n${text}`);
  } catch (error) {
    console.error("Error processing prompt:", error);
  }
}

// Example usage
const testPrompt = "Explain the concept of recursion in programming.";
main(testPrompt);

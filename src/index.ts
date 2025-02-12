import { createGroq } from "@ai-sdk/groq";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";
import { Client, GatewayIntentBits, type Message } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const groq = createGroq({
    apiKey: process.env.GROQ_API_KEY as string,
    // Add any additional custom settings here
});

console.log("Initializing Discord bot...");

// Instantiate a new Discord client with the necessary intents.
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Listen for when the bot is ready
client.once('ready', () => {
    console.log(`Bot is ready! Logged in as ${client.user?.tag}`);
});

// Listen for incoming messages.
client.on("messageCreate", async (message: Message) => {
    // Ignore messages from bots.
    if (message.author.bot) return;

    console.log(`Received message from ${message.author.tag}: ${message.content}`);

    try {
        console.log("Generating response using OpenRouter...");
        // Use the "ai" package with OpenRouter's chat model to generate a response.
        const { text } = await generateText({
            model: groq("llama-3.3-70b-versatile"), // Using Mistral which has better availability
            prompt: message.content,
            maxTokens: 500, // Adding a token limit for safety
        });

        console.log(`Generated response: ${text}`);

        // Reply to the message with the generated text.
        await message.reply(text || "I couldn't generate a response.");
    } catch (error) {
        console.error("Error processing message:", error);
        let errorMessage = "Sorry, something went wrong.";
        
        // Check if it's a rate limit error
        if (error instanceof Error && error.toString().includes("rate limit")) {
            errorMessage = "I'm currently rate limited. Please try again in a minute.";
        }
        
        await message.reply(errorMessage);
    }
});

// Log in to Discord using your token.
console.log("Attempting to log in to Discord...");
client.login(process.env.DISCORD_TOKEN as string);

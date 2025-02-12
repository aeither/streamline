import { createGroq } from "@ai-sdk/groq";
import { generateText, tool } from "ai";
import { Client, GatewayIntentBits, type Message } from "discord.js";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const groq = createGroq({
    apiKey: process.env.GROQ_API_KEY as string,
});

console.log("Initializing Discord bot...");

const helloWorldTool = tool({
    description: "A simple tool that returns 'Hello, world!' when called.",
    parameters: z.object({}),
    execute: async () => "Hello, world!",
});

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once("ready", () => {
    console.log(`Bot is ready! Logged in as ${client.user?.tag}`);
});

client.on("messageCreate", async (message: Message) => {
    if (message.author.bot) return;

    console.log(`Received message from ${message.author.tag}: ${message.content}`);

    try {
        console.log("Generating response using Groq...");
        const { text } = await generateText({
            model: groq("llama-3.3-70b-versatile"),
            prompt: message.content,
            tools: {
                helloWorldTool,
            },
        });

        console.log(`Generated response: ${text}`);
        await message.reply(text || "I couldn't generate a response.");
    } catch (error) {
        console.error("Error processing message:", error);
        let errorMessage = "Sorry, something went wrong.";

        if (error instanceof Error && error.toString().includes("rate limit")) {
            errorMessage = "I'm currently rate limited. Please try again in a minute.";
        }

        await message.reply(errorMessage);
    }
});

console.log("Attempting to log in to Discord...");
client.login(process.env.DISCORD_TOKEN as string);

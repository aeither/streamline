import { groq } from "@ai-sdk/groq";
import { synthetizeResponse } from "./actions/synthetizeResponse";
import { ChannelType, Client, GatewayIntentBits, type Message } from "discord.js";
import dotenv from "dotenv";
import { determineChain } from "./actions/determineChain";
import { generateQuery } from "./actions/generateQuery";
import { runGeneratedQuery } from "./actions/runGeneratedQuery";

const REQUIRE_BOT_MENTION = false; // Set to true if you want the bot to only respond to mentions

dotenv.config();


console.log("Initializing Discord bot...");

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

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    if (REQUIRE_BOT_MENTION && !message.mentions.has(client.user!)) return;

    console.log(`Received mention from ${message.author.tag}: ${message.content}`);

    try {
        if (message.channel.type === ChannelType.GuildText || message.channel.type === ChannelType.DM) {
            await message.channel.sendTyping();
        }

        // Remove the bot's mention from the message content
        const cleanContent = message.content.replace(new RegExp(`<@!?${client.user?.id}>`, 'g'), '').trim();

        console.log("Determining appropriate chain...");
        const subgraphUrl = await determineChain(cleanContent);
        console.log("Using subgraph:", subgraphUrl);
        console.log("Generating response using OpenRouter...");
        const query = await generateQuery(cleanContent);
        console.log("🚀 ~ client.on ~ query:", query)

        console.log("Executing query...");
        const result = await runGeneratedQuery(query, subgraphUrl);
        console.log("🚀 ~ client.on ~ result:", result)

        console.log("Synthesizing response...");
        const response = await synthetizeResponse(result, cleanContent);
        
        // Ensure the response fits within Discord's message limit
        const truncatedResponse = response.slice(0, 19999);

        await message.reply(truncatedResponse || "I couldn't generate a response.");
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

import { generateText } from "ai";
import { ChannelType, Client, GatewayIntentBits, type Message } from "discord.js";
import dotenv from "dotenv";
import { generateQuery } from "./actions/generateQuery";
import { openrouter } from "./models";
import { tools } from './tools';

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

        console.log("Generating response using OpenRouter...");
        const query = await generateQuery(cleanContent);
        console.log("🚀 ~ client.on ~ query:", query)
        
        console.log("Generating response using OpenRouter...");
        const { text } = await generateText({
            model: openrouter("openai/gpt-4o-mini"),
            prompt: cleanContent,
            tools,
            maxSteps: 5,
            onStepFinish({ toolCalls, toolResults, finishReason, usage }) {
                if (toolCalls && toolCalls.length > 0) {
                    console.log("Tool called");
                    console.log(`${JSON.stringify(toolCalls)}`);
                    console.log("Tool result");
                    console.log(`${JSON.stringify(toolResults)}`);
                }
                // You can log other intermediate results here if needed
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

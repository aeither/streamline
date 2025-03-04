import { ChannelType, Client, GatewayIntentBits, type Message } from "discord.js";
import dotenv from "dotenv";
import { createAndRunGraphQL } from "./actions/createAndRunGraphQL";
import { parseUserMessage } from "./actions/parseUserMessage";
import { plan } from "./actions/plannerAgent";
import { processGraphQLQuery } from "./workflow";
import { handleOnChainQuery } from "./actions/onChainAgent";

dotenv.config();

console.log("Initializing Discord bot...");

const DISCORD_AGENT_REQUIRE_BOT_MENTION = process.env.DISCORD_AGENT_REQUIRE_BOT_MENTION?.toLowerCase() !== 'false';

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
    if (DISCORD_AGENT_REQUIRE_BOT_MENTION && client.user && !message.mentions.has(client.user.id)) return;

    console.log(`Received message from ${message.author.tag}: ${message.content}`);

    try {
        if (message.channel.type === ChannelType.GuildText || message.channel.type === ChannelType.DM) {
            await message.channel.sendTyping();
        }

        // Remove the bot's mention from the message content
        const cleanMessage = message.content.replace(
            client.user ? new RegExp(`<@!?${client.user.id}>`, 'g') : /^/,
            ''
        ).trim();

        // Step 1: Plan query execution
        console.log("Planning query execution...");
        const queryPlan = await plan(cleanMessage);
        console.log("Query execution plan:", queryPlan);

        if (!queryPlan.shouldQueryBlockchain) {
            console.log("Providing immediate response");
            const response = queryPlan.immediateResponse || "I understand your question, but I'm not sure how to answer it.";
            await message.reply(response);
            return;
        }

        // Handle on-chain read requests
        if (queryPlan.suggestedAction === 'onchain_read') {
            console.log("Performing on-chain read");
            const onChainResult = await handleOnChainQuery(message.content);
            
            if (onChainResult.error) {
                await message.reply(`Error reading on-chain data: ${onChainResult.error}`);
                return;
            }
            
            const response = onChainResult.query || "I couldn't retrieve any on-chain data.";
            await message.reply(response);
            return;
        }

        const response = await processGraphQLQuery(cleanMessage);

        const finalResponse = response?.trim() 
            ? response.slice(0, 19999) 
            : "I couldn't generate a response based on the data. Please try asking in a different way.";
            
        await message.reply(finalResponse);
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

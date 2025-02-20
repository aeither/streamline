import { groq } from "@ai-sdk/groq";
import { synthetizeResponse } from "./actions/synthetizeResponse";
import { ChannelType, Client, GatewayIntentBits, type Message } from "discord.js";
import dotenv from "dotenv";
import { determineChain } from "./actions/determineChain";
import { createGraphQLQuery } from "./actions/createGraphQLQuery";
import { runGeneratedQuery } from "./actions/runGeneratedQuery";
import { replaceEntities } from "./actions/replaceEntities";
import { orchestrateQuery } from "./actions/orchestratorAgent";
import { determineQueryType } from "./actions/determineQueryType";

const REQUIRE_BOT_MENTION = false;

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
    if (REQUIRE_BOT_MENTION && client.user && !message.mentions.has(client.user.id)) return;

    console.log(`Received message from ${message.author.tag}: ${message.content}`);

    try {
        if (message.channel.type === ChannelType.GuildText || message.channel.type === ChannelType.DM) {
            await message.channel.sendTyping();
        }

        // Remove the bot's mention from the message content
        const cleanContent = message.content.replace(
            client.user ? new RegExp(`<@!?${client.user.id}>`, 'g') : /^/, 
            ''
        ).trim();

        // Step 1: Let the orchestrator decide how to handle the query
        console.log("Orchestrating query handling...");
        const decision = await orchestrateQuery(cleanContent);
        console.log("Orchestrator decision:", decision);
        
        if (!decision.shouldQueryBlockchain) {
            console.log("Providing immediate response");
            await message.reply(decision.immediateResponse || "I understand your question, but I'm not sure how to answer it.");
            return;
        }

        // Step 2: Determine subgraph URL
        console.log("Determining appropriate chain...");
        const subgraphUrl = await determineChain(cleanContent);
        console.log("Using subgraph:", subgraphUrl);

        // Step 3: Replace entities based on orchestrator's suggestions
        console.log("Replacing entities...");
        const { cleanedInput, entities } = await replaceEntities(cleanContent, subgraphUrl);
        console.log("Cleaned input:", cleanedInput);
        console.log("Found entities:", entities);

        // Step 4: Determine query type
        console.log("Determining query type...");
        const queryType = await determineQueryType(cleanedInput);
        console.log("Query type:", queryType);

        // Step 5: Generate and execute query
        console.log("Creating GraphQL query...");
        const query = await createGraphQLQuery(cleanedInput);
        console.log("Generated query:", query);

        console.log("Executing query...");
        const result = await runGeneratedQuery(query, subgraphUrl);
        console.log("Query result:", result);

        // Step 6: Synthesize response
        console.log("Synthesizing response...");
        const response = await synthetizeResponse(result, cleanedInput);
        
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

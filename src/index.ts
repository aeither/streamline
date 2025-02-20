import { ChannelType, Client, GatewayIntentBits, type Message } from "discord.js";
import dotenv from "dotenv";
import { createAndRunGraphQL } from "./actions/createAndRunGraphQL";
import { parseUserInput } from "./actions/inputParserAgent";
import { plan } from "./actions/plannerAgent";
import { resolveSubgraphUrl } from "./actions/resolveSubgraphUrl";
import { synthetizeResponse } from "./actions/synthetizeResponse";

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

        // Step 1: Plan query execution
        console.log("Planning query execution...");
        const queryPlan = await plan(cleanContent);
        console.log("Query execution plan:", queryPlan);
        
        if (!queryPlan.shouldQueryBlockchain) {
            console.log("Providing immediate response");
            await message.reply(queryPlan.immediateResponse || "I understand your question, but I'm not sure how to answer it.");
            return;
        }

        // Step 2: Resolve subgraph URL
        console.log("Resolving Superfluid subgraph URL...");
        const subgraphUrl = await resolveSubgraphUrl(cleanContent);
        console.log("Using subgraph:", subgraphUrl);

        // Step 3: Parse user input
        console.log("Parsing user input...");
        const { cleanedInput, entities } = await parseUserInput(cleanContent, subgraphUrl);
        console.log("Parsed input:", cleanedInput);
        console.log("Found entities:", entities);

        // Step 4: Create and execute GraphQL query
        const result = await createAndRunGraphQL(cleanedInput, subgraphUrl);

        // Step 5: Synthesize response
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

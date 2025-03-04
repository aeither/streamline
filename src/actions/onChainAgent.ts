import { groq } from '@ai-sdk/groq';
import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { superfluid } from "@goat-sdk/plugin-superfluid";
import { viem } from "@goat-sdk/wallet-viem";
import { generateText } from 'ai';
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { base } from 'viem/chains';

interface OnChainResponse {
    response: string;
    error?: string;
}

// Ensure the private key has the correct format (0x prefix and is a hex string)
const formatPrivateKey = (key: string): `0x${string}` => {
    // Remove 0x prefix if it exists
    const cleanKey = key.startsWith('0x') ? key.slice(2) : key;
    // Ensure it's a valid hex string
    if (!/^[0-9a-fA-F]+$/.test(cleanKey)) {
        throw new Error('Private key must be a hexadecimal string');
    }
    // Return with 0x prefix
    return `0x${cleanKey}` as `0x${string}`;
};

// Get and format the private key
const privateKey = process.env.PRIVATE_KEY 
    ? formatPrivateKey(process.env.PRIVATE_KEY)
    : (() => { throw new Error('PRIVATE_KEY environment variable is required'); })();

const account = privateKeyToAccount(privateKey);

const walletClient = createWalletClient({
    account: account,
    transport: http(),
    chain: base,
});

export const handleOnChainQuery = async (input: string) => {
    try {
        const tools = await getOnChainTools({
            wallet: viem(walletClient as any),
            plugins: [
                superfluid(),
            ],
        });

        const { text, toolCalls } = await generateText({
            model: groq('qwen-2.5-32b'),
            tools: tools,
            system: `You are an on-chain data reader for Superfluid protocol. 
            Available tools: get_address, get_chain, get_balance, sign_message, create_or_update_or_delete_flow, get_flow_rate, update_member_units, 
            get_member_units, get_member_flow_rate, get_total_flow_rate, is_member_connected, get_net_flow, transferability_for_units_owner, distribution_from_any_address, 
            admin, super_token, get_total_units, get_total_connected_units, get_total_disconnected_units, get_total_connected_flow_rate, get_total_disconnected_flow_rate, 
            get_total_amount_received_by_member, get_claimable_now.
Use these tools to fetch on-chain data when needed. Format responses in a clear, human-readable way.`,
            prompt: input,
            maxSteps: 2
        });
        console.log("🚀 ~ handleOnChainQuery ~ toolCalls:", toolCalls)

        return {
            query: text || "I couldn't retrieve any on-chain data. Please try a different question."
        };
    } catch (error) {
        console.error('Error in onChain agent:', error);
        return {
            query: 'I ran into an issue while fetching on-chain data. Please try again or ask a different question.',
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
};

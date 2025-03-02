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

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

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
            prompt: input
        });
        console.log("🚀 ~ handleOnChainQuery ~ toolCalls:", toolCalls)

        return {
            query: text
        };
    } catch (error) {
        console.error('Error in onChain agent:', error);
        return {
            query: 'Not Found',
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
};

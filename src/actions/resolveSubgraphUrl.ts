import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';

const chains = [
    {
        name: 'ethereum',
        url: 'https://eth-mainnet.subgraph.x.superfluid.dev',
        aliases: ['eth', 'eth mainnet', 'ethereum mainnet', 'mainnet'],
    },
    {
        name: 'base',
        url: 'https://base-mainnet.subgraph.x.superfluid.dev',
        aliases: ['base mainnet', 'base-mainnet', 'base network', 'base chain'],
    },
    {
        name: 'polygon',
        url: 'https://polygon-mainnet.subgraph.x.superfluid.dev',
        aliases: ['matic', 'polygon mainnet', 'polygon network'],
    },
    {
        name: 'optimism',
        url: 'https://optimism-mainnet.subgraph.x.superfluid.dev',
        aliases: ['optimism mainnet', 'optimism network', 'op mainnet'],
    },
    {
        name: 'arbitrum',
        url: 'https://arbitrum-one.subgraph.x.superfluid.dev',
        aliases: ['arbitrum one', 'arbitrum mainnet', 'arbitrum network'],
    },
    {
        name: 'gnosis',
        url: 'https://xdai-mainnet.subgraph.x.superfluid.dev',
        aliases: ['xdai', 'gnosis chain', 'gnosis mainnet'],
    },
    {
        name: 'avalanche',
        url: 'https://avalanche-c.subgraph.x.superfluid.dev',
        aliases: ['avax', 'avalanche mainnet', 'avalanche network', 'avalanche c'],
    },
    {
        name: 'bsc',
        url: 'https://bsc-mainnet.subgraph.x.superfluid.dev',
        aliases: ['binance smart chain', 'bnb smart chain', 'bsc mainnet'],
    },
    {
        name: 'celo',
        url: 'https://celo-mainnet.subgraph.x.superfluid.dev',
        aliases: ['celo mainnet', 'celo network'],
    },
    {
        name: 'degen',
        url: 'https://degenchain.subgraph.x.superfluid.dev',
        aliases: ['degen chain', 'degen mainnet', 'degen network'],
    },
    {
        name: 'scroll',
        url: 'https://scroll-mainnet.subgraph.x.superfluid.dev',
        aliases: ['scroll mainnet', 'scroll network'],
    },
    // Testnets
    {
        name: 'fuji',
        url: 'https://avalanche-fuji.subgraph.x.superfluid.dev',
        aliases: ['avalanche fuji', 'avalanche testnet', 'fuji testnet'],
    },
    {
        name: 'sepolia',
        url: 'https://eth-sepolia.subgraph.x.superfluid.dev',
        aliases: ['eth sepolia', 'ethereum sepolia', 'sepolia testnet'],
    },
    {
        name: 'optimism-sepolia',
        url: 'https://optimism-sepolia.subgraph.x.superfluid.dev',
        aliases: ['optimism sepolia testnet'],
    },
    {
        name: 'scroll-sepolia',
        url: 'https://scroll-sepolia.subgraph.x.superfluid.dev',
        aliases: ['scroll sepolia testnet'],
    },
    {
        name: 'base-sepolia',
        url: 'https://base-sepolia.subgraph.x.superfluid.dev',
        aliases: ['base sepolia testnet'],
    },
];

export const resolveSubgraphUrl = async (input: string): Promise<string> => {
    try {
        // First try to detect chain from input
        const { object } = await generateObject({
            model: cerebras('llama-3.3-70b'),
            schema: z.object({
                chainName: z.string(),
                reasoning: z.string(),
            }),
            system: `You are a blockchain network detector. Your task is to identify which blockchain network a user's query refers to.

Available networks:
${chains.map(chain => `- ${chain.name} (aliases: ${chain.aliases.join(', ')})`).join('\n')}

Return:
- chainName: The name of the chain mentioned (exactly as shown in the list)
- reasoning: Why you chose this chain

If no chain is explicitly mentioned, return an empty string for chainName.
Examples:
- "Show me streams on Polygon" → chainName: "polygon"
- "What's happening on Base?" → chainName: "base"
- "Show me all streams" → chainName: ""`,
            prompt: input,
        });

        // If a chain was detected, find its URL
        if (object.chainName) {
            const selectedChain = chains.find(chain => 
                chain.name.toLowerCase() === object.chainName.toLowerCase() ||
                chain.aliases.some(alias => alias.toLowerCase() === object.chainName.toLowerCase())
            );
            if (selectedChain) return selectedChain.url;
        }

        // If no chain was detected or found, default to Base
        const baseChain = chains.find(chain => chain.name === 'base');
        if (!baseChain) throw new Error('Default chain (Base) not found in configuration');
        return baseChain.url;

    } catch (error) {
        console.error('Error resolving subgraph URL:', error);
        throw error;
    }
};

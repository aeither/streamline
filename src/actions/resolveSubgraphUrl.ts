import { cerebras } from '@ai-sdk/cerebras';
import { generateText } from 'ai';

const chains = [
    {
        name: 'Ethereum Mainnet',
        id: 1,
        url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet',
    },
    {
        name: 'Polygon',
        id: 137,
        url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic',
    },
    {
        name: 'Gnosis Chain (formerly xDAI)',
        id: 100,
        url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-xdai',
    },
    {
        name: 'Optimism',
        id: 10,
        url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-mainnet',
    },
    {
        name: 'Arbitrum One',
        id: 42161,
        url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-arbitrum-one',
    },
    {
        name: 'Avalanche C-Chain',
        id: 43114,
        url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-avalanche-c',
    },
    {
        name: 'BNB Smart Chain',
        id: 56,
        url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-bsc-mainnet',
    },
    {
        name: 'Celo',
        id: 42220,
        url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-celo-mainnet',
    },
];

export const resolveSubgraphUrl = async (input: string): Promise<string> => {
    try {
        const response = await generateText({
            model: cerebras('llama-3.3-70b'),
            system: `You are a chain resolver for Superfluid queries. Your task is to determine which blockchain network a query is about.

Available chains:
${chains.map(chain => `- ${chain.name} (Chain ID: ${chain.id})`).join('\n')}

If no specific chain is mentioned:
1. Default to Ethereum Mainnet for token symbols starting with 'ETH'
2. Default to Polygon for token symbols starting with 'MATIC'
3. Otherwise, use Ethereum Mainnet

Examples:
- "Show me streams on Polygon" → Polygon
- "What's happening on Arbitrum?" → Arbitrum One
- "Check ETHx flows" → Ethereum Mainnet
- "Show MATICx streams" → Polygon
- "List all streams" → Ethereum Mainnet

Return ONLY the chain name exactly as listed above. No other text.`,
            prompt: input,
        });

        const selectedChain = chains.find(chain => 
            chain.name.toLowerCase() === response.trim().toLowerCase()
        );

        return selectedChain?.url || chains[0].url; // Default to Ethereum Mainnet
    } catch (error) {
        console.error('Error resolving subgraph URL:', error);
        return chains[0].url; // Default to Ethereum Mainnet on error
    }
};

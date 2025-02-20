import { cerebras } from '@ai-sdk/cerebras';
import { generateText } from 'ai';

const chains = [
    {
        name: 'Ethereum Mainnet',
        id: 1,
        url: 'https://eth-mainnet.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Base Mainnet',
        id: 8453,
        url: 'https://base-mainnet.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Polygon',
        id: 137,
        url: 'https://polygon-mainnet.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Optimism',
        id: 10,
        url: 'https://optimism-mainnet.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Arbitrum One',
        id: 42161,
        url: 'https://arbitrum-one.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Gnosis Chain',
        id: 100,
        url: 'https://xdai-mainnet.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Avalanche C-Chain',
        id: 43114,
        url: 'https://avalanche-c.subgraph.x.superfluid.dev/',
    },
    {
        name: 'BNB Smart Chain',
        id: 56,
        url: 'https://bsc-mainnet.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Celo',
        id: 42220,
        url: 'https://celo-mainnet.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Degen Chain',
        id: 69420,
        url: 'https://degenchain.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Scroll',
        id: 534352,
        url: 'https://scroll-mainnet.subgraph.x.superfluid.dev/',
    },
    // Testnet chains
    {
        name: 'Avalanche Fuji',
        id: 43113,
        url: 'https://avalanche-fuji.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Sepolia',
        id: 11155111,
        url: 'https://eth-sepolia.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Optimism Sepolia',
        id: 11155420,
        url: 'https://optimism-sepolia.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Scroll Sepolia',
        id: 534351,
        url: 'https://scroll-sepolia.subgraph.x.superfluid.dev/',
    },
    {
        name: 'Base Sepolia',
        id: 84532,
        url: 'https://base-sepolia.subgraph.x.superfluid.dev/',
    },
];

export const resolveSubgraphUrl = async (input: string): Promise<string> => {
    try {
        const { text } = await generateText({
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
            chain.name.toLowerCase() === text.trim().toLowerCase()
        );

        return selectedChain?.url || chains[0].url; // Default to Ethereum Mainnet
    } catch (error) {
        console.error('Error resolving subgraph URL:', error);
        return chains[0].url; // Default to Ethereum Mainnet on error
    }
};

import { groq } from '@ai-sdk/groq';
import { openrouter } from '@openrouter/ai-sdk-provider';
import { generateText } from 'ai';

const chains = [
  {
    "Network Name": "Gnosis Chain",
    "Canonical Name": "xdai-mainnet",
    "Chain ID": 100,
    "Subgraph URL": "https://xdai-mainnet.subgraph.x.superfluid.dev/"
  },
  {
    "Network Name": "Polygon",
    "Canonical Name": "polygon-mainnet",
    "Chain ID": 137,
    "Subgraph URL": "https://polygon-mainnet.subgraph.x.superfluid.dev/"
  },
  {
    "Network Name": "Optimism",
    "Canonical Name": "optimism-mainnet",
    "Chain ID": 10,
    "Subgraph URL": "https://optimism-mainnet.subgraph.x.superfluid.dev/"
  },
  {
    "Network Name": "Arbitrum One",
    "Canonical Name": "arbitrum-one",
    "Chain ID": 42161,
    "Subgraph URL": "https://arbitrum-one.subgraph.x.superfluid.dev/"
  },
  {
    "Network Name": "Avalanche C",
    "Canonical Name": "avalanche-c",
    "Chain ID": 43114,
    "Subgraph URL": "https://avalanche-c.subgraph.x.superfluid.dev/"
  },
  {
    "Network Name": "BNB Smart Chain",
    "Canonical Name": "bsc-mainnet",
    "Chain ID": 56,
    "Subgraph URL": "https://bsc-mainnet.subgraph.x.superfluid.dev/"
  },
  {
    "Network Name": "Ethereum",
    "Canonical Name": "eth-mainnet",
    "Chain ID": 1,
    "Subgraph URL": "https://eth-mainnet.subgraph.x.superfluid.dev/"
  },
  {
    "Network Name": "Celo",
    "Canonical Name": "celo-mainnet",
    "Chain ID": 42220,
    "Subgraph URL": "https://celo-mainnet.subgraph.x.superfluid.dev/"
  },
  {
    "Network Name": "Base",
    "Canonical Name": "base-mainnet",
    "Chain ID": 8453,
    "Subgraph URL": "https://base-mainnet.subgraph.x.superfluid.dev/"
  },
  {
    "Network Name": "Scroll",
    "Canonical Name": "scroll-mainnet",
    "Chain ID": 534352,
    "Subgraph URL": "https://scroll-mainnet.subgraph.x.superfluid.dev/"
  },
  {
    "Network Name": "Degen Chain",
    "Canonical Name": "degenchain",
    "Chain ID": 666666666,
    "Subgraph URL": "https://degenchain.subgraph.x.superfluid.dev/"
  }
];

export const determineChain = async (input: string): Promise<string> => {
  try {
    const result = await generateText({
      model: groq('llama-3.3-70b-versatile'),
      system: `You are a chain selector. Given a user's message, determine which blockchain network they are most likely referring to. 
            Only return the exact Subgraph URL from the following options: ${JSON.stringify(chains)}. 
            If no specific chain is mentioned or unclear, default to Base mainnet. Return only the URL, no other text.`,
      prompt: input,
    });

    const url = result.text.trim();
    // Validate the URL is one of our known URLs
    if (!chains.some(chain => chain["Subgraph URL"] === url)) {
      return chains.find(chain => chain["Network Name"] === "Base")?.["Subgraph URL"] ?? "";
    }
    return url;
  } catch (e) {
    console.error(e);
    // Default to Base mainnet on error
    return chains.find(chain => chain["Network Name"] === "Base")?.["Subgraph URL"] ?? "";
  }
};
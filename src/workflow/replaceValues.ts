import { createPublicClient, http, parseUnits } from "viem";
import { mainnet } from "viem/chains";
import { normalize } from "viem/ens"; // For ENS normalization
import { runGraphQL } from "../utils/runGraphQL";

// Pre-configured Mainnet public client for ENS resolution
export const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(),
});

interface InputData {
    [key: string]: string;
}

// Define the expected GraphQL query result shape
type TokenQueryResult = {
  tokens: Array<{
    id: string;
    symbol: string;
    isListed: boolean;
  }>;
};

// Conversion functions
async function findTokenAddress(symbol: string, subgraphUrl: string): Promise<string | undefined> {
    const query = `{
    tokens(where: {symbol: "${symbol}", isListed: true}) {
      id
      symbol
      isListed
    }
  }`;

    try {
        const resultStr = await runGraphQL(query, subgraphUrl);
        const result = JSON.parse(resultStr) as TokenQueryResult;
        const tokens = result?.tokens || [];
        const token = tokens[0];
        return token?.id;
    } catch (error: unknown) {
        const err = error as Error;
        console.error("Error finding token address:", err.message);
        return undefined;
    }
}

function convertToWei(amount: string, decimals = 18): string {
    return parseUnits(amount, decimals).toString();
}

async function resolveENS(ens: string): Promise<string> {
    const address = await publicClient.getEnsAddress({ name: normalize(ens) });
    if (!address) throw new Error(`ENS resolution failed for ${ens}`);
    return address;
}

// Type detection and replacement
export async function replaceValues(
    input: InputData,
    subgraphUrl: string
): Promise<Record<string, string>> {
    const output = { ...input };

    for (const [key, value] of Object.entries(output)) {
        // ENS: Ends with ".eth"
        if (value.endsWith(".eth")) {
            try {
                output[key] = await resolveENS(value);
            } catch (e: unknown) {
                const error = e as Error;
                console.warn(`Skipping ENS resolution for ${value}: ${error.message}`);
            }
        }
        // Number: Matches decimal or integer (e.g., "0.1", "42")
        else if (/^\d*\.?\d+$/.test(value)) {
            try {
                output[key] = convertToWei(value);
            } catch (e: unknown) {
                const error = e as Error;
                console.warn(`Skipping wei conversion for ${value}: ${error.message}`);
            }
        }
        // Token symbol: Short string (2-6 chars, e.g., "ETH", "USDC", "dai")
        else if (/^[A-Za-z]{2,6}$/.test(value)) {
            try {
                const tokenAddress = await findTokenAddress(value, subgraphUrl);
                if (tokenAddress) {
                    output[key] = tokenAddress;
                } else {
                    console.warn(`No address found for token ${value}`);
                }
            } catch (e: unknown) {
                const error = e as Error;
                console.warn(`Skipping token conversion for ${value}: ${error.message}`);
            }
        }
        // Leave other values unchanged
    }

    return output;
}

// // Usage example
// const input = {
//     some_amount: "0.1",
//     source_token: "ETHx",
//     dest_token: "ALEPH",
//     wallet: "vitalik.eth",
//     network: "arbitrum",
// };

// // Example subgraph URL (replace with your actual subgraph URL)
// const subgraphUrl = "https://base-mainnet.subgraph.x.superfluid.dev";

// replaceValues(input, subgraphUrl)
//     .then((result) => console.log("Result:", result))
//     .catch((err) => console.error("Error:", err));
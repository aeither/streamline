import { cerebras } from "@ai-sdk/cerebras";
import { generateText } from "ai";

export async function extractSubgraphParams(query: string): Promise<string> {
  try {
    const { text } = await generateText({
      model: cerebras("llama-3.3-70b"), // Ensure this model is valid and supported
      system: `Extract GraphQL query parameters from the given query string.
Return a JSON object where keys are parameter names (without "$") and values are their types.
Only include parameters prefixed with "$" in the query.
Example input:
accounts(where: { id: "$ACCOUNT_ADDRESS" }) {
  isSuperApp
  inflows(where: { token: "$TOKEN_ADDRESS" }) {
    currentFlowRate
  }
}
Example output:
{
  "ACCOUNT_ADDRESS": "string",
  "TOKEN_ADDRESS": "string"
}

give me back only the JSON object without any other text
`,
      prompt: query,
    });

    // Validate that the response is a valid JSON string
    JSON.parse(text); // This will throw if invalid JSON
    return text;
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Error extracting subgraph parameters:", err.message);
    throw err;
  }
}

// async function main() {
//     const result = await extractSubgraphParams(`{
//     accounts(where: {
//       id: "$ACCOUNT_ADDRESS"
//     }) {
//       isSuperApp
//       inflows {
//         currentFlowRate
//         token {
//           symbol
//         }
//         sender {
//           id
//         }
//       }
//       outflows {
//         currentFlowRate
//         token {
//           symbol
//         }
//         receiver {
//           id
//         }
//       }
//       accountTokenSnapshots {
//         token {
//           id
//         }
//         totalNumberOfActiveStreams
//         totalNetFlowRate
//       }
//     }
//   }`);

//     console.log(result);
// }

// main();
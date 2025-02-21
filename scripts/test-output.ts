import { createAndRunGraphQL } from "../src/actions/createAndRunGraphQL";
import { parseUserMessage } from "../src/actions/parseUserMessage";

try {
    const input = 'What are the statistics for USDCx and cbBTCx? and what about jEURx';
    const subgraphUrl = 'https://base-mainnet.subgraph.x.superfluid.dev/';
    const result = await parseUserMessage(input, subgraphUrl);
    console.log('Parsed result:', result);

    const query = await createAndRunGraphQL(result, subgraphUrl);
    console.log("🚀 ~ query:", query)
} catch (error) {
    console.error('Error parsing user message:', error);
}

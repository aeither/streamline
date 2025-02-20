import { parseUserMessage } from "../src/actions/parseUserMessage";

try {
    const input = 'What are the statistics for USDCx and cbBTCx? and what about jEURx';
    const subgraphUrl = 'https://base-mainnet.subgraph.x.superfluid.dev/';
    const result = await parseUserMessage(input, subgraphUrl);
    console.log('Parsed result:', result);
} catch (error) {
    console.error('Error parsing user message:', error);
}

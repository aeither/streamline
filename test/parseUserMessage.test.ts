import { beforeAll, describe, expect, test } from "bun:test";
import dotenv from 'dotenv';
import { parseUserMessage } from '../src/actions/parseUserMessage';


beforeAll(() => {
    dotenv.config();
});

describe('parseUserMessage', () => {
    test('should replace token symbol with address', async () => {
        const input = 'What are the statistics for USDCx?';
        const result = await parseUserMessage(input, 'https://base-mainnet.subgraph.x.superfluid.dev/');
        expect(result).toBe('What are the statistics for 0x1234567890abcdef1234567890abcdef12345678?');
    });

});

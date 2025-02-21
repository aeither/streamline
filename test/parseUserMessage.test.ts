import { beforeAll, describe, expect, mock, test } from "bun:test";
import dotenv from 'dotenv';
import { parseUserMessage } from '../src/actions/parseUserMessage';
import { runGraphQL } from '../src/utils/runGraphQL';

mock.module('../src/utils/runGraphQL', () => ({
    runGraphQL: mock(async () => '{"data":{"tokens":[{"id":"0x123","symbol":"USDCx","isListed":true}]}}')
}));

beforeAll(() => {
    dotenv.config();
});

describe('parseUserMessage', () => {
    test('should parse message and replace token symbols', async () => {
        const result = await parseUserMessage('Show me USDCx streams', 'https://example.com/subgraph');
        expect(result).toContain('0x123');
        expect(runGraphQL).toHaveBeenCalled();
    });
});

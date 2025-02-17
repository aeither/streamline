// File: test/runGeneratedQuery.test.ts

import { beforeAll, describe, expect, mock, test } from "bun:test";
import dotenv from 'dotenv';
import { determineChain } from '../src/actions/determineChain';
import { generateQuery } from '../src/actions/generateQuery';
import { runGeneratedQuery } from '../src/actions/runGeneratedQuery';

beforeAll(() => {
    dotenv.config();
});

describe('runGeneratedQuery', () => {
    test('should execute a generated query on the determined chain', async () => {
        const userInput = 'Show me pools on Polygon with high flow rates';
        
        // First determine the chain
        const subgraphUrl = await determineChain(userInput);
        expect(subgraphUrl).toBe('https://polygon-mainnet.subgraph.x.superfluid.dev/');
        
        // Then generate the query
        const query = await generateQuery(userInput);
//         const query = `{
//   pools(
//     first: 5
//     orderBy: flowRate
//     orderDirection: desc
//   ) {
//     id
//     flowRate
//     token {
//       symbol
//       name
//     }
//     totalMembers
//     totalConnectedMembers
//     totalUnits
//   }
// }`;
       
        expect(query).toBeDefined();
        expect(typeof query).toBe('string');
        
        // Finally run the query
        const result = await runGeneratedQuery(query, subgraphUrl);
        console.log("🚀 ~ test ~ result:", result)
        expect(result).toBeDefined();
        expect(typeof result).toBe('string');
        // The result should be valid JSON
        expect(() => JSON.parse(result)).not.toThrow();
    });

    // test('should handle query execution errors gracefully', async () => {
    //     const invalidQuery = 'invalid { graphql query }';
    //     const subgraphUrl = 'https://base-mainnet.subgraph.x.superfluid.dev/';
        
    //     await expect(async () => {
    //         await runGeneratedQuery(invalidQuery, subgraphUrl);
    //     }).rejects.toThrow('Failed to execute query');
    // });

    // test('should handle invalid subgraph URL', async () => {
    //     const query = '{ pools { id } }';
    //     const invalidUrl = 'https://invalid-url.example.com';
        
    //     await expect(async () => {
    //         await runGeneratedQuery(query, invalidUrl);
    //     }).rejects.toThrow('Failed to execute query');
    // });

    // test('should execute a complete flow with real data', async () => {
    //     const userInput = 'What are the top 5 pools on Base?';
        
    //     // Get the chain
    //     const subgraphUrl = await determineChain(userInput);
    //     expect(subgraphUrl).toBe('https://base-mainnet.subgraph.x.superfluid.dev/');
        
    //     // Generate query
    //     const query = await generateQuery(userInput);
    //     expect(query).toBeDefined();
        
    //     // Execute query
    //     const result = await runGeneratedQuery(query, subgraphUrl);
    //     expect(result).toBeDefined();
        
    //     // Validate result structure
    //     const parsedResult = JSON.parse(result);
    //     expect(parsedResult).toBeDefined();
    // });

    // test('should handle empty query string', async () => {
    //     const emptyQuery = '';
    //     const subgraphUrl = 'https://base-mainnet.subgraph.x.superfluid.dev/';
        
    //     await expect(async () => {
    //         await runGeneratedQuery(emptyQuery, subgraphUrl);
    //     }).rejects.toThrow('Failed to execute query');
    // });

    // test('should handle empty subgraph URL', async () => {
    //     const query = '{ pools { id } }';
    //     const emptyUrl = '';
        
    //     await expect(async () => {
    //         await runGeneratedQuery(query, emptyUrl);
    //     }).rejects.toThrow('Failed to execute query');
    // });
});

// import "dotenv/config";
import { gql, request, type Variables } from 'graphql-request';

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const runGraphQL = async (subgraphUrl: string, query: string, variables?: Record<string, string>) => {
  if (!query.trim()) {
    throw new Error('Query cannot be empty');
  }
  if (!subgraphUrl.trim()) {
    throw new Error('Subgraph URL cannot be empty');
  }

  try {
    const parsedQuery = gql`${query}`;

    const data = await request(subgraphUrl, parsedQuery, variables);

    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error executing GraphQL query:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to execute query: ${error.message}`);
    }
    throw new Error('Failed to execute query');
  }
};


// Test the function
// const subgraphUrl = 'https://subgraph-endpoints.superfluid.dev/base-mainnet/protocol-v1';
// const query = gql`
//   query GetUserPools($userAddress: String!) {
//     pools(
//       first: 20
//       where: {poolMembers_: {account: "0x754FC79A1F0EF67fCF5640b51a8f3b29d1eFc4B7"}}
//     ) {
//       id
//       totalUnits
//       totalMembers
//       flowRate
//       createdAtBlockNumber
//       token {
//         id
//         symbol
//       }
//     }
//   }
// `;



// const variables: Variables = {

//   userAddress: "0x754FC79A1F0EF67fCF5640b51a8f3b29d1eFc4B7"
// };

// (async () => {
//   try {
//     const result = await request(subgraphUrl, query, {

//       userAddress: "0x754FC79A1F0EF67fCF5640b51a8f3b29d1eFc4B7"
//     });
//     console.log('GraphQL Query Result:', JSON.stringify(result, null, 2));
//   } catch (error) {
//     console.error('Error running GraphQL query:', error);
//   }
// })();
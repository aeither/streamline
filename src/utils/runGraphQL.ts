// import "dotenv/config";
import { gql, request } from 'graphql-request';
// import { createClient, fetchExchange, gql } from 'urql';

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const getOperationType = (query: string): string => {
  const trimmedQuery = query.trim();
  if (trimmedQuery.startsWith('query')) return 'Query';
  if (trimmedQuery.startsWith('mutation')) return 'Mutation';
  if (trimmedQuery.startsWith('subscription')) return 'Subscription';
  // Default to Query if no operation type is specified
  return 'Query';
};

const nameAnonymousQuery = (query: string, variables?: Record<string, string>): string => {
  const trimmedQuery = query.trim();
  // If query already has a name, return as is
  if (trimmedQuery.match(/^(query|mutation|subscription)\s+\w+/)) {
    return query;
  }

  const operationType = getOperationType(query);
  const variableNames = variables ? Object.keys(variables).sort() : [];
  const queryName = variableNames.length > 0 
    ? `${operationType}With${variableNames.map(v => v.charAt(0).toUpperCase() + v.slice(1)).join('And')}`
    : `Anonymous${operationType}`;

  // Insert the name after the operation type
  const namedQuery = trimmedQuery.replace(
    /^(query|mutation|subscription)?\s*{/,
    `${operationType.toLowerCase()} ${queryName} ${variables ? `(${Object.entries(variables).map(([key, value]) => `$${key}: String!`).join(', ')})` : ''} {`
  );

  return namedQuery;
};

export const runGraphQL = async (subgraphUrl: string, query: string, variables?: Record<string, string>) => {
  if (!query.trim()) {
    throw new Error('Query cannot be empty');
  }
  if (!subgraphUrl.trim()) {
    throw new Error('Subgraph URL cannot be empty');
  }

  try {
    const namedQuery = nameAnonymousQuery(query, variables);
    const parsedQuery = gql`${namedQuery}`;

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

// const query = `{
//     pools(
//       first: 20
//       where: {poolMembers_: {account: $userAddress}}
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
//   }`;


// const variables = {
//   userAddress: "0x754fc79a1f0ef67fcf5640b51a8f3b29d1efc4b7"
// };

// (async () => {
//   try {
//     const result = await runGraphQL(subgraphUrl, query, variables);
//     console.log('GraphQL Query Result:', result);
//   } catch (error) {
//     console.error('Error running GraphQL query:', error);
//   }
// })();

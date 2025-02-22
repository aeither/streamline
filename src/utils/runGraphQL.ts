// import "dotenv/config";
import { gql, request } from 'graphql-request';

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
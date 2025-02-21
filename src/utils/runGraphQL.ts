import { gql, request } from 'graphql-request';

export const runGraphQL = async (query: string, subgraphUrl: string) => {
  if (!query.trim()) {
    throw new Error('Query cannot be empty');
  }
  if (!subgraphUrl.trim()) {
    throw new Error('Subgraph URL cannot be empty');
  }

  try {
    // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
    let parsedQuery;
    try {
      parsedQuery = gql`${query}`;
    } catch (parseError) {
      console.error('Error parsing GraphQL query:', parseError);
      throw new Error('Invalid GraphQL query syntax');
    }

    // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
    let data;
    try {
      data = await request(subgraphUrl, parsedQuery);
    } catch (requestError) {
      console.error('Error executing GraphQL query:', requestError);
      throw new Error('Failed to execute query');
    }

    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error executing GraphQL query:', error);
    throw new Error('Failed to execute query');
  }
};
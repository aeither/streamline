import { gql, request } from 'graphql-request';

export const runGeneratedQuery = async (query: string) => {
    const endpoint = 'https://base-mainnet.subgraph.x.superfluid.dev';
  
  try {
      const data = await request(endpoint, gql`${query}`);
    return data;
  } catch (error) {
    console.error('Error executing subgraph query:', error);
    throw new Error('Failed to execute subgraph query');
  }
};

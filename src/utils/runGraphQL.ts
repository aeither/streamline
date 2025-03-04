import { gql, request } from 'graphql-request';

const getOperationType = (query: string): string => {
  const trimmedQuery = query.trim();
  if (trimmedQuery.startsWith('query')) return 'Query';
  if (trimmedQuery.startsWith('mutation')) return 'Mutation';
  if (trimmedQuery.startsWith('subscription')) return 'Subscription';
  return 'Query';
};

const prepareGraphQLQuery = (query: string, variables?: Record<string, string>): string => {
  // Replace string interpolation variables with GraphQL variables
  let preparedQuery = query;
  if (variables) {
    // biome-ignore lint/complexity/noForEach: <explanation>
    Object.keys(variables).forEach(key => {
      const interpolationVar = `"$${key}"`;
      const graphqlVar = `$${key}`;
      preparedQuery = preparedQuery.replace(interpolationVar, graphqlVar);
    });
  }
  return preparedQuery;
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

  // Insert the name and variable definitions
  const namedQuery = trimmedQuery.replace(
    /^(query|mutation|subscription)?\s*{/,
    `${operationType.toLowerCase()} ${queryName} ${variables ? `(${Object.entries(variables).map(([key]) => `$${key}: String!`).join(', ')})` : ''} {`
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
    // Prepare the query by replacing string interpolation with GraphQL variables
    const preparedQuery = prepareGraphQLQuery(query, variables);
    
    // Add name and variable definitions to the query
    const namedQuery = nameAnonymousQuery(preparedQuery, variables);
    
    console.log('Executing GraphQL query:', {
      url: subgraphUrl,
      query: namedQuery,
      variables
    });

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

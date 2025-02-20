import { cerebras } from '@ai-sdk/cerebras';
import { generateObject } from 'ai';
import { z } from 'zod';

type QueryTemplates = {
  tokens: string;
  streams: string;
  accountStreams: string;
  recentFlows: string;
  tokenStatistics: string;
  accountData: string;
  pools: string;
  userPools: string;
  tokenPools: string;
  adminPools: string;
}

const queryTemplates: QueryTemplates = {
  tokens: `{
  tokens(first: 20) {
    id
    symbol
    name
    underlyingAddress
  }
}`,
  streams: `{
  streams(where: {receiver: "$ADDRESS"}) {
    currentFlowRate
    token {
      symbol
    }
    sender {
      id
    }
    receiver {
      id
    }
  }
}`,
  accountStreams: `{
  streams(where:{
    sender: "$SENDER_ADDRESS"
    receiver: "$RECEIVER_ADDRESS"
  }) {
    token {
      id
      symbol
    }
    createdAtTimestamp
    updatedAtTimestamp
    currentFlowRate
    streamedUntilUpdatedAt
  }
}`,
  recentFlows: `{
  flowUpdatedEvents(first: 10, orderBy: timestamp, orderDirection: desc) {
    oldFlowRate
    flowRate
    userData
    stream {
      token {
        symbol
      }
      sender {
        id
      }
      receiver {
        id
      }
    }
  }
}`,
  tokenStatistics: `{
  tokenStatistics(where: {
    id: "$TOKEN_ADDRESS"
  }) {
    totalNumberOfActiveStreams
    totalNumberOfActiveIndexes
    totalAmountStreamedUntilUpdatedAt
    totalOutflowRate
    totalAmountDistributedUntilUpdatedAt
  }
}`,
  accountData: `{
  accounts(where: {
    id: "$ACCOUNT_ADDRESS"
  }) {
    isSuperApp
    inflows {
      currentFlowRate
      token {
        symbol
      }
      sender {
        id
      }
    }
    outflows {
      currentFlowRate
      token {
        symbol
      }
      receiver {
        id
      }
    }
    accountTokenSnapshots {
      token {
        id
      }
      totalNumberOfActiveStreams
      totalNetFlowRate
    }
  }
}`,
  pools: `{
  pools(first: 30) {
    totalUnits
    totalMembers
    flowRate
    createdAtBlockNumber
    token {
      id
      symbol
    }
    admin {
      id
    }
  }
}`,
  userPools: `{
  pools(
    first: 20
    where: {poolMembers_: {account: "$USER_ADDRESS"}}
  ) {
    totalUnits
    totalMembers
    flowRate
    createdAtBlockNumber
    token {
      id
      symbol
    }
  }
}`,
  tokenPools: `{
  pools(where: {token: "$TOKEN_ADDRESS"}) {
    createdAtBlockNumber
    createdAtTimestamp
    flowRate
    id
    totalMembers
    totalUnits
    admin {
      isSuperApp
    }
    token {
      id
      symbol
    }
  }
}`,
  adminPools: `{
  pools(first: 20, where: {admin: "$ADMIN_ADDRESS"}) {
    totalUnits
    totalMembers
    flowRate
    createdAtBlockNumber
    token {
      id
      isSuperToken
      symbol
    }
  }
}`
};

type QueryType = keyof typeof queryTemplates;

interface QueryTemplate {
  type: QueryType;
  variables: Record<string, string>;
  reasoning: string;
}

export const determineQueryTemplate = async (input: string): Promise<QueryTemplate> => {
  try {
    const { object } = await generateObject({
      model: cerebras('llama-3.3-70b'),
      schema: z.object({
        type: z.enum(['tokens', 'streams', 'accountStreams', 'recentFlows', 'tokenStatistics', 'accountData', 'pools', 'userPools', 'tokenPools', 'adminPools']),
        variables: z.record(z.string()),
        reasoning: z.string(),
      }),
      system: `You are a GraphQL query analyzer for Superfluid money streaming and distribution pools. Your task is to:
1. Determine which query template best matches the user's intent
2. Extract any variables needed (like addresses)
3. Provide reasoning for the choice

Available query templates:
1. 'tokens': Lists token information (symbol, name, etc.)
2. 'streams': Shows streaming information for a specific address
3. 'accountStreams': Shows streams between two specific addresses
4. 'recentFlows': Lists the most recently updated flows
5. 'tokenStatistics': Provides aggregate data for a specific token
6. 'accountData': Gives detailed information about a specific account
7. 'pools': Lists general information about distribution pools
8. 'userPools': Shows pools that a specific user is a member of
9. 'tokenPools': Lists pools for a specific token
10. 'adminPools': Shows pools managed by a specific admin

Choose the most appropriate template based on the user's query. Extract any relevant addresses or identifiers as variables.

Return:
- type: The template to use (one of the available query types)
- variables: Any variables needed (e.g., {"ADDRESS": "0x123...", "TOKEN_ADDRESS": "0xabc..."})
- reasoning: Brief explanation of why this template was chosen`,
      prompt: input,
    });

    return {
      type: object.type,
      variables: object.variables,
      reasoning: object.reasoning,
    };
  } catch (e) {
    console.error('Error determining query template:', e);
    // Default to tokens query if something goes wrong
    return {
      type: 'tokens',
      variables: {},
      reasoning: 'Failed to determine query type, defaulting to tokens query',
    };
  }
};

export const applyTemplate = (template: QueryTemplate): string => {
  let query = queryTemplates[template.type];

  // Replace variables in the template
  for (const [key, value] of Object.entries(template.variables)) {
    query = query.replace(`"$${key}"`, `"${value}"`);
  }

  return query;
};

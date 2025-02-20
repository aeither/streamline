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
- tokens: List all tokens
- streams: Get streams for a specific address
- accountStreams: Get streams between two accounts
- recentFlows: Get recent flow updates
- tokenStatistics: Get statistics for a specific token (use when asking about token stats/metrics)
- accountData: Get detailed account information
- pools: List all pools
- userPools: Get pools for a specific user
- tokenPools: Get pools for a specific token
- adminPools: Get pools managed by a specific admin

Examples:
1. "Show me ETHx streams"
   → type: streams
   → variables: { ADDRESS: "..." }

2. "What are the statistics for USDCx?"
   → type: tokenStatistics
   → variables: { TOKEN_ADDRESS: "..." }

3. "What are DAIx token stats on Polygon?"
   → type: tokenStatistics
   → variables: { TOKEN_ADDRESS: "..." }

4. "List all pools"
   → type: pools
   → variables: {}

Return:
- type: The best matching query template
- variables: Required variables for the template
- reasoning: Why this template was chosen`,
      prompt: input,
    });

    return {
      type: object.type,
      variables: object.variables,
      reasoning: object.reasoning,
    };
  } catch (error) {
    console.error('Error determining query template:', error);
    throw error;
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

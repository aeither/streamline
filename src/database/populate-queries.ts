import { Embeddings } from "../utils/embeddings";

type Query = {
  description: string;
  query: string;
};

const QUERIES: Query[] = [
  {
    description: "Fetch details of a specific pool",
    query: `{
  pool(id: "$TOKEN_ADDRESS") {
    id
    totalUnits
    totalMembers
    perUnitFlowRate
    updatedAtTimestamp
    flowRate
    admin {
      id
    }
    token {
      id
      symbol
    }
    poolMembers {
      id
      units
      account {
        id
      }
      isConnected
    }
  }
}`
  },
  {
    description: "Get first 20 tokens",
    query: `{
  tokens(first: 20) {
    id
    symbol
    name
    underlyingAddress
  }
}`
  },
  {
    description: "Fetch streams for a specific receiver",
    query: `{
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
}`
  },
  {
    description: "Get stream details between specific sender and receiver",
    query: `{
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
}`
  },
  {
    description: "Fetch recent flow updated events",
    query: `{
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
}`
  },
  {
    description: "Get token statistics for a specific token",
    query: `{
  tokenStatistics(where: {
    id: "$TOKEN_ADDRESS"
  }) {
    totalNumberOfActiveStreams
    totalNumberOfActiveIndexes
    totalAmountStreamedUntilUpdatedAt
    totalOutflowRate
    totalAmountDistributedUntilUpdatedAt
  }
}`
  },
  {
    description: "Fetch account details including inflows and outflows",
    query: `{
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
}`
  },
  {
    description: "Get first 30 pools",
    query: `{
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
}`
  },
  {
    description: "Fetch pools for a specific user",
    query: `{
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
}`
  },
  {
    description: "Get pools for a specific token",
    query: `{
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
}`
  },
  {
    description: "Fetch pools for a specific admin",
    query: `{
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
  },
  {
    description: "Get total number of active streams for a token",
    query: `{
  tokenStatistic(id: "$TOKEN_ADDRESS") {
    totalNumberOfActiveStreams
  }
}`
  },
  {
    description: "Fetch all super tokens",
    query: `{
  tokens(where: {isSuperToken: true}) {
    id
    symbol
    name
  }
}`
  }
];

async function main() {
  const embeddings = new Embeddings();

  for (let i = 0; i < QUERIES.length; i++) {
    const query = QUERIES[i];
    console.log('processing query=', i + 1);
    await embeddings.insertQuery({
      query: query.query,
      description: query.description
    });
  }

  console.log('All queries processed and inserted into the vector database.');
}

await main();

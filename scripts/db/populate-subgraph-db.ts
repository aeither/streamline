import { Embeddings } from "../../src/utils/embeddings";

const QUERIES = [
    `{
  tokens(first: 20) {
    id
    symbol
    name
    underlyingAddress
  }
}`,
    `{
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
    `{
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
    `{
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
    `{
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
    `{
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
    `{
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
    `{
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
    `{
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
    `{
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
]

async function main() {
    const embeddings = new Embeddings();

    for (let i = 0; i < QUERIES.length; i++) {
        const query = QUERIES[i];
        console.log('processing query=', i + 1);
        await embeddings.insertQuery(query);
    }

    console.log('All queries processed and inserted into the vector database.');
}

await main();

# Streamline Discord Bot Architecture

## Flow Diagram
```mermaid
sequenceDiagram
    participant User
    participant Discord Bot
    participant Planner Agent
    participant Chain Resolver
    participant Input Parser
    participant Query Engine
    participant Response Generator

    User->>Discord Bot: Send Message
    Note over Discord Bot: Clean message content

    Discord Bot->>Planner Agent: plan()
    alt No Blockchain Data Needed
        Planner Agent-->>Discord Bot: Immediate Response
        Discord Bot-->>User: Reply with information
    else Needs Blockchain Data
        Planner Agent->>Chain Resolver: determineChain()
        Chain Resolver-->>Discord Bot: Subgraph URL

        Discord Bot->>Input Parser: parseUserInput()
        Note over Input Parser: Extract & validate entities
        Input Parser-->>Discord Bot: Cleaned input & entities

        Discord Bot->>Query Engine: createAndRunGraphQL()
        Note over Query Engine: Generate & execute query
        Query Engine-->>Discord Bot: Query results

        Discord Bot->>Response Generator: synthetizeResponse()
        Response Generator-->>Discord Bot: Natural language response
        Discord Bot-->>User: Reply with results
    end
```

## Component Diagram
```mermaid
graph TB
    User((User)) --> Discord[Discord Bot]
    
    subgraph Agents
        Planner[Planner Agent]
        Parser[Input Parser Agent]
        Chain[Chain Resolver]
        Query[Query Engine]
        Response[Response Generator]
    end

    Discord --> Planner
    Planner --> |Plan Query|Chain
    Chain --> |Subgraph URL|Parser
    Parser --> |Validated Input|Query
    Query --> |Results|Response
    Response --> Discord
    
    subgraph Query Templates
        Templates[Query Templates]
        Query --> Templates
    end

    subgraph Validators
        TokenValidator[Token Validator]
        ENSValidator[ENS Validator]
        AddressValidator[Address Validator]
        Parser --> TokenValidator
        Parser --> ENSValidator
        Parser --> AddressValidator
    end
```

## Agent Responsibilities

### 1. Planner Agent (`plannerAgent.ts`)
- Determines if blockchain data is needed
- Suggests required tools and actions
- Handles help and concept explanations

### 2. Chain Resolver (`determineChain.ts`)
- Identifies appropriate blockchain network
- Provides correct subgraph URL
- Handles chain-specific logic

### 3. Input Parser (`inputParserAgent.ts`)
- Extracts entities (tokens, ENS, addresses)
- Validates and normalizes entities
- Cleans user input

### 4. Query Engine (`createAndRunGraphQL.ts`)
- Selects appropriate query template
- Applies variables to template
- Executes query against subgraph

### 5. Response Generator (`synthetizeResponse.ts`)
- Formats query results
- Generates natural language responses
- Handles error cases

## Query Templates
```mermaid
graph LR
    Templates[Query Templates] --> Tokens[Tokens Query]
    Templates --> Streams[Streams Query]
    Templates --> AccountStreams[Account Streams]
    Templates --> RecentFlows[Recent Flows]
    Templates --> TokenStats[Token Statistics]
    Templates --> AccountData[Account Data]
    Templates --> Pools[Pools Query]
    Templates --> UserPools[User Pools]
    Templates --> TokenPools[Token Pools]
    Templates --> AdminPools[Admin Pools]
```

## Error Handling Flow
```mermaid
flowchart TD
    A[User Input] --> B{Planner Agent}
    B -->|Invalid Input| C[Show Help]
    B -->|Valid Input| D{Input Parser}
    D -->|Entity Error| E[Default to Raw Input]
    D -->|Success| F{Query Engine}
    F -->|Query Error| G[Error Message]
    F -->|Success| H[Generate Response]
    H --> I[Send to User]
    C --> I
    G --> I
```

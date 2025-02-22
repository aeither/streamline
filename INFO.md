
Workflow

1. User asks with natural language.

- using ai to figure out if we can just answer back, use knowledge base or use dynamic query
- if dynamic query: use ai to generate subgraph query
  - fetch vector db for schema
- evaluate if requires more input from user or i can proceed
  - reuse vector db schema
- execute the query
- add personality and tips to output

requirements:
- knowledge base
- vector db
- subgraph query tool

## Build Embedding DB Schema

aeither/ask-docs-embeddings

## Comparing Models

deepseek R1 distill llama 70B by cerebras is not intellegent enough
deepseek R1 distill llama 70B by groq. input tokens limited to 6000.

deepseek/deepseek-r1:free 
think too long, not good UX

google/gemini-2.0-flash-lite-preview-02-05:free
not intellegent enough

anthropic/claude-3.5-sonnet
smart but too expensive

google/gemini-2.0-flash-001
balanced for dynamic query

openai/gpt-4o-mini
a little more expensive and slower than gemini 2.0 flash

input cost 2-3

gpt-4o vs claude 3.5 sonnet vs mistral large 2 vs cohere command R+

o3-mini reasoning

output cost 0.4

llama 3.3 70b (0.2-0.4) vs google flash 2.0 (0.1-0.4) vs gpt4o-mini (0.15-0.6) vs deepseek v3 (0.14-0.28)

## Testing

don't confuse `bun test` for bun test runner with `bun run test` when I want to use the script for `vitest`

## drizzle-kit db

npx drizzle-kit generate

npx drizzle-kit push

npx drizzle-kit studio

## Troubleshooting

bun default timeout for tests is 5000 (5 seconds).
Adsut with `bun test --timeout 15000`

## Create, Select, and Reset HNSW index

```sql
CREATE INDEX IF NOT EXISTS queries_embedding_hnsw_idx ON queries USING hnsw (embedding vector_cosine_ops);

SELECT
  indexname,
  indexdef
FROM
  pg_indexes
WHERE
  tablename = 'queries';

DROP INDEX IF EXISTS queries_embedding_hnsw_idx;
```
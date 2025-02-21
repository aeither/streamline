CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS "documents" (
  "id" serial PRIMARY KEY NOT NULL,
  "source" text NOT NULL,
  "page" integer NOT NULL,
  "content" text NOT NULL,
  "embedding" vector(1536)
);

CREATE INDEX IF NOT EXISTS "embeddingIndex" ON "documents" USING hnsw (embedding vector_cosine_ops);


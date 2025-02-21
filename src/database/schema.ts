import { integer, pgTable, serial, text, vector } from 'drizzle-orm/pg-core'

export const Documents = pgTable(
  'documents',
  {
    id: serial('id').primaryKey(),
    source: text('source').notNull(),
    page: integer('page').notNull(),
    content: text('content').notNull(),
    embedding: vector('embedding', { dimensions: 1536 }),
  }
)

export const Queries = pgTable(
  'queries',
  {
    id: serial('id').primaryKey(),
    query: text('query').notNull(),
    description: text('description').notNull(),
    timestamp: integer('timestamp').notNull(),
    embedding: vector('embedding', { dimensions: 1536 }),
  }
)

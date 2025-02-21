import { cosineDistance, desc, gt, sql } from 'drizzle-orm'

import { db } from '../database/db'
import { Documents, Queries } from "../database/schema"
import { generateEmbedding } from "./openai"

interface Query {
    query: string
    description: string
}

export interface VectorQueryResult {
    id: number
    query: string
    description: string
    timestamp: number
    similarity: number
}

export interface VectorDocumentResult {
    id: number
    source: string
    page: number
    content: string
    similarity: number
}

export class Embeddings {
    // Insert a query with embedding
    async insertQuery({ query, description }: Query): Promise<number> {
        // Generate embeddings for both query and description and combine them
        const [queryEmbedding, descriptionEmbedding] = await Promise.all([
            generateEmbedding(query),
            generateEmbedding(description)
        ])
        
        // Average the embeddings for a combined representation
        const embedding = queryEmbedding.map((val, idx) => (val + descriptionEmbedding[idx]) / 2)
        const timestamp = Math.floor(Date.now() / 1000)

        const [result] = await db.insert(Queries)
            .values({
                query,
                description,
                timestamp,
                embedding,
            })
            .returning({ id: Queries.id })

        return result.id
    }

    // Insert a document with embedding
    async insertDoc(source: string, page: number, content: string): Promise<number> {
        const embedding = await generateEmbedding(content)

        const [result] = await db.insert(Documents)
            .values({
                source,
                page,
                content,
                embedding,
            })
            .returning({ id: Documents.id })

        return result.id
    }

    async queryQuery(
        queryString: string,
        limit = 1
    ): Promise<VectorQueryResult[]> {
        const embedding = await generateEmbedding(queryString)
        const similarity = sql<number>`1 - (${cosineDistance(Queries.embedding, embedding)})`
        const results = await db.select({
            id: Queries.id,
            query: Queries.query,
            description: Queries.description,
            timestamp: Queries.timestamp,
            similarity,
        })
            .from(Queries)
            .where(gt(similarity, 0.5))
            .orderBy((t) => desc(t.similarity))
            .limit(limit)

        return results
    }

    // Query the vector db
    async queryDoc(
        queryString: string,
        limit = 10
    ): Promise<VectorDocumentResult[]> {
        const embedding = await generateEmbedding(queryString)
        const similarity = sql<number>`1 - (${cosineDistance(Documents.embedding, embedding)})`
        const results = await db.select({
            id: Documents.id,
            source: Documents.source,
            page: Documents.page,
            content: Documents.content,
            similarity,
        })
            .from(Documents)
            .where(gt(similarity, 0.5))
            .orderBy((t) => desc(t.similarity))
            .limit(limit)

        return results
    }
}
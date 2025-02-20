import { cosineDistance, desc, gt, sql } from 'drizzle-orm'

import { db } from '../database/db'
import { Documents } from "../database/schema"
import { generateEmbedding } from "./openai"

export interface VectorDocumentResult {
    id: number
    source: string
    page: number
    content: string
    similarity: number
}

export class Embeddings {
    // Insert a document with embedding
    async insert(source: string, page: number, content: string): Promise<number> {
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

    // Query the vector db
    async query(
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
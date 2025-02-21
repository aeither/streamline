import dotenv from 'dotenv'
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

dotenv.config()

// Database Connection
const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is not currently set')
}

export const db = drizzle(postgres(DATABASE_URL, { prepare: false }))
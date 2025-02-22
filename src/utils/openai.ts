import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const generateEmbedding = async (value: string): Promise<number[]> => {
  const input = value.replaceAll('\n', ' ')

  const { data } = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input,
  })

  return data[0].embedding
}

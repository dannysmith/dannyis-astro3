import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    isDraft: z.boolean().default(false),
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    redirectURL: z.string().url().optional(),
    platform: z.enum(['medium', 'external']).optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
})

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    sourceURL: z.string().url().optional(),
  }),
})

export const collections = { blog, notes }

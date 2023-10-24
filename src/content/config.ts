import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      draft: z.boolean().default(false),
      pubDate: z.coerce.date(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      description: z.string().optional(),
      platform: z.enum(['medium', 'external']).optional(),
      redirectURL: z.string().url().optional(),
      updatedDate: z.coerce.date().optional(),
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

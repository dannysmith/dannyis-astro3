import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
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

export const collections = { blog }

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), prefetch()],
  redirects: {
    '/meeting':
      'https://dannysmith.notion.site/Book-a-Meeting-with-Danny-e39fc8def5514b67b559b2e5a51934ae?pvs=4',
    '/tools': 'https://betterat.work/toolbox',
  },
})

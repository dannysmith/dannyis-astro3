import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import prefetch from '@astrojs/prefetch'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// https://astro.build/config
export default defineConfig({
  site: 'https://danny.is',
  integrations: [mdx(), sitemap(), prefetch()],
  markdown: {
    rehypePlugins: [rehypeHeadingIds, rehypeAutolinkHeadings],
  },
  // Redirects to external sites are not officially supported. Avoid using a trailing slash.
  // See here:
  // - https://github.com/withastro/astro/pull/9287
  // - https://github.com/withastro/astro/issues/9259#issuecomment-1857973018
  redirects: {
    '/meeting':
      'https://dannysmith.notion.site/Book-a-Meeting-with-Danny-e39fc8def5514b67b559b2e5a51934ae',
    '/tools': 'https://betterat.work/toolbox',
    '/linkedin': 'https://www.linkedin.com/in/dannyasmith',
    '/cv': '/cv-danny-smith.pdf',
    '/working': 'https://betterat.work',
    '/remote':
      'https://dannysmith.notion.site/Remote-Working-Tips-821f025d73cb4d93a661abc93822fb14',
    '/rtotd':
      'https://dannysmith.notion.site/Remote-Working-Tips-821f025d73cb4d93a661abc93822fb14',
    '/using':
      'https://www.notion.so/dannysmith/Danny-Uses-72544bdecd144ca5ab3864d92dcd119b',
    '/music': 'https://youtube.com/dannysmithblues',
    '/singing': 'https://youtube.com/dannysmithblues',
    '/youtube': 'https://www.youtube.com/channel/UCp0vO-4tetByUhsVijyt2jA',
  },
})

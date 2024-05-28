import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })

  const notes = await getCollection('notes')

  let all = posts.concat(notes)
  all.sort((b, a) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf())

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: all.map((post) => ({
      ...post.data,
      link: `/writing/${post.slug}/`,
    })),
  })
}

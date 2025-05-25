## Task: Generate OG Images Dynamically

A custom OG image should be generated for all notes, articles and pages using the title etc so that when someone shared a URL to one of my pages it has an OG image.

Useful URLs re implementation:

- https://www.kozhuhds.com/blog/generating-static-open-graph-og-images-in-astro-using-vercel-og
- https://arne.me/blog/static-og-images-in-astro
- https://github.com/florian-lefebvre/satori-astro/blob/main/package/README.md
- https://github.com/JulianCataldo/og-images-generator#astro-integration

See https://medium.com/slack-developer-blog/everything-you-ever-wanted-to-know-about-unfurling-but-were-afraid-to-ask-or-how-to-make-your-e64b4bb9254

Also, see Wes' Netlify function here https://github.com/wesbos/wesbos/blob/master/functions/ogimage/ogimage.js

### Checklist

- [ ] Article (dynamic)
- [ ] Note (dynamic)
- [ ] Other pages like home and about (could just be static images if needed)
- [ ] Static fallback image for all other pages
- [ ] Add proper OG data to all pages (which obviously uses the images)

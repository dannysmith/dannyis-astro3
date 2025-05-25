Note: This contains two related tasks.

## Task: A Better URLCard Component

Purpose: To enhance the visual richness and readability of content by automatically rendering clean, attractive previews or embeds when a supported URL is included — similar to how Notion or Twitter handles link previews.

The component takes a single prop: the `url`.

Rebuild URLCard component entirely so it looks beautiful both in Notes and in Articles.

- Consider using something like https://github.com/delucis/astro-embed instead of hand-rolling my own with unfurl?
- Rename to BookmarkCard.
- Pulls metadata from the page (title, description, image, domain).
- Renders with a consistent design: image thumbnail, title, domain, and optional description.
- Should account for incomplete data (like no image) returned.
- Entire card links to the external page.
- Must be fully responsive and look good on all screen/container sizes.

## Task: A universal FancyEmbed component

Purpose: To enhance the visual richness and readability of content by automatically rendering clean, attractive previews or embeds when a supported URL is included — similar to how Notion or Twitter handles link embeds.

### Behaviour

The component takes a single prop: the `url`.

- When a supported **embed URL** is included (e.g., Loom, GitHub Gist, YouTube, etc.):
  - Render a **native embed** using an Astro component.
  - It should render responsively and cleanly, styled to match the overall site.
- When the URL is **not embeddable**, fall back to the BookmarkCard.

Consider using something like https://github.com/delucis/astro-embed instead of hand-rolling my own with unfurl? What's the best way of achieving and future-proofing this?

- Can use a special component like `<LovelyEmbed url="..." />` in MDX content.
- Design should feel elegant and in keeping with the site's visual style.
- Should handle edge cases gracefully (e.g., broken metadata, missing images).

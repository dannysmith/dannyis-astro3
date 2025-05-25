## Task: Refactor Notion.astro component

Purpose: When linking to public Notion pages in content, links should automatically transform into rich, branded previews — mirroring the way Notion itself renders internal page mentions. This provides visual context and a polished, consistent look when referencing my Notion content.

- When a **Notion URL** is included anywhere in content (Articles or Notes):
  - The frontend detects that it's a Notion link.
  - It **fetches metadata at runtime on the client**, specifically:
    - The **page title**
    - The **page icon** (emoji or image)
  - The link is transformed into a **"Notion-style mention"** component:
    - Displays the icon
    - Displays the current title of the page
    - Hyperlinked to the original Notion page

### Why Client-Side?

- Titles and icons may **change over time**.
- By resolving metadata **on the client at runtime**, updates to the Notion page (e.g., new title or emoji) are **reflected immediately** without needing to rebuild the site.
- Keeps the static build process lean and clean.

### Fallback Behaviour

- If the Notion page is not public or can't be fetched:
  - Fallback to a **regular link** with no special styling or preview.

### What we need to do...

It probably needs cleaning up a little, and perhaps there's a better way of doing this?

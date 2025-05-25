### MDX Components

1. **Usage**

   - Use for content that needs enhanced markdown
   - Keep custom components minimal
   - Document available components

2. **Available Components**

   - `<Callout>` - For highlighting important information
   - `<BookmarkCard>` - For rich link previews and URL cards
   - `<Notion>` - For Notion page references with automatic title fetching and optional manual override

3. **Notion Component Usage**

   ```mdx
   <!-- Automatic title fetching (slower, requires network request) -->

   <Notion href="https://dannysmith.notion.site/Page-ID">Link text</Notion>

   <!-- Manual title override (faster, no network request) -->

   <Notion href="https://dannysmith.notion.site/Page-ID" title="Custom Title">
     Link text
   </Notion>
   ```

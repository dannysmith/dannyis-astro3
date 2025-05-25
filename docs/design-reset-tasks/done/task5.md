## Task: Refactor and Redesign Callout Component

To make it easy to highlight important information, warnings, tips, quotes, or side-notes inside articles or notes — using a clean, styled component similar to Notion's callouts.

#### Behaviour

- A custom **Astro/MDX component** (e.g., `<Callout>`) that wraps Markdown content.
- Intended primarily for use **inside MDX files**, though flexible enough to use in templates or static pages if needed.

#### Props / Configuration suggestion

- `type` (string): Optional. Determines the styling, icon, and tone of the callout.
  - Examples: `info`, `success`, `warning`, `danger`, `quote`, `tip`, etc.
- `color` (string): Optional override for custom background color (tailwind class, hex, or token).
- `icon` (string): Optional override for the icon.
- If no `type` is specified, falls back to a **default neutral style**.

#### Usage Example (MDX)

```mdx
<Callout type="tip">
  This is a helpful suggestion. You might want to try using a `<Callout>` component!
</Callout>
```

### Rendering Style

- Background color and border that match the type (e.g., blue for info, yellow for warning, green for success).
- Icon aligned with the type.
- Rounded corners, good spacing, and readable typography.
- Responsive layout that looks good on all screen sizes.
- Should support inline Markdown content inside the callout block (e.g., links, bold, lists).

### Design Goal

- Mimic Notion's feel but lean into a custom, beautiful aesthetic aligned with the rest of the site's visual system.

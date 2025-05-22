---
description:
globs:
alwaysApply: false
---

# Content Management

## Purpose

Define guidelines for managing and organizing content in the personal website, ensuring consistency and maintainability across articles and notes.

## Content Types

### Articles

1. **Purpose**

   - Long-form writing
   - Deep thinking and research
   - Timeless content
   - Personal publication style

2. **Structure**

   - Use MDX for enhanced markdown
   - Include required frontmatter
   - Support optional metadata
   - Follow consistent formatting

3. **Writing Style**
   - Clear and engaging
   - Well-structured
   - Properly formatted
   - SEO-optimized

### Notes

1. **Purpose**

   - Short-form content
   - Quick thoughts and reactions
   - Link sharing
   - Microblog style

2. **Structure**

   - Use Markdown or MDX
   - Minimal required metadata
   - Support URL previews
   - Tag-based organization

3. **Writing Style**
   - Concise and focused
   - Informal tone
   - Clear context
   - Easy to scan

## Content Organization

### File Structure

```
src/content/
├── articles/
│   ├── YYYY-MM-DD-title.mdx
│   └── ...
└── notes/
    ├── YYYY-MM-DD-title.md
    └── ...
```

### Naming Conventions

- Use date prefix (YYYY-MM-DD)
- Use kebab-case for titles
- Include descriptive names
- Avoid special characters

## Frontmatter

### Article Frontmatter

```yaml
---
title: String (required)
pubDate: Date (required)
draft: Boolean (default: false)
updatedDate: Date (optional)
cover: Image (optional)
coverAlt: String (optional)
description: String (optional)
tags: String[] (optional)
platform: "medium" | "external" (optional)
redirectUrl: String (optional)
---
```

### Note Frontmatter

```yaml
---
pubDate: Date (required)
title: String (optional)
url: String (optional)
tags: String[] (optional)
---
```

## Content Features

### Notion Mentions

- Client-side metadata fetching
- Fallback to regular links
- Consistent styling
- Error handling

### Lovely Embeds

- Support for various platforms
- Fallback preview cards
- Responsive design
- Error handling

### Callouts

- Multiple types (info, warning, etc.)
- Consistent styling
- Markdown support
- Accessibility compliance

## Best Practices

1. **Writing**

   - Use clear headings
   - Include proper spacing
   - Add alt text to images
   - Use semantic HTML

2. **Organization**

   - Keep related content together
   - Use consistent naming
   - Maintain clear structure
   - Document patterns

3. **Maintenance**

   - Regular content audits
   - Update outdated content
   - Check for broken links
   - Monitor performance

4. **Accessibility**
   - Use semantic markup
   - Include proper alt text
   - Ensure proper contrast
   - Test with screen readers

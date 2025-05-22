---
description: Project structure and file organization guidelines
globs: ['**/*']
alwaysApply: true
---

# Project Structure

## Purpose

Define the organization and architecture of the personal website built with Astro, ensuring consistency and maintainability across the codebase.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Header, Footer, etc.)
│   ├── articles/       # Article-specific components
│   ├── notes/         # Note-specific components
│   └── ui/            # Basic UI components (buttons, cards, etc.)
├── content/           # Content collections
│   ├── articles/      # Blog posts and long-form content
│   └── notes/         # Short-form content and microblog posts
├── layouts/           # Page layouts
│   ├── Article.astro  # Article page layout
│   ├── Note.astro     # Note page layout
│   └── Base.astro     # Base layout with common elements
├── pages/             # Astro pages (routes)
├── styles/            # Global styles and CSS
│   ├── global.css     # Global styles
│   ├── variables.css  # CSS custom properties
│   └── typography.css # Typography system
└── utils/             # Utility functions and helpers

public/              # Static assets
├── images/          # Image assets
└── fonts/           # Font files

.cursor/             # Cursor configuration
└── rules/           # Project rules and guidelines

tasks/               # Task tracking
└── TASKS.md        # Main task list
```

## Content Organization

### Articles

- Stored in `src/content/articles/`
- Use `.mdx` extension
- Required frontmatter:
  ```yaml
  title: String
  pubDate: Date
  draft: Boolean (default: false)
  ```
- Optional frontmatter:
  ```yaml
  updatedDate: Date
  cover: Image
  coverAlt: String
  description: String
  tags: String[]
  platform: "medium" | "external"
  redirectUrl: String
  ```

### Notes

- Stored in `src/content/notes/`
- Use `.md` or `.mdx` extension
- Required frontmatter:
  ```yaml
  pubDate: Date
  ```
- Optional frontmatter:
  ```yaml
  title: String
  url: String
  tags: String[]
  ```

## Component Organization

### Common Components

- Located in `src/components/common/`
- Include: Header, Footer, Navigation
- Should be highly reusable and configurable

### Feature Components

- Located in `src/components/articles/` and `src/components/notes/`
- Specific to content types
- Include: ArticleCard, NoteCard, etc.

### UI Components

- Located in `src/components/ui/`
- Basic building blocks
- Should be atomic and composable

## Technical Implementation

The project is built with:

- **Astro**: Core framework
- **TypeScript**: For type-safe code
- **MDX**: For enhanced markdown content
- **CSS**: For styling (no CSS frameworks)
- **Vercel**: For deployment

## Best Practices

1. **File Naming**

   - Use kebab-case for file names
   - Use PascalCase for component names
   - Use camelCase for utility functions

2. **Component Structure**

   - One component per file
   - Co-locate component styles
   - Use TypeScript interfaces for props

3. **Content Management**

   - Use content collections for type safety
   - Validate frontmatter
   - Keep content separate from code

4. **Asset Management**

   - Use Astro's image optimization
   - Organize assets by type
   - Use descriptive file names

5. **Code Organization**
   - Keep related code together
   - Use clear, descriptive names
   - Document complex logic
   - Follow single responsibility principle

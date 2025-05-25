# Component Development

## Purpose

Define guidelines for developing and maintaining components in the personal website, ensuring consistency, reusability, and performance.

## Component Types

### Common Components

1. **Navigation**

   - `MainNavigation.astro` - Main site navigation
   - `NavLink.astro` - Individual navigation link component
   - `Footer.astro` - Site footer with links and info

2. **Layout**

   - `Grid.astro` - Layout grid component
   - `BaseHead.astro` - Base head component for SEO and meta tags

3. **Utility**
   - `FormattedDate.astro` - Date formatting component
   - `Spinner.astro` - Loading spinner component

### Feature Components

1. **Content Display**

   - `NoteCard.astro` - Card component for displaying notes
   - `BookmarkCard.astro` - Card component for displaying URL previews/bookmarks
   - `Embed.astro` - Universal embed component for rich media and link previews
   - `Notion.astro` - Component for Notion page references
   - `Callout.astro` - Component for highlighting important information
   - `Lightbox.astro` - Image lightbox component
   - `Pill.astro` - Small label/badge component for tags, categories, etc.

2. **Icons**
   - Located in `icons/` directory
   - Used throughout the site for consistent iconography

## Component Documentation

### Embed.astro

- **Purpose:**

  - Universal embed component for rich media and link previews.
  - Automatically detects and renders YouTube, Tweet, and Vimeo embeds.
  - Falls back to `BookmarkCard` for all other URLs, ensuring consistent design.

- **Props:**

  - `url: string` (required) — The URL to embed or preview.
  - `className?: string` (optional) — Additional classes for custom styling.

- **Design & Usage:**

  - Use `<Embed url="..." />` anywhere you want to embed a link or media.
  - No client JS required; all logic is server-side.
  - If the URL is a YouTube, Tweet, or Vimeo link, renders the appropriate embed.
  - For all other URLs, renders a `BookmarkCard` with your custom styling.
  - Responsive and accessible by default.

- **Example:**
  ```astro
  <Embed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
  <Embed url="https://twitter.com/astro_build/status/1552351234567890123" />
  <Embed url="https://vimeo.com/76979871" />
  <Embed url="https://astro.build" /> <!-- Falls back to BookmarkCard -->
  ```

### BookmarkCard.astro

- **Purpose:**

  - Displays a rich preview of a URL/bookmark using Open Graph and metadata.
  - Used for blogrolls, bookmarks, and as a fallback for universal embeds.

- **Props:**

  - `url: string` (required) — The URL to preview.
  - `className?: string` (optional) — Additional classes for custom styling.

- **Design & Usage:**

  - Uses `@astro-community/astro-embed-link-preview` under the hood.
  - Responsive: horizontal layout with image on the right for wide containers, stacked for narrow.
  - Title uses the primary accent color (`var(--c-primary)`).
  - Domain is rendered in monospace font (`var(--font-code)`).
  - All colors and fonts use global CSS variables.
  - Subtle border radius and box-shadow for modern card look.
  - Accessible: focus states and semantic markup.
  - Minimal, DRY CSS with container queries for layout.

- **Example:**
  ```astro
  <BookmarkCard url="https://astro.build" />
  ```

### Pill.astro

- **Purpose:**

  - Renders a small, rounded label or badge for tags, categories, or statuses.

- **Props:**

  - `text: string` (required) — The label text.
  - `color?: string` (optional) — Background color (CSS variable or value). Defaults to `var(--color-grey-700)`.
  - `textColor?: string` (optional) — Text color. Defaults to `white`.

- **Design & Usage:**

  - Uses CSS variables for background and text color for easy theming.
  - Uppercase, bold, and slightly condensed for visual punch.
  - Subtle border and small border-radius for a modern badge look.
  - Inline-flex for alignment with text or icons.

- **Example:**
  ```astro
  <Pill text="Draft" color="var(--color-yellow-500)" textColor="var(--c-black)" />
  ```

## Development Guidelines

### Component Structure

1. **File Organization**

   ```astro
   components/
   ├── ComponentName.astro
   └── icons/
       └── IconName.astro
   ```

2. **Code Structure**

   ```astro
   ---
   // 1. Imports
   import { Image } from 'astro:assets';
   import type { Props } from './types';

   // 2. Props Interface
   export interface Props {
     required: string;
     optional?: number;
     withDefault?: boolean;
   }

   // 3. Props destructuring
   const { prop1, prop2 } = Astro.props;

   // 4. Data fetching (if needed)
   const data = await fetchData();
   ---

   <!-- 5. Template -->
   <div class="component">
     <!-- Content -->
   </div>

   <!-- 6. Styles -->
   <style>
     :root {
       --component-background: var(--color-bg-dark-200);
       --component-foreground: var(--c-white);
       /* Other CSS variables */
     }

     /* Component styles */
   </style>
   ```

### Props Interface

1. **TypeScript Definition**

   ```typescript
   export interface Props {
     required: string;
     optional?: number;
     withDefault?: boolean;
   }
   ```

2. **Default Values**
   ```typescript
   const defaults = {
     withDefault: true,
   };
   ```

### Styling

1. **CSS Variables**

   - Define component-specific variables in `:root`
   - Use semantic variable names
   - Reference global theme variables
   - Example:
     ```css
     :root {
       --component-background: var(--color-bg-dark-200);
       --component-foreground: var(--c-white);
     }
     ```

2. **Responsive Design**

   - Use container queries when appropriate
   - Implement mobile-first layouts
   - Use clamp() for fluid typography
   - Example:

     ```css
     @container (width > 400px) {
       /* Desktop styles */
     }

     .title {
       font-size: clamp(1rem, calc(0.6rem + 1vw), 1.5rem);
     }
     ```

3. **Layout Patterns**
   - Use CSS Grid for complex layouts
   - Flexbox for alignment and spacing
   - Container queries for component-level responsiveness
   - Example:
     ```css
     .container {
       display: flex;
       justify-content: space-between;
       align-items: center;
     }
     ```

### Accessibility

1. **Semantic HTML**

   - Use appropriate elements (`<article>`, `<section>`, etc.)
   - Include ARIA attributes when needed
   - Support keyboard navigation
   - Maintain focus management

2. **Testing**
   - Test with screen readers
   - Verify keyboard access
   - Check color contrast
   - Validate ARIA usage

## Best Practices

1. **Performance**

   - Minimize JavaScript
   - Optimize images
   - Lazy load when appropriate
   - Monitor bundle size

2. **Maintenance**

   - Write clear documentation
   - Include usage examples
   - Add prop validation
   - Handle edge cases

3. **Documentation**
   - Purpose and usage
   - Props and types
   - Examples and demos
   - Accessibility notes

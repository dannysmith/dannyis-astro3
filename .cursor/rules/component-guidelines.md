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
   - `BookmarkCard.astro` - Card component for displaying URL previews
   - `Notion.astro` - Component for Notion page references with error handling and optional title override
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
  - Automatically detects and renders YouTube, Tweet, Vimeo, and Loom embeds.
  - Falls back to `BookmarkCard` for all other URLs, ensuring consistent design.

- **Props:**

  - `url: string` (required) — The URL to embed or preview.
  - `className?: string` (optional) — Additional classes for custom styling.

- **Design & Usage:**

  - Use `<Embed url="..." />` anywhere you want to embed a link or media.
  - No client JS required; all logic is server-side.
  - If the URL is a YouTube, Tweet, Vimeo, or Loom link, renders the appropriate embed.
  - For all other URLs, renders a `BookmarkCard` with your custom styling.
  - Responsive and accessible by default.

- **Example:**
  ```astro
  <Embed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
  <Embed url="https://twitter.com/astro_build/status/1552351234567890123" />
  <Embed url="https://vimeo.com/76979871" />
  <Embed url="https://www.loom.com/share/e738280dc4464402927315e1fda6b036" />
  <Embed url="https://astro.build" /> <!-- Falls back to BookmarkCard -->
  ```

### Loom.astro

- **Purpose:**

  - Standalone component for embedding Loom videos.
  - Provides responsive iframe embedding with proper aspect ratio.
  - Used internally by `Embed.astro` but can also be used directly.

- **Props:**

  - `id: string` (required) — The Loom video ID (extracted from URL).
  - `className?: string` (optional) — Additional classes for custom styling.

- **Design & Usage:**

  - Use `<Loom id="..." />` when you have the video ID directly.
  - Responsive 16:9 aspect ratio container.
  - No client JS required; server-side rendered iframe.
  - Supports fullscreen playback.

- **Example:**
  ```astro
  <Loom id="e738280dc4464402927315e1fda6b036" />
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

### Callout.astro

- **Purpose:**

  - Simple callout component for highlighting important information.
  - Uses existing color system from global.css for consistency.
  - Clean, minimal design that fits with the site's aesthetic.

- **Props:**

  - `title?: string` (optional) — The callout title/heading.
  - `type?: 'default' | 'red' | 'blue' | 'green' | 'orange' | 'yellow' | 'purple'` (optional) — Color variant. Defaults to 'default'.
  - `icon?: string` (optional) — Emoji or icon to display.

- **Design & Usage:**

  - Use `<Callout>content</Callout>` for basic callouts.
  - Add `icon` prop for visual emphasis (emojis work well).
  - Add `title` prop for structured callouts with headings.
  - Choose appropriate `type` for semantic meaning.
  - Uses existing color variables from global.css (--color-{type}-300).
  - Simple, clean design without excessive styling.

- **Color Variants:**

  - `default` — Gray (--color-grey-300)
  - `blue` — Blue (--color-blue-300)
  - `green` — Green (--color-green-300)
  - `yellow` — Yellow (--color-yellow-300)
  - `red` — Red (--color-red-300)
  - `orange` — Orange (--color-orange-300)
  - `purple` — Purple (--color-purple-300)

- **Examples:**

  ```astro
  <!-- Basic callout -->
  <Callout type="blue">
    This is a simple blue callout.
  </Callout>

  <!-- Callout with icon and title -->
  <Callout icon="💡" type="blue" title="Tip">
    This callout has an icon and title.
  </Callout>

  <!-- Error callout -->
  <Callout icon="❌" type="red" title="Error">
    Something went wrong.
  </Callout>
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

   // 3. Props destructuring with defaults
   const { prop1, prop2, withDefault = true } = Astro.props;

   // 4. Data fetching with error handling (if needed)
   try {
     const data = await fetchData();
   } catch (error) {
     console.warn('Failed to fetch data:', error);
     // Implement fallback behavior
   }
   ---

   <!-- 5. Template with accessibility attributes -->
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

### Error Handling

1. **Network Requests**

   - Always wrap external API calls in try-catch blocks
   - Provide meaningful fallback content
   - Log warnings for debugging without breaking the build
   - Example:
     ```typescript
     try {
       const result = await externalAPI(url);
       data = result.data;
     } catch (error) {
       console.warn(`Failed to fetch data from ${url}:`, error);
       data = fallbackData;
     }
     ```

2. **Graceful Degradation**
   - Provide optional props for manual overrides
   - Use sensible defaults
   - Ensure components work even when external services fail

### Props Interface

1. **TypeScript Definition**

   ```typescript
   export interface Props {
     required: string;
     optional?: number;
     withDefault?: boolean;
     title?: string; // Optional override for performance
   }
   ```

2. **Default Values**
   ```typescript
   const { required, optional, withDefault = true, title } = Astro.props;
   ```

### External Links

1. **Security**

   - Always use `target="_blank"` and `rel="noopener noreferrer"` for external links
   - Validate URLs when possible

2. **Accessibility**
   - Add `aria-hidden="true"` to decorative icons
   - Ensure proper focus management
   - Use semantic HTML elements

### Styling

1. **CSS Variables**

   - Define component-specific variables in `:root`
   - Use semantic variable names
   - Reference global theme variables
   - Support dark mode with media queries
   - Example:

     ```css
     :root {
       --component-background: var(--color-bg-dark-200);
       --component-foreground: var(--c-white);
       --component-hover-opacity: 0.8;
     }

     @media (prefers-color-scheme: dark) {
       :root {
         --component-background: var(--color-bg-light-200);
         --component-foreground: var(--c-black);
       }
     }
     ```

2. **Modern CSS**

   - Use `inline-flex` for better alignment control
   - Implement smooth transitions for interactions
   - Use `currentColor` to inherit text color
   - Prefer `object-fit` for image sizing
   - Example:

     ```css
     .component {
       display: inline-flex;
       align-items: baseline;
       transition: opacity 0.2s ease;
     }

     .component:hover {
       opacity: var(--component-hover-opacity);
     }
     ```

3. **Responsive Design**

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

4. **Layout Patterns**
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
   - Optimize images with proper dimensions
   - Lazy load when appropriate
   - Monitor bundle size
   - Provide manual overrides to skip expensive operations

2. **Maintenance**

   - Write clear documentation
   - Include usage examples
   - Add prop validation
   - Handle edge cases
   - Implement proper error handling

3. **Documentation**
   - Purpose and usage
   - Props and types
   - Examples and demos
   - Accessibility notes
   - Error handling behavior

---
description: Guidelines for developing and maintaining Astro components
globs: ['**/*.astro']
alwaysApply: true
---

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
   - `URLCard.astro` - Card component for displaying URL previews
   - `Notion.astro` - Component for Notion page references
   - `Callout.astro` - Component for highlighting important information
   - `Lightbox.astro` - Image lightbox component

2. **Icons**
   - Located in `icons/` directory
   - Used throughout the site for consistent iconography

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
     required: string
     optional?: number
     withDefault?: boolean
   }
   ```

2. **Default Values**
   ```typescript
   const defaults = {
     withDefault: true,
   }
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

3. **Testing**

   - Unit test components
   - Test accessibility
   - Verify responsiveness
   - Check browser support

4. **Documentation**
   - Purpose and usage
   - Props and types
   - Examples and demos
   - Accessibility notes

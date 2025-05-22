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

### Feature Components

### UI Components

1. **Basic Elements**

2. **Layout Components**

3. **Feedback Components**
   - Spinner

## Development Guidelines

### Component Structure

1. **File Organization**

   ```astro
   components/
   ├── ComponentName.astro
   └── ComponentName.css (optional, for complex components)
   ```

2. **Code Structure**

   ```astro
   ---
   // 1. Imports
   import { Image } from 'astro:assets';
   import type { Props } from './types';

   // 2. Props
   const { prop1, prop2 } = Astro.props;

   // 3. Data fetching (if needed)
   const data = await fetchData();
   ---

   <!-- 4. Template -->
   <div class="component">
     <!-- Content -->
   </div>

   <!-- 5. Styles -->
   <style>
     /* Scoped styles */
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

1. **Scoped Styles**

   - Use Astro's scoped styles
   - Avoid global styles
   - Use CSS custom properties
   - Follow BEM naming

2. **Responsive Design**
   - Mobile-first approach
   - Use relative units
   - Test all breakpoints
   - Consider touch targets

### Accessibility

1. **Semantic HTML**

   - Use appropriate elements
   - Include ARIA attributes
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

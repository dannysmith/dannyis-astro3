## Task: Split Out CSS into layers

Use CSS layers to help with specificity, and generally get a better more robust architecture for my CSS. I'm not sure how this plays with Astro components scoped styles.

I think these layers might be sensible:

- @reset - Basic resets
- @base - Basic styles and typography which apply everywhere. Think of these like universal "UI styles".
- @prose - Styling for prose. Used in body copy (including Notes) everywhere except Articles themselves
- @articletypography - Specific styling for Articles only.
- @component - Component-specific styles.
- @theme - used to switch between light and dark themes.
- @page - Page-specific.

### Bonus: Container queries

Where possible, use container queries and CSS variables to simplify things as we go.

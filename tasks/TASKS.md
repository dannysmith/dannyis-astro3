# Design Reset Tasks

## 1. CSS Architecture Reset

### 1.1 CSS Layers Implementation

- [x] Move existing reset styles to `@reset` layer
- [x] Extract and organize base typography into `@base` layer
- [x] Create base CSS file structure with layer definitions
- [x] Create `@prose` layer for general content styling
- [x] Set up `@articletypography` layer for article-specific styles
- [x] Document layer usage guidelines

### 1.2 Container Queries Implementation

- [x] Audit current layout patterns for container query opportunities
- [x] Implement container queries for responsive components

## 2. NoteCard and Note Pages Enhancement

### 2.1 Typography System

- [ ] Audit current typography usage in notes
- [ ] Design new typography scale for notes
- [ ] Implement new typography styles
- [ ] Create consistent link styles
- [ ] Design and implement list styles
- [ ] Add proper spacing and rhythm
- [ ] Test typography across different content types

### 2.2 NoteCard Component

- [ ] Design new NoteCard layout
- [ ] Implement responsive grid system
- [ ] Add hover and interaction states
- [ ] Create consistent image handling
- [ ] Implement metadata display
- [ ] Add loading states
- [ ] Test across different content lengths

## 3. Enhanced Embedding System

### 3.1 BookmarkCard Component (formerly URLCard)

- [ ] Research and select metadata fetching solution
- [ ] Design new card layout
- [ ] Implement metadata extraction
- [ ] Create fallback states for missing data
- [ ] Add loading states
- [ ] Implement responsive image handling
- [ ] Add hover and interaction states
- [ ] Test with various URL types

### 3.2 Universal Embed Component

- [ ] Research embed providers and requirements
- [ ] Select and implement embed library
- [ ] Create provider-specific components
- [ ] Implement fallback to BookmarkCard
- [ ] Add loading states
- [ ] Create error handling
- [ ] Test with various embed types
- [ ] Document usage in MDX

### 3.3 MDX Integration

- [ ] Create MDX component for embeds
- [ ] Add syntax highlighting
- [ ] Implement error boundaries
- [ ] Create documentation
- [ ] Add examples

## 4. Testing and Documentation

### 4.1 Testing

- [ ] Create visual regression tests
- [ ] Test responsive behavior
- [ ] Test dark/light mode
- [ ] Test accessibility
- [ ] Performance testing

### 4.2 Documentation

- [ ] Document CSS architecture
- [ ] Create component usage guidelines
- [ ] Add code examples
- [ ] Document MDX usage
- [ ] Create contribution guidelines

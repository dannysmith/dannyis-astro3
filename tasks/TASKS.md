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

- [x] Audit current typography usage in notes
- [x] Design new typography scale for notes if needed
- [x] Implement new typography styles in notes
- [x] Create consistent link styles in notes
- [x] Design and implement list styles in notes
- [x] Add proper spacing and rhythm in notes
- [x] Test typography across different content types in notes

### 2.2 NoteCard Component

- [x] Design new NoteCard layout
- [x] Implement responsive grid system
- [x] Add hover and interaction states
- [x] Create consistent image handling
- [x] Implement metadata display
- [x] Test across different content lengths

## 3. Enhanced Embedding System

### 3.1 BookmarkCard Component (formerly URLCard)

- [ ] Rename to BookmarkCard
- [ ] Research and select metadata fetching solution
- [ ] Design new card layout
- [ ] Implement metadata extraction
- [ ] Create fallback states for missing data
- [ ] Add loading states
- [ ] Implement responsive image handling
- [ ] Add hover and interaction states
- [ ] Test with various URL types
- [ ] Add documentation to cursor files

### 3.2 Universal Embed Component

- [ ] Research embed providers and requirements
- [ ] Select and implement embed library
- [ ] Create provider-specific components
- [ ] Implement fallback to BookmarkCard
- [ ] Add loading states
- [ ] Create error handling
- [ ] Test with various embed types
- [ ] Document usage in MDX

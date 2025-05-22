# Personal Website Initial Requirements

## Project Overview

### Background

This document outlines the requirements for rebuilding my personal website using Astro. The site will serve as a platform for sharing my thoughts, experiences, and work while maintaining a focus on simplicity, performance, and accessibility.

### Why I'm Building This

- I've had a personal website for a long time on danny.is.
- It serves two main purposes:
  1. A place to share stuff I'm interested in — blog posts, notes, etc.
  2. A place to play and experiment with code, especially CSS, HTML, JavaScript, and now AI-assisted coding tools.
- It's supposed to be fun, not a chore — managing it shouldn't be a burden.
- It's my personal presence online. When someone Googles me, this should be the site they find and explore.

### Core Intentions

- Have my little corner of the web.
- Share ideas easily via "notes", and longer-form writing via "articles".
- Tinker with front-end code when I feel like it.
- Own a fast, static site I can deploy anywhere.
- Create something I enjoy maintaining and evolving over time, which is fine if I don't touch the code for a few years.
- Lets me write easily and quickly in markdown (or MDX).

### User Needs

- **Danny**
  - Express himself freely and without constraint.
  - Have fun. With writing, design and code.
  - Connect with people he can help, or who can help him.
- **Interested reader**
  - Read Danny's words in peace.
  - (Perhaps) be notified when Danny writes some new words.
- **Person checking Danny out**
  - Find out if Danny is the right person to help them.
  - Contact Danny.

### Core Values

1. **Simplicity**: Minimal dependencies, clean code, and straightforward user experience
2. **Content-First**: Design decisions prioritize content readability and accessibility
3. **Authenticity**: The site should reflect my personal style and values
4. **Performance**: Fast loading times and optimal user experience across devices
5. **Maintainability**: Easy to update and extend without unnecessary complexity

### Engineering Principles

1. As few dependencies as reasonably possible — both build-time and run-time
2. Use defaults wherever possible
3. Write as little code as possible, unless it's fun
4. Avoid over-abstraction & hacks
5. Use the web's platform features: modern CSS & HTML is extremely powerful
6. Bake accessibility, semantics and SEO in from the start

## Technical Stack

### Core Technologies

- **Framework**: AstroJS
- **Styling**: Modern vanilla CSS
- **Deployment**: Vercel
- **Content**: MDX/Markdown
- **Version Control**: Git/GitHub
- **CI/CD**: GitHub Actions

### Development Tools

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Lighthouse for performance monitoring
- Playwright for testing

## Project Structure

### Directory Layout

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── pages/          # Route pages
├── content/        # Content collections
│   ├── articles/   # Blog posts
│   └── notes/      # Short-form content
├── styles/         # Global styles
└── utils/          # Helper functions
```

### Content Collections

1. **Articles**

   - Location: `src/content/articles/`
   - Format: MDX
   - Required frontmatter: title, slug, pubDate
   - Optional frontmatter: description, tags, draft status

2. **Notes**
   - Location: `src/content/notes/`
   - Format: MDX
   - Required frontmatter: title, pubDate
   - Optional frontmatter: url, tags

## Design System

### Typography

1. **Article Typography**

   - Primary: Literata (variable font)
   - Base size: 16px
   - Line height: 1.5 (24px baseline grid)
   - Advanced features: old-style figures, fractions, small caps

2. **UI Typography**
   - Primary: Jost\* (variable font)
   - Focus on readability and versatility
   - Support for all-caps usage

### Color System

1. **Core Colors**

   - Primary text: #000000
   - Secondary text: rgba(0, 0, 0, 0.7)
   - Accent: #FF1E1C
   - Background: #FFFFFF

2. **Link Colors**
   - Default: rgba(111, 131, 222, 0.5)
   - Visited: rgba(188, 127, 219, 0.5)
   - Active/Hover: rgb(255, 30, 28)

### Layout

1. **Grid System**

   - 20px base grid
   - Flexible layouts with permission to break grid when needed
   - Support for full-bleed images and content

2. **Responsive Design**
   - Mobile-first approach
   - Fluid typography using clamp()
   - Optimized for all screen sizes

## Performance Requirements

### Lighthouse Targets

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Core Web Vitals

- LCP: < 1s
- FID: < 100ms
- CLS: < 0.1

### Bundle Size

- Initial load: < 100KB
- Total bundle: < 200KB

## Deployment Strategy

### Environments

- Development: Local
- Preview: Vercel Preview Deployments
- Production: Vercel Production

### CI/CD Pipeline

1. **On Pull Request**

   - TypeScript check
   - ESLint check
   - Build verification
   - Preview deployment

2. **On Main Branch**
   - All PR checks
   - Production deployment
   - Lighthouse check
   - Performance monitoring

## Success Criteria

### Technical

- All Lighthouse scores meet targets
- All tests passing
- No TypeScript errors
- No ESLint warnings
- Successful deployment

### Content

- All existing content migrated
- All URLs working
- All redirects functioning
- RSS feed operational

### User Experience

- Fast loading times
- Accessible to all users
- Works on all devices
- Easy to maintain and update

## Public Routes

The site should expose the following routes.

### Dynamic Astro Pages

```tree
├── /about               # About page
├── /now                 # Now page. Inspired [by this](https://sivers.org/nowff).
├── /rss                 # RSS feed
├── /working             # Simple landing page for my business
├── /writing             # Index of all my articles
├── /writing/[slug]      # Individual article
├── /notes               # Index of my notes
└── /notes/[slug]        # Individual note
```

### Redirects

```tree
├── /meeting → https://cal.com/dannysmith
├── /tools → https://betterat.work/toolbox
├── /linkedin → https://www.linkedin.com/in/dannyasmith
├── /cv → /cv-danny-smith.pdf
├── /working → https://betterat.work
├── /remote → A Notion page
├── /rtotd → A Notion page
├── /using → A Notion page
├── /music → YouTube channel
├── /singing → YouTube channel
└── /youtube → YouTube channel
```

## Design & Aestheric

### Core Visual Style

The site should evoke a clean, typographically-driven, experimental feel — blending personal expression with classic graphic design influences. It's not intended to be generic or safe; it should feel like a personal zine-meets-manifesto with strong visual identity.

Inspired by:

- My current site (`danny.is`) and its stark, oversized typography.
- Constructivist and modernist layouts (El Lissitzky, Jan Tschichold, Paul Schuitema).
- Mid-century grid design systems with asymmetric balance and bold diagonals.
- Monochrome/minimal colour palettes with accent tones (red, coral, cream).
- Notion-style simplicity, combined with expressive typographic play.

### Typography

- Typography is central — large, expressive, and layout-defining.
- Expect to use:
  - **Oversized headlines**
  - **Drop caps**, **ligatures**, **lining/small caps**, **optical margins**
  - **Variable fonts** and advanced OpenType features
- Serif for body text in articles (bookish, elegant)
- Sans-serif for UI/navigation (neutral and crisp)

### Layout Principles

- Heavily based on a grid, but...
- Asymmetry is encouraged.
- Content sections may break conventional grid layouts.
- Use of **diagonal lines**, rotated text, and overlapping text/image elements where appropriate.
- Sharp, intentional whitespace and strong alignment cues.

### Components / Reusables

- Visual system will be component-driven, with:
  - Navigation lists that resemble the old homepage
  - Clean, card-style embeds
  - Typographic banners and announcements
- All components should follow the design tone: sharp, beautiful, text-first, and minimal.

### Tone & Feel

- Feels **personal**, **experimental**, and **intentional**.
- It's a space for ideas and design play — not just a portfolio.
- Leans into **design as authorship**, rather than "professional blandness."

### Colour Palette

The pallete which I use for other personal stuff is this one:

```css
--color-black: #191919;
--color-true-black: #000000;

--color-pink-300: #f4dfeb;
--color-pink-400: #fac8e4;
--color-pink-500: #e255a1;
--color-pink-600: #ad1a72;
--color-pink-700: #602d51;
--color-pink-800: #533b4c;

--color-red-300: #fbe4e4;
--color-red-400: #ffd4d4;
--color-red-500: #ff7369;
--color-red-600: #e03e3e;
--color-red-700: #b84848;
--color-red-800: #594141;

--color-orange-300: #faebdd;
--color-orange-400: #fed9b7;
--color-orange-500: #ffa344;
--color-orange-600: #d9730d;
--color-orange-700: #765839;
--color-orange-800: #594a3a;

--color-purple-300: #eae4f2;
--color-purple-400: #e6d7f9;
--color-purple-500: #9a6dd7;
--color-purple-600: #6940a5;
--color-purple-700: #6f6695;
--color-purple-800: #443f57;

--color-yellow-300: #fbf3db;
--color-yellow-400: #feeebe;
--color-yellow-500: #ffdc49;
--color-yellow-600: #dfab01;
--color-yellow-700: #645e26;
--color-yellow-800: #59563b;

--color-green-300: #ddedea;
--color-green-400: #c8eae3;
--color-green-500: #4dab9a;
--color-green-600: #0f7b6c;
--color-green-700: #2c5c5a;
--color-green-800: #354c4b;

--color-blue-300: #ddebf1;
--color-blue-400: #c4e4f2;
--color-blue-500: #529cca;
--color-blue-600: #0b6e99;
--color-blue-700: #254e66;
--color-blue-800: #364954;

--color-brown-300: #e9e5e3;
--color-brown-400: #f1e0d8;
--color-brown-500: #937264;
--color-brown-600: #64473a;
--color-brown-700: #534343;
--color-brown-800: #434040;

--color-grey-300: #ebeced;
--color-grey-400: #ebeced;
--color-grey-500: #979a9bf2;
--color-grey-600: #9b9a97;
--color-grey-700: #596063;
--color-grey-800: #454b4e;

/* Backgrounds */
--color-bg-light-100: #ffffff;
--color-bg-light-200: #f3f6f7;
--color-bg-light-300: #e3e6e8;
--color-bg-light-400: #9a9fa1;
--color-bg-light-500: #6c7173;
--color-bg-light-600: #4d5254;
--color-bg-light-700: #2f3437;
--color-bg-light-800: #191919;

--color-bg-dark-100: #191919;
--color-bg-dark-200: #202020;
--color-bg-dark-300: #2c2c2c;
--color-bg-dark-400: #363636;
--color-bg-dark-500: #898989;
--color-bg-dark-600: #9b9b9b;
--color-bg-dark-700: #d5d5d5;
--color-bg-dark-800: #ffffff;

/* Brand colours */
--c-primary: var(--color-red-500);
--c-brand-grey: var(--color-bg-light-700);
--c-brand-dark-grey: var(--color-bg-light-800);
```

- The site should probably use a reduced palette:
  - Base: **warm off-white / paper tone**
  - Text: **black** or near-black
  - Accent: **red / coral / pink**
- Should be easy to change globally if the palette evolves over time.
- Dark mode should be considered.

## CSS Architecture & Approach

- Use modern CSS features to their fullest extent.
- Write the minimum amount of CSS to achieve the goals.
- Use global CSS to set basic styles and keep things consistent, using CSS cascade layers if appropriate.
- Use global variables set on `:root` for colours and other site-wide things.
- Use scoped styles for Astro components.
- Always keep things consistenmt and maintainable.

## Performance, SEO, and Accessibility Goals

- Site is responsive by default.
- Optimize for a performant static site build.
- Bake good SEO in from the start.
- Bake accessibility in from the start.
- Maintain a good Lighthouse score.

# INITIAL FEATURES

## Feature: Notes

### Purpose

The Notes feature is designed to let me quickly and easily share short-form content — like thoughts, links, media, or commentary — without the friction of writing a full blog post. It acts as a personal microblog or digital stream of consciousness, inspired by the feel of tweeting but fully owned and static.

### Core Behaviours

- Each note is written as a Markdown or MDX file in a dedicated notes/ directory.
- Notes support frontmatter metadata:
  - title (optional)
  - url (optional)
  - pubDate
  - tags (optional)

### Rendering Rules

- If a url is provided:
- If it's a web article, it renders a nice card preview (e.g., with title, site, thumbnail, etc.) above the body text.
- If it's a YouTube or Vimeo video, it embeds the video directly in the note.
- If no url is provided, the note renders as pure standalone content.
- Markdown content below the embed/card is treated as my commentary or reaction.

### UX Goals

- Supports all the same Markdown/MDX features which articles support (see below)
- As for articles, images should open in a lightbox when clicked (assuming their original size is better than that being rendered)
- Notes should be indexable and filterable by tag and date.
- Visual hierarchy should distinguish them from blog posts — think of them like "cards" or "snippets" in a feed, not full articles.

## Feature: Articles (Blog Posts)

### Purpose

The Articles feature is for publishing long-form writing in a clean, typographically rich format. These are the proper essays — not short snippets — and often involve deeper thinking, research, and polish. The articles section should feel like a personal publication, designed for focused reading and timelessness.

### Structure & Metadata

Each article is authored as an MDX file, stored in a dedicated articles/ or blog/ directory, and includes the following frontmatter:

- title: String – Required.
- draft: Boolean – Defaults to false. Drafts are committed but not shown in production.
- pubDate: Date – Required.
- updatedDate: Date – Optional. If present, renders a "Last updated on..." label.
- cover: Astro image object – Optional. Used as article hero.
- coverAlt: String – Optional. Descriptive alt text for accessibility and SEO.
- description: String – Optional. Used for SEO/meta tags and feed descriptions.
- tags: Array of strings – Optional.
- platform: Enum – Optional, one of "medium" (Legacy article, Should redirect to Medium) or "external" (guest post or external platform article).
- redirectUrl: String (URL) – Optional. If present, article will 301 redirect to this URL when visited. These MDX files will contain only frontmatter and no body content).

### Rendering Logic

- Standard articles (no redirectUrl) are rendered as fully styled, readable pages.
- If redirectUrl is set, the article will perform a 301 redirect to the provided URL.
- If updatedDate is provided, display a "Last updated on {date}" badge above the article.

### Typography & Visual Design

- Articles are bookish and beautiful — this is the space for deep reading.
- Content is styled with a different CSS design system, including things like:
  - Serif typeface distinct from the main UI
  - Advanced typographic features like Drop caps, Ligatures, Lining caps, Small caps, Optical margin alignment etc
- Generous white space for readability etc
- Any Boilerplate (e.g., site header/footer) still uses global styles — only the article content area uses this specialized system.
- As for articles, images should open in a lightbox when clicked (assuming their original size is better than that being rendered)

## Feature: Notion Mentions

### Purpose

When linking to public Notion pages in content, links should automatically transform into rich, branded previews — mirroring the way Notion itself renders internal page mentions. This provides visual context and a polished, consistent look when referencing my Notion content.

### Behaviour

- When a **Notion URL** is included anywhere in content (Articles or Notes):
  - The frontend detects that it's a Notion link.
  - It **fetches metadata at runtime on the client**, specifically:
    - The **page title**
    - The **page icon** (emoji or image)
  - The link is transformed into a **"Notion-style mention"** component:
    - Displays the icon
    - Displays the current title of the page
    - Hyperlinked to the original Notion page

### Why Client-Side?

- Titles and icons may **change over time**.
- By resolving metadata **on the client at runtime**, updates to the Notion page (e.g., new title or emoji) are **reflected immediately** without needing to rebuild the site.
- Keeps the static build process lean and clean.

### Fallback Behaviour

- If the Notion page is not public or can't be fetched:
  - Fallback to a **regular link** with no special styling or preview.

## Feature: Lovely Embeds

### Purpose

To enhance the visual richness and readability of content by automatically rendering clean, attractive previews or embeds when a supported URL is included — similar to how Notion or Twitter handles link previews.

### Behaviour

- When a supported **embed URL** is included (e.g., Loom, GitHub Gist, YouTube, etc.):

  - Render a **native embed** using a custom Astro component.
  - The component takes a single prop: the `url`.
  - It should render responsively and cleanly, styled to match the overall site.

- When the URL is **not embeddable**, fall back to a **beautiful, responsive link preview card**:
  - Pulls metadata from the page (title, description, image, domain).
  - Renders with a consistent design: image thumbnail, title, domain, and optional description.
  - Entire card links to the external page.
  - Must be fully responsive and look good on all screen sizes.

### Implementation Notes

- Can use a special component like `<LovelyEmbed url="..." />` in MDX content.
- Design should feel elegant and in keeping with the site's visual style.
- Should handle edge cases gracefully (e.g., broken metadata, missing images).

### Supported Embed Types (initial list)

- Loom
- GitHub Gists
- YouTube/Vimeo
- Twitter/X (optional, or behind a toggle)
- Any other platforms with easy oEmbed or iframe support

### Feature: Callouts

#### Purpose

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

## Project Phases

### Phase 1: Foundation

- Basic Astro setup with TypeScript
- Core layouts and components
- Basic routing and navigation
- Essential styling system
- Basic content collections setup

### Phase 2: Content Features

- Articles implementation
- Notes implementation
- RSS feed
- Basic SEO setup
- Image optimization

### Phase 3: Enhanced Features

- Notion Mentions
- Lovely Embeds
- Callouts
- Lightbox
- Advanced typography

### Phase 4: Polish & Performance

- Performance optimization
- Accessibility improvements
- Analytics
- Testing
- Documentation

## Technical Requirements

### Performance Targets

1. **Lighthouse Scores**

   - Performance: 95+
   - Accessibility: 100
   - Best Practices: 100
   - SEO: 100

2. **Core Web Vitals**
   - LCP: < 1s
   - FID: < 100ms
   - CLS: < 0.1

### Image Optimization

1. **Responsive Images**

   - Automatic generation of multiple sizes
   - srcset support
   - Lazy loading
   - Width/height attributes

2. **Image Features**
   - Full-bleed support
   - Left/right bleed options
   - Lightbox for enlarged views
   - Alt text requirements

### Code Blocks

1. **Styling**

   - Fira Code font with ligatures
   - Syntax highlighting
   - Copy button
   - Line numbers (optional)

2. **Features**
   - Language detection
   - Code folding
   - Inline code styling

## Development Workflow

1. **Version Control**

   - Git-based workflow
   - Feature branches
   - Pull request reviews
   - Conventional commits
   - PR templates
   - Code review requirements

2. **Deployment**

   - Vercel hosting
   - Automatic builds
   - Preview deployments
   - Environment variables managed through Vercel
   - Custom domain: danny.is

3. **Testing & Quality**
   - Unit tests for components
   - Integration tests for pages
   - Accessibility testing
   - Performance monitoring
   - Automated checks:
     - TypeScript
     - ESLint
     - Prettier
     - Tests
     - Build
     - Lighthouse

## Content Migration

1. **Process**

   - Export existing content
   - Convert to MDX format
   - Update frontmatter
   - Validate content structure
   - Test rendering
   - Redirects setup
   - SEO preservation

2. **URL Structure**
   - Maintain existing URLs where possible
   - Implement redirects for changed URLs
   - SEO optimization

## Accessibility Requirements

1. **Standards**

   - WCAG 2.1 Level AA compliance
   - Semantic HTML
   - ARIA attributes where needed
   - Keyboard navigation support
   - Screen reader optimization
   - Color contrast compliance
   - Focus management
   - Reduced motion support

2. **Testing**
   - Automated accessibility checks
   - Manual testing with screen readers
   - Color contrast verification
   - Focus management

## Monitoring & Analytics

1. **Error Tracking**

   - Error logging
   - Performance monitoring
   - User feedback collection

2. **Analytics**
   - Basic usage statistics
   - Performance metrics
   - Content engagement tracking
   - Uptime monitoring
   - Build monitoring

## Future Considerations

1. **Content Expansion**

   - Support for additional content types
   - Enhanced social features
   - Newsletter integration

2. **Technical Enhancements**
   - Web Components integration
   - Advanced animations
   - Progressive Web App features

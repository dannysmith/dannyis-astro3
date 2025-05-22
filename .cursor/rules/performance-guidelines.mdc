---
description: Guidelines for maintaining high performance in the Astro project
globs: ['**/*.astro', '**/*.mdx']
alwaysApply: true
---

# Performance Guidelines

## Core Web Vitals Targets

1. **Lighthouse Scores**

   - Performance: 95+
   - Accessibility: 100
   - Best Practices: 100
   - SEO: 100

2. **Core Web Vitals**
   - LCP: < 1s
   - FID: < 100ms
   - CLS: < 0.1

## Image Optimization

1. **Astro Image Component**

   ```astro
   <Image
     src={import('../assets/image.jpg')}
     alt="Description"
     width={800}
     height={600}
     loading="lazy"
   />
   ```

2. **Best Practices**
   - Always provide width and height
   - Use descriptive alt text
   - Implement lazy loading for below-fold images
   - Use appropriate image formats (WebP, AVIF)
   - Implement responsive images with srcset

## JavaScript Optimization

1. **Minimize Client-Side JS**

   - Use Astro's zero-JS by default
   - Only add interactivity when necessary
   - Use progressive enhancement
   - Implement proper code splitting

2. **Third-Party Scripts**
   - Load non-critical scripts asynchronously
   - Use proper loading strategies
   - Minimize third-party dependencies
   - Implement proper error handling

## Build Optimization

1. **Static Generation**

   - Use static generation by default
   - Implement proper caching strategies
   - Optimize build output
   - Minimize bundle size

2. **Asset Optimization**
   - Optimize images during build
   - Minify CSS and JavaScript
   - Implement proper caching headers
   - Use content hashing for cache busting

## Loading Performance

1. **Critical CSS**

   - Inline critical CSS
   - Defer non-critical CSS
   - Use proper loading strategies
   - Implement proper caching

2. **Resource Loading**
   - Use proper preload directives
   - Implement proper lazy loading
   - Use appropriate loading strategies
   - Optimize resource loading order

## Caching Strategy

1. **Static Assets**

   - Implement proper cache headers
   - Use content hashing
   - Implement proper cache busting
   - Use appropriate cache durations

2. **Dynamic Content**
   - Implement proper cache invalidation
   - Use appropriate cache durations
   - Implement proper cache headers
   - Use appropriate cache strategies

## Monitoring

1. **Performance Monitoring**

   - Implement proper analytics
   - Monitor Core Web Vitals
   - Track performance metrics
   - Implement proper error tracking

2. **Error Tracking**
   - Implement proper error logging
   - Track performance errors
   - Monitor resource loading
   - Track user experience

## Testing

1. **Performance Testing**

   - Test on multiple devices
   - Test on multiple networks
   - Test on multiple browsers
   - Implement proper performance budgets

2. **Load Testing**
   - Test under load
   - Test under stress
   - Test under failure
   - Implement proper monitoring

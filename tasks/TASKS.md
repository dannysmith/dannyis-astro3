# Current Tasks

## Task 1: Dark Mode

This should include:

Detecting UAs preferred mode.
Allowing users to switch modes with and saving the mode in session storage or a cookie.
Swapping out various colours via CSS vars.
Changing the colours of SVGs via CSS vars.
Make links yellow (see https://tess.oconnor.cx/2023/10/heraldic-link-colors)
Reducing the colour of images and videos by applying a filter like filter: grayscale(30%).
Increasing the contrast and stroke weight of some type.
Changing the SVG favicon (https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/)

## Task: Run some audits & tidy up

- [ ] Review all UI type & colours for consistency and colour
- [ ] Change Blog Posts to be called Article everywhere
- [ ] Reorganise components into folders:
  - Atomic UI (pill, spinner, FormattedDate etc)
  - For use in MDX and prose (Embed, Grid, Loom, Notion, Callout etc)
  - UI Modules (NoteCard, NavLink, MainNavigation, LightBox, Footer, BaseHead etc)
- [ ] Check all metadata, titles & descriptions work properly for SEO and OG embedding
- [ ] RSS Feeds
  - [ ] Add seperate RSS feeds for Articles and Notes
  - [ ] Add links to all three RSS feeds to Footer
  - [ ] Check all RSS feeds generate ok and render in RSS readers
- [ ] Check sitemap generates properly
- [ ] Add [Simply Analytics](https://www.simpleanalytics.com/)
- [ ] Add to Google Tag Manager
- [ ] Manually test all pageson multiple devices and browsers
  - [ ] Chrome/Arc macOS
  - [ ] Firefox macOS
  - [ ] Safari macOS
  - [ ] iOS Chrome
  - [ ] iOS Safari
  - [ ] Windows Chrome
  - [ ] Windows Edge
  - [ ] iPad smoke test
- [ ] Run CSS audit for unused or duplicated styles
- [ ] Run SEO Audit Tool
- [ ] Check Lighthouse Score
- [ ] Update cursor rules and docs to reflect current design patterns etc

# Possible Future Tasks

- Add view transitions
- Move very old articles over from https://github.com/dannysmith/dasmith/tree/master/articles
- Keybord search & Command Palette
- Add a `/working` page with a unique design which talks about my consulting offering.
- Show links to Toolbox Items from my Notion toolbox on a special page
- Add Webmentions

# Beroo Website

GitHub-ready static website files.

## Required before deploy

Add the `assets/` folder beside these files. The HTML/CSS/JS references:

- `assets/favicon.svg`
- `assets/optimized/hero-desktop.jpg`
- `assets/optimized/hero-mobile.jpg`
- `assets/optimized/img-01-thumb.jpg` through `img-41-thumb.jpg`
- `assets/optimized/img-01-large.jpg` through `img-41-large.jpg`

## Root files

- `index.html`
- `styles.css`
- `script.js`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `_headers` for Netlify cache headers
- `_redirects` for Netlify 404 handling

## Deployment note

Netlify supports `_headers`, `_redirects`, and Netlify Forms. GitHub Pages does not process `_headers`, `_redirects`, or Netlify Forms.

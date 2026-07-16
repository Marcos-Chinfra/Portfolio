# AGENTS.md

## Repository Overview

Personal portfolio website built with vanilla HTML, CSS, and JavaScript. No frameworks, bundlers, or build tools.

## Structure

- `index.html` - Single entry point, all content in one file
- `src/index.js` - Dark mode toggle and mobile menu logic
- `src/style/main.css` - All styles with CSS custom properties for theming
- `asset/` - Images, icons, and PDF resume

## Development

**Local preview**: Open `index.html` directly in a browser or use a static server:
```bash
python3 -m http.server 8000
# or
npx serve .
```

**No build step required** - edit files directly and refresh browser.

## Theming System

Dark/light mode uses `data-theme` attribute on `<html>`:
- CSS variables defined in `:root`, `[data-theme="dark"]`, and `[data-theme="light"]`
- Toggle button in `.navBar_darkMode` adds/removes `.active` class
- System preference detected on load via `prefers-color-scheme`

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to GitHub Pages:
- Triggers on push to `main`
- Deploys entire repo root to `gh-pages` branch
- No build process - static files served as-is

## Conventions

- All text content is in Spanish
- CSS uses BEM-like naming with underscores (e.g., `.navBar_brand`, `.about_skills--list`)
- Mobile breakpoint at 620px
- External resources: Google Fonts (Quicksand, Raleway), Font Awesome, Devicons, Flaticon uicons

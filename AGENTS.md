# AGENTS.md

## Repository Overview

Personal portfolio website built with Astro. Static site generation with component-based architecture.

## Structure

- `src/pages/index.astro` - Main page entry point
- `src/layouts/BaseLayout.astro` - Base HTML layout with head, scripts, and dark mode logic
- `src/components/` - Reusable Astro components (Header, Hero, About, Projects, Footer)
- `src/styles/main.css` - All styles with CSS custom properties for theming
- `asset/` - Static assets (images, icons, PDF resume) served from public directory
- `astro.config.mjs` - Astro configuration

## Development

**Local preview**: Run the Astro dev server:
```bash
npm run dev
# or
astro dev
```

**Build for production**:
```bash
npm run build
# Preview production build
npm run preview
```

## Theming System

Dark/light mode uses `data-theme` attribute on `<html>`:
- CSS variables defined in `:root`, `[data-theme="dark"]`, and `[data-theme="light"]`
- Toggle button in `.navBar_darkMode` adds/removes `.active` class
- System preference detected on load via `prefers-color-scheme`
- Logic is in `BaseLayout.astro` script section

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to GitHub Pages:
- Triggers on push to `main`
- Builds Astro project and deploys to `gh-pages` branch
- Node 24 required for build

## Conventions

- All text content is in Spanish
- CSS uses BEM-like naming with underscores (e.g., `.navBar_brand`, `.about_skills--list`)
- Mobile breakpoint at 620px
- External resources: Google Fonts (Quicksand, Raleway), Font Awesome, Devicons, Flaticon uicons
- Components are in `src/components/` with `.astro` extension
- Use TypeScript for type safety (tsconfig.json configured)

## Key Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands
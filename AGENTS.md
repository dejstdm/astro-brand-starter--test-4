# Astro Brand Starter

## Purpose
This starter delivers production-ready Astro markup, SCSS, and JavaScript that can be copied into downstream systems after build. The repository is now focused exclusively on `prod` components; development demos and example content have been removed.

## Quick Start
- Install dependencies: `npm install`
- Start the dev server: `npm run dev` (default: http://localhost:4321)
- Build for production: `npm run build` (outputs to `dist/`)
- Preview the build: `npm run preview`
- Run other Astro commands: `npm run astro <command>`

## Source Layout
```
src/
|- components/
|  |- prod/            # Production-ready Astro components
|- layouts/
|  |- ProdLayout.astro # Shared layout for production pages
|- pages/
|  |- index.astro      # Entry page that points to production content
|  |- prod/
|     |- homepage.astro
|- scss/
|  |- base/
|  |- components/
|  |- layout/
|  |- utils/
|- scripts/
|  |- modules/
public/
dist/
```

## Workflow
1. Establish the design system first by defining tokens in `src/scss/utils/_variables.scss` and aligning base styles in `src/scss/base/` and `src/scss/layout/`.
2. Build the Astro component inside `src/components/prod/`, referencing the shared design system tokens.
3. Add or update SCSS in `src/scss/components/` and ensure it is imported by `src/scss/main.scss`.
4. Wire any interactivity in `src/scripts/modules/` and expose it through `src/scripts/functions.js`.
5. Surface the component on a production page within `src/pages/prod/` and verify accessibility, responsiveness, and cross-browser behaviour.
6. Run `npm run build` and copy assets from `dist/` when deploying to another platform.

## Documentation Map
- Component workflow: `src/components/AGENTS.md`
- SCSS structure and tokens: `src/scss/AGENTS.md`
- Production pages and site assembly: `src/pages/prod/AGENTS.md`

## Principles
- Component-driven, production-first implementation
- Single source of truth for design tokens in `scss/utils`
- Mobile-first, accessible BEM-based styling
- No dev or example components; only files that ship to production belong in the repository




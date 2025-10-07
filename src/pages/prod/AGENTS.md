# Production Pages Guide

## Purpose
Pages in this directory represent the production-ready experience. Each route should assemble components from `src/components/prod/`, use shared layouts, and reflect the same content that will be exported to downstream systems.

## Directory Snapshot
```
src/pages/prod/
|- homepage.astro    // Primary marketing page built from prod components
```
The root entry point `src/pages/index.astro` loads production content as well; keep both files in sync so local previews and the exported build show the same experience.

## Layout Requirements
- Use `ProdLayout` for every production route.
- Import `../scss/main.scss` through the layout only; do not add extra CSS references inside the page.
- Keep third-party scripts centralized in the layout. Pages should only include component markup and data.

## Building a New Page
1. Confirm the design system tokens and base styles are current so every section pulls from the shared foundation.
2. Create a `.astro` file inside `src/pages/prod/` (e.g., `about.astro`).
3. Import `ProdLayout` plus the required components from `src/components/prod/`.
4. Compose sections inside `<ProdLayout>` following the component wrappers described in `src/components/AGENTS.md` and referencing design system classes.
5. Verify that any new component styles are imported in `src/scss/main.scss` and that supporting modules are initialized through `src/scripts/functions.js`.
6. Test the page at `npm run dev` and ensure `npm run build` completes without errors.

## Content & Data
- Hard-coded content is acceptable for the starter; keep copy inlined inside the component or page.
- When integrating with a CMS, replace static data with `Astro.props` or `Astro.fetch()` calls as needed.
- Use semantic headings (`h1`, `h2`, etc.) to preserve accessibility and SEO.

## Exporting to Other Platforms
- Run `npm run build` and copy the HTML, CSS, and JS emitted to `dist/`.
- If the target system requires partials, split the compiled markup along component boundaries.
- Reuse the same design tokens by porting the variables defined in `src/scss/utils/_variables.scss`.

## Quality Checklist
- Page uses only production components and shared layouts.
- No references to removed dev/example routes.
- Navigation links and buttons point to live routes.
- Accessibility review performed (landmarks, headings, focus order).
- Build output verified before delivering assets to downstream teams.




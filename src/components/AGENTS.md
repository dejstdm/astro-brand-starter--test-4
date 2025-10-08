# Components Guide

## Directory Policy
- All components reside in `src/components/prod/`.
- Name files in PascalCase (e.g., `HeroBanner.astro`).
- Keep component-specific assets close to the component; do not recreate `examples` or `dev` folders.

## Production Component Workflow
1. Confirm the shared design system tokens, typography, and spacing rules are defined so the component can consume them consistently.
2. Map the HTML structure and required data.
3. Create the `.astro` file under `src/components/prod/`.
4. Follow the standard wrapper classes (`page-sec`, `container`, `sec`).
5. Hook up SCSS and JavaScript if needed.
6. Surface the component on a production page for verification.

## Baseline Template
```astro
---
const { variant } = Astro.props;
---
<section class="page-sec page-sec--bg-white page-sec--component-name">
  <div class="component-name sec">
    
    <!-- Centered header (if needed) -->
    <div class="container-sec-header">
      <div class="component-name__header">
        <h2 class="component-name__title">Title</h2>
        <p class="component-name__subtitle">Subtitle</p>
      </div>
    </div>

    <!-- Main content -->
    <div class="container">
      <div class="component-name__content sec__content">
        <!-- component content -->
      </div>
    </div>
    
  </div>
</section>
```

Replace `component-name` with the kebab-case slug for your component.

**Background Control:** Use `page-sec--bg-white` or `page-sec--bg-gray` modifiers on the `page-sec` wrapper to control section backgrounds. These global modifiers are defined in `src/scss/layout/_section.scss`.

**Container Rule:** NEVER nest containers! Use `.container-sec-header` for centered headers (630px max-width) and `.container` for content. They should be siblings, not nested.

## Checklist
- Uses the `page-sec`, `container`, `sec`, and `sec__content` structure.
- Class names follow BEM (`component-name`, `component-name__element`, `component-name--modifier`).
- Props typed via the frontmatter `Astro.props` object when needed.
- No inline `<style>` or `<script>` blocks; use SCSS modules and JS modules instead.
- Images or icons load from `public/` or are passed via props.

## Styling
- Create the SCSS file under `src/scss/components/_component-name.scss`.
- Import `@use "../utils/variables" as *;` at the top of each component stylesheet.
- Add the new file to `src/scss/main.scss` under the components section.
- Keep selectors scoped to the component block.

## JavaScript Integration
- Place component logic in `src/scripts/modules/` (e.g., `component-name.mjs`).
- Export an init function and import it from `src/scripts/functions.js`.
- In modules, guard DOM queries so unused components do not throw errors.
- Avoid leaking globals; attach helpers to the returned object if needed.

## Testing
- Render the component on a page in `src/pages/prod/` or a temporary internal route.
- Verify mobile, tablet, and desktop behaviour.
- Confirm keyboard navigation and semantic markup meet accessibility expectations.

## Maintenance
- Keep props and slots documented in component comments when helpful.
- When removing a component, delete its SCSS and JS counterparts.
- Re-run `npm run build` after major changes to check for linting or compile issues.




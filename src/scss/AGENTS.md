# SCSS Guide

## Architecture Overview
The SCSS layer is organized for production builds: variables and utilities feed base styles, layout primitives, and component styles. Each component uses BEM naming and consumes shared design tokens so the compiled CSS can be copied into other systems without refactoring.

## Directory Layout
```scss
src/scss/
|- main.scss              // Entry point imported by layouts
|- base/
|  |- _fonts.scss         // Font declarations and @font-face rules
|  |- _globals.scss       // Global element defaults
|  |- _normalize.scss     // Normalize baseline
|  |- _typography.scss    // Typography scale
|- layout/
|  |- _container.scss     // Container widths and spacing (NEVER nest containers!)
|  |- _section.scss       // Section wrappers
|- components/
|  |- _achievements.scss
|  |- _buttons.scss
|  |- _clients.scss
|  |- _hero.scss
|  |- _hero-v2.scss
|  |- _testimonial.scss
|- utils/
|  |- _variables.scss     // Design tokens and mixins
```

## Container Rules
**CRITICAL:** Containers must NEVER be nested inside other containers of any type. Each container variant (`.container`, `.container--nav`, `.container-fluid`, `.container-sec-header`) is a standalone layout element with its own padding and max-width. Use separate sibling containers instead of nesting them.

## Import Order
`main.scss` must load utilities first, then base, layout, and finally components:
```scss
// UTILS
@use "./utils/variables" as *;

// BASE
@use "./base/fonts";
@use "./base/normalize";
@use "./base/typography";
@use "./base/globals";

// LAYOUT
@use "./layout/container";
@use "./layout/section";

// COMPONENTS
@use "components/buttons";
@use "components/achievements";
@use "components/clients";
@use "components/hero";
@use "components/hero-v2";
@use "components/testimonial";
```
Maintain this sequence so variables and mixins are available before they are used.

## Component Styling Rules
- Every component stylesheet imports variables: `@use "../utils/variables" as *;`
- Scope selectors to the component block (`.hero`, `.testimonial`, etc.).
- Use BEM naming with double underscores for elements and double hyphens for modifiers.
- Keep responsive rules mobile-first with `@media (min-width: $breakpoint)` queries from `_variables.scss`.
- Do NOT add `background-color` to component stylesheets. Use the `page-sec--bg-white` or `page-sec--bg-gray` modifiers in the component markup instead.
- Add the file to `main.scss` immediately after creation to ensure it is bundled.

## Tokens and Utilities
- Brand colors, spacing, breakpoints, and z-index scales live in `_variables.scss`.
- Typography rules (font stacks, weights, heading/body scales) live in `_typography.scss`.
- Update tokens first, then adjust component styles that consume them.

## Workflow for New Production Styles
1. Define or update the shared design system tokens in `_variables.scss`, `_typography.scss`, and related base/layout files before styling components.
2. Create `_component-name.scss` in `src/scss/components/`.
3. Import variables at the top of the file.
4. Write base styles, responsive adjustments, and state modifiers that reference the shared tokens.
5. Import the file in the components block of `main.scss`.
6. Validate in the browser and run `npm run build` to confirm the compiled CSS succeeds.

## Quality Checklist
- Two-space indentation, no trailing whitespace.
- Avoid unused selectors or deeply nested rules (max three levels).
- Provide brief comments only when explaining non-obvious logic.
- Confirm color contrast and focus states meet WCAG guidance.
- Remove unused files when the related component is deleted.




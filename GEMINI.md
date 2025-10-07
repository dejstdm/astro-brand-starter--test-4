# Project Overview

This is a brand website project built with Astro. It is designed to be a starter template for creating brand websites with a component-driven approach. The project is set up to generate static HTML, CSS, and JavaScript that can be easily integrated into other systems, such as a Drupal theme. It includes a development server with hot reloading for a fast development experience.

## Building and Running

To get started with this project, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start a local development server at `http://localhost:4321`.

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    This command builds the site for production to the `./dist/` directory.

4.  **Preview the Production Build:**
    ```bash
    npm run preview
    ```
    This command starts a local server to preview the production build.

## Development Conventions

*   **Component-Based Architecture:** The project follows a component-based architecture, with production components located in `src/components/prod`.
*   **Styling:** The project uses SCSS for styling, with the main stylesheet located at `src/scss/main.scss`.
*   **Production Pages:** Production routes live in `src/pages/prod`, and the root `src/pages/index.astro` loads the production homepage.
*   **Static Asset Generation:** The primary goal of this project is to generate static HTML, CSS, and JavaScript assets that can be used in other systems. There is no direct integration with any backend system in this project.


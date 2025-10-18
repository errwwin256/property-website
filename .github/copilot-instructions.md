<!-- Auto-generated guidance for AI coding agents working on this repo -->
# Copilot instructions — property-website

This file gives focused, actionable guidance for AI coding agents editing or extending this React + Vite project.

Keep guidance concise and always reference the concrete files and patterns below.

1) Project overview (big picture)
- Thin React SPA built with Vite. Entry point: `src/main.jsx` → `src/App.jsx`.
- Client-side routing with `react-router-dom`. Routes are defined in `src/App.jsx` and map to `src/pages/*`.
- Styling: Tailwind CSS classes directly in JSX (`index.css`, `tailwind.config.js`).
- No backend in this repository — data is hard-coded (see `src/data/properties.js` and inline arrays in pages). Treat these as the canonical sample data sources.

2) Key folders and files
- `src/main.jsx` — React entry, wraps `App` with `BrowserRouter`.
- `src/App.jsx` — App shell: fixed `Navbar`, `Footer`, and route definitions for pages.
- `src/components/` — Reusable UI pieces (e.g., `Navbar.jsx`, `Footer.jsx`, `Hero.jsx`, `PropertyCard.jsx`). Look here for UI and interaction patterns.
- `src/pages/` — Route views (Home, About, Contact, Gallery, Properties). Use these when adding or modifying routes.
- `src/data/properties.js` — example dataset for properties; some pages use local arrays instead. Prefer updating this file when adding canonical sample data.
- `src/utils/formatPrice.js` — example utility; follow this pattern for small, focused helpers.
- `public/` — static assets (images, logos). Paths in JSX refer to `/...` (served from `public`).

3) Development / build workflows (how to run and test changes)
- Start dev server with: `npm run dev` (runs `vite` as configured in `package.json`).
- Build for production: `npm run build`.
- Preview a production build: `npm run preview`.
- Linting: `npm run lint` runs `eslint .`.

4) Project-specific conventions and patterns
- Functional React components (default exports). Keep components small and focused.
- Files use .jsx and ESM imports (package.json contains `type: "module"`). Use modern import syntax.
- Tailwind-first styling: prefer utility classes in className. Avoid adding new global CSS unless necessary — place new utilities in `index.css` only when they cannot be expressed with Tailwind.
- Routing conventions: Add pages under `src/pages` and add a `Route` entry in `src/App.jsx`.
- Data pattern: small datasets live in `src/data/*` or inline in page files. If you add more data, place a normalized dataset under `src/data` and import it where needed.
- Assets: reference public images with absolute paths like `/images/whatever.png` or `/property1.jpg` (they live in `public/`). Do not import them via JS unless you need bundler processing.

5) Interaction & accessibility notes (observable in components)
- `Navbar.jsx` uses `useLocation()` for active link styling — follow that pattern for route-aware UI.
- Mobile menu in `Navbar.jsx` toggles a fixed drawer using local state. Keep animations and accessibility attributes (aria-labels) consistent.
- Search inputs in `Navbar` use a simple onSubmit handler that currently alerts; treat this as a placeholder when wiring real search.

6) Tests & CI
- There are no test files or CI config in this repo. If adding tests, prefer Jest or Vitest; keep them co-located under `__tests__` or `src/__tests__`.

7) When making changes, be concrete (examples)
- Adding a new page: create `src/pages/NewPage.jsx`, export a default functional component, then add <Route path="/new" element={<NewPage/>} /> in `src/App.jsx`.
- Adding sample property data: update `src/data/properties.js` and import it in `src/pages/Properties.jsx` or in `src/components/PropertyCard.jsx`.
- Adding a utility: create `src/utils/nameOfUtil.js` exporting named functions, and import with `import { fn } from '../utils/nameOfUtil'`.

8) Linting & formatting expectations
- ESLint is configured (see `eslint.config.js`). Run `npm run lint` after edits. Code style is standard modern React + Tailwind; keep JSX concise, prefer destructuring props, and keep consistent className ordering where possible.

9) Common pitfalls & how to fix them
- Images missing in page: confirm the file exists in `public/` and reference it with a leading `/` (e.g., `/images/living-space.png`).
- Router issues (blank pages on refresh): `BrowserRouter` is used — confirm dev server or preview serves index.html for unknown routes (Vite does this by default).
- Currency formatting: use `src/utils/formatPrice.js` for PHP currency formatting to match project locale.

10) Edit policy for AI agents
- Make minimal, focused changes. Prefer editing or adding a single file per PR unless the change requires multiple coordinated edits (e.g., adding a new page requires the new file + App route).
- Always run `npm run lint` and `npm run dev` locally to sanity-check runtime and lint errors.
- When touching UI copy or styles, prefer small, iterative diffs and include screenshots in PRs if the change affects layout.

If anything here is unclear or you want examples expanded (routing, data wiring, or build edge-cases), tell me which section to expand and I'll iterate.

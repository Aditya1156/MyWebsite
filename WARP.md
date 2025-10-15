# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common commands

- Install deps
  ```bash
  npm install
  ```
- Start dev server (Vite on http://localhost:3000)
  ```bash
  npm run dev
  ```
- Build and preview
  ```bash
  npm run build
  npm run preview
  ```
- Type-check
  ```bash
  npm run type-check
  ```
- Linting: not configured
- Tests: not configured

If you need tests/linting, add them first (e.g., Vitest/ESLint) before referencing commands here.

## Architecture overview

- Tooling: Vite + React + TypeScript. Tailwind is loaded via CDN in `index.html` (no PostCSS pipeline).
- Entry points
  - `index.html`: includes Tailwind config, import maps for CDN libraries, and loads `/index.tsx`.
  - `index.tsx`: creates the React root and renders `App`.
  - `App.tsx`: controls high-level UI state: Loader → Experience selection → FullExperience or VCard; initializes EmailJS (via CDN script in `index.html`).
- Rendering model
  - Single-page app with section anchors (`#hero`, `#projects`, etc.), smooth scrolling via Lenis, and animations via Framer Motion/GSAP.
- Project layout (key folders/files)
  - `components/`: page and UI components (e.g., `Hero`, `Footer`, `Projects`, `components/ui/stacking-card.tsx`).
  - `hooks/`: custom hooks (`useActiveSection`, `useOnScreen`, `useSmoothScroll`).
  - `lib/utils.ts`: small helpers (e.g., `cn`).
  - `constants.ts`, `types.ts`: typed data models and in-repo content (nav links, projects, experience, galleries).
  - `styles/`: global CSS, including smooth scroll enhancements.
  - `public/`: static assets.
- Configuration
  - `vite.config.ts`: React plugin, dev server on port 3000, alias `@` → project root, and `define` mappings for `process.env.*`.
  - `tsconfig.json`: ES2022 target, JSX `react-jsx`, path alias `@/*` → `./*`.

## Environment variables

- Vite loads env via `loadEnv`; `vite.config.ts` exposes `process.env.GEMINI_API_KEY` (and `API_KEY`).
- Create a `.env` (or `.env.local`) in repo root with values, e.g.
  ```bash
  GEMINI_API_KEY=your_key
  ```
  Access via `process.env.GEMINI_API_KEY` in code (per `vite.config.ts` definitions).

## Notes from README

- Requires Node.js 18+.
- Usual flow: install → `npm run dev` → `npm run build` → `npm run preview`.
- Deploy the `dist/` output (e.g., Vercel/Netlify).
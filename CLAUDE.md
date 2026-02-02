# Syne Brand Guideline

Interactive brand guide for Syne.

## Stack

- Astro 5, React 19, TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite)
- oxlint (linting), oxfmt (formatting with Tailwind class sorting)
- bun (package manager)

## Scripts

- `bun dev` — dev server
- `bun run build` — production build
- `bun run preview` — preview production build
- `bun run lint` — lint + fix
- `bun run format` — format code
- `bun run check` — CI check (astro check + lint + format)

## Structure

- `src/pages/` — Astro pages (index, brand, 404)
- `src/layouts/` — Astro layouts (BaseLayout, BrandLayout)
- `src/components/` — reusable React components (atoms + molecules)
- `src/components/*.astro` — Astro components (Section, HeroSection, ColorSection, etc.)
- `src/components/islands/` — React islands for complex interactive sections
- `src/sections/` — brand guide content sections (React)
- `src/theme/` — design tokens (colors, gradients, fonts, useTheme hook)
- `src/index.css` — Tailwind config with custom theme tokens
- `astro.config.mjs` — Astro configuration

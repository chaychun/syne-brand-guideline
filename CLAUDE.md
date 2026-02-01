# Syne Brand Guideline

Interactive brand guide for Syne.

## Stack

- React 19, TypeScript, Vite 7
- Tailwind CSS v4
- oxlint (linting), oxfmt (formatting with Tailwind class sorting)
- bun (package manager)

## Scripts

- `bun dev` — dev server
- `bun run build` — production build
- `bun run lint` — lint + fix
- `bun run format` — format code
- `bun run check` — CI check (typecheck + lint + format)

## Structure

- `src/SyneBrandGuide.tsx` — main component
- `src/theme/` — design tokens (colors, gradients, fonts, useTheme hook)
- `src/components/` — reusable components (atoms + molecules)
- `src/index.css` — Tailwind config with custom theme tokens

# Syne Brand Guideline

Interactive brand guide for Syne.

## Stack

- Astro 5, TypeScript
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
- `src/components/` — Astro components (Section, Icon, GlassCard, PhoneFrame, etc.)
- `src/index.css` — Tailwind config with custom theme tokens and gradients
- `astro.config.mjs` — Astro configuration

## Theme System

Theme colors are defined as CSS custom properties in `src/index.css`:

- Light mode defaults in `:root`
- Dark mode overrides in `[data-theme="dark"]`
- Use `text-theme-fg`, `bg-theme-surface`, etc. Tailwind classes or `var(--theme-*)` CSS variables

## Icons

Icons use `phosphor-icons-astro` via `src/components/Icon.astro` wrapper. Add new icons by importing from `phosphor-icons-astro` and adding to `ICON_MAP`.

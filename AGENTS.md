# AGENTS.md

Repo: personal portfolio site (SvelteKit 2 + Svelte 5, Tailwind v4, shadcn-svelte).
Owner: Michael Real. Author identifier on home page: "Michael Real" / `mcjefd.dev`.

## Toolchain

- **Package manager: pnpm** (lockfile present, `engine-strict=true` in `.npmrc`).
  Do not introduce `package-lock.json` or `yarn.lock`. The `pnpm-workspace.yaml`
  only whitelists `esbuild` as a build script — keep that allowlist current if you
  add packages with postinstall scripts.
- **Node 24** in the Docker image; match locally to avoid surprises.
- **Svelte 5 runes** syntax is in use (`$props()`, `{@render children()}` in
  `+layout.svelte`). Don't add Svelte 4-style `export let` / `<slot>`.

## Commands

Run from the repo root.

| Task                | Command                               |
| ------------------- | ------------------------------------- |
| Install             | `pnpm install`                        |
| Dev server          | `pnpm dev`                            |
| Type/svelte check   | `pnpm lint:svelte` (= `svelte-check`) |
| Lint JS/TS/Svelte   | `pnpm lint:eslint`                    |
| All lint (parallel) | `pnpm lint`                           |
| Format check        | `pnpm fmt`                            |
| Format fix          | `pnpm fmt:fix`                        |
| Production build    | `pnpm build` (= `vite build`)         |
| Preview build       | `pnpm preview`                        |

`svelte-kit sync` is wired to `pnpm prepare` and runs automatically on install.
Run it manually if `tsconfig.json` complains about missing generated files.

## Pre-commit

Before any commit, run both, in this order:

1. `pnpm lint` (runs `lint:eslint` and `lint:svelte` in parallel — `svelte-check`
   surfaces type errors that ESLint won't).
2. `pnpm fmt:fix` (formats with Prettier; re-run `pnpm fmt` after to confirm
   clean).

Do not commit if either step reports issues. Don't skip `lint:svelte` — it's
the only thing catching Svelte/TS type errors before CI.

## Architecture & layout

- `src/routes/` — file-system routing. Current pages: `/` (`+page.svelte`),
  `/about`, `/projects`, plus `+layout.svelte`, `+error.svelte`, and
  `layout.css` (Tailwind entrypoint + shadcn theme tokens).
- `src/lib/` — app code. `lib/utils.ts` exports the shadcn `cn()` helper
  (clsx + tailwind-merge) and the `WithoutChild` / `WithElementRef` types
  used by generated UI components. Add new shared code under `lib/`.
- `src/lib/components/` — feature components live in their own subfolders
  (e.g. `Navbar/`, `Footer/`, `HeroBackground/`, `ProjectCard/`). shadcn UI
  primitives go in `lib/components/ui/`. `lib/components/magic/` holds
  magic-ui-style animations (e.g. `TypingAnimation`).
- `src/lib/hooks/` — Svelte hooks (currently empty, reserved).
- `static/` — fonts (`Plein-*` woff2), `robots.txt`, project assets. Formatted
  by Prettier, but `static/` is in `.prettierignore`.
- Path aliases: `$lib` (SvelteKit default), plus shadcn aliases in
  `components.json` (`$lib/components`, `$lib/utils`, `$lib/components/ui`,
  `$lib/hooks`). Add new aliases in `svelte.config.js`, not `tsconfig.json`.

## Styling

- **Tailwind v4 via `@tailwindcss/vite` plugin** — there is no
  `tailwind.config.js`. Theme tokens (CSS custom properties, OKLCH colors)
  and `@plugin` directives for forms/typography live in
  `src/routes/layout.css`. Add design tokens there.
- `prettier-plugin-tailwindcss` is configured with
  `tailwindStylesheet: "./src/routes/layout.css"` — class sorting depends on
  this file existing at that path.
- VS Code is configured to treat `*.css` as `tailwindcss` language.

## Linting / formatting conventions

- Prettier: tabs, single quotes, no trailing commas, 100-col print width.
- ESLint 9 flat config; extends `js/recommended`, `ts/recommended`,
  `svelte/recommended`, plus `eslint-config-prettier` (Prettier wins on
  conflicts). `no-undef` is off (typescript-eslint recommendation for TS
  projects).
- `pnpm lint` runs `lint:eslint` and `lint:svelte` in **parallel**. When
  iterating, run them individually for clearer output.

## Deployment (Docker + adapter-node)

- `Dockerfile` is a multi-stage build: install with `pnpm install --frozen-lockfile`,
  `pnpm build`, then copy `build/` into a slim runtime image and install prod
  deps with `--ignore-scripts`. Final command: `node build`.
- `svelte.config.js` uses `@sveltejs/adapter-node`. `@sveltejs/adapter-auto` is
  also installed but not the active adapter — don't switch without reason.
- `docker-compose.yaml` runs the image as `portfolio`, binds
  `127.0.0.1:3000:3000`, joins the external `caddy_net` network, and forwards
  `ORIGIN=https://mcjefd.dev` plus `PROTOCOL_HEADER` / `HOST_HEADER` so
  SvelteKit's CSRF/origin checks work behind the Caddy reverse proxy.
- `README.md` is a placeholder — update if you add setup steps that aren't
  obvious from `pnpm install && pnpm dev`.

## Conventions to follow

- Use runes (`$state`, `$derived`, `$effect`, `$props`) in new Svelte files.
- Keep feature components in their own subdirectory with an `index.ts`
  barrel (e.g. `Navbar/Navbar.svelte` + re-export from
  `Navbar/index.ts` — that's the import pattern used in `+layout.svelte` and
  `+page.svelte`).
- For new UI primitives, prefer adding via shadcn-svelte CLI rather than
  hand-rolling, so the `$lib/components/ui` convention stays consistent.
- Don't add new top-level config files (`postcss.config.*`, `tailwind.config.*`)
  — Tailwind v4 is configured in CSS and the Vite plugin.

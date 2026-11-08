# Repository instructions

## Commands

Use the pinned pnpm version (`pnpm@10.15.0`).

- `pnpm dev` — start the Nuxt development server.
- `pnpm build` — build the SSR app; Nitro uses the Vercel preset when `VERCEL` is set and `node-server` otherwise.
- `pnpm generate` — generate a static site; `pnpm preview` — preview a build.
- `pnpm lint` — lint JavaScript, TypeScript, and Vue files; `pnpm lint:fix` applies ESLint fixes.
- `pnpm format` — format the repository. To format one file, use `pnpm exec prettier --write <path>`.
- `pnpm test` — run Vitest in watch mode; `pnpm test --run` runs once.
- `pnpm test --run app/composables/useTheme.test.ts` — run the theme composable test file. Add `-t "<test name>"` to select one test.
- `pnpm test:coverage` — run Vitest with coverage.
- `pnpm test:e2e` — invoke the Playwright test script.

## Application structure

This is a Nuxt 4 SSR portfolio. `app/app.vue` provides the `NuxtLayout`/`NuxtPage` shell; `app/layouts/default.vue` supplies the shared header and footer. The home page (`app/pages/index.vue`) composes the portfolio sections in display order. Section components render content from `app/data/`, while reusable UI such as `ProjectCard` and timeline components handle repeated presentation.

Content models such as `Project` and `Experience` live in `shared/types/index.ts`; shared types are imported through `#shared/types/index`. Nuxt configuration in `nuxt.config.ts` also owns the site metadata, SEO/robots/sitemap settings, global styles, and deployment preset.

## Repository conventions

- Keep portfolio content in typed arrays under `app/data/` and render it through the corresponding section components rather than duplicating content in templates. Project images are referenced from `public/images/` by root-relative URLs.
- User-facing portfolio copy is in Spanish. Keep new section text, navigation labels, and accessibility labels consistent with it.
- Components are discovered from `app/components` through Nuxt configuration with `pathPrefix: false`; use the existing component names directly in templates. App imports commonly use the `~/` alias.
- Theme-aware styles use CSS custom properties and reusable `theme-*` classes defined in `app/assets/css/themes.css`; `app/assets/css/main.css` provides Tailwind and global styles. The dark-mode strategy uses the `dark` HTML class.
- Theme state is managed by `app/composables/useTheme.ts` and reflected on the document root. If changing persistence or startup behavior, keep it consistent with the early theme bootstrap in `nuxt.config.ts`: the composable currently uses `theme`/`dark` localStorage keys, while the bootstrap reads `portfolio-theme`/`dark-mode`.
- Composable tests use Vitest with the Nuxt test environment (`vitest.config.ts`); mount composables with the helper in `tests/utils/mountComposable.ts`.
- Commit messages follow Conventional Commits. The configured types include `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`, and `revert`.

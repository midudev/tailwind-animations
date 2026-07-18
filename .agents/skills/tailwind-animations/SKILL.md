---
name: tailwind-animations
description: >
  Work on the midudev/tailwind-animations monorepo: CSS-only Tailwind v4 plugin,
  Astro docs site, playground, tests, and npm release. Use when adding animations,
  utilities, editing web/, releasing versions, fixing the plugin CSS, or when the
  user mentions tailwind-animations, animate-*, playground, or publish:both.
  Triggers: /tailwind-animations, "add animation", "plugin CSS", "playground",
  "release", "slide-distance", "animate-dialog".
---

# tailwind-animations — agent skill

You are working on **tailwind-animations**: a CSS-only animation plugin for **Tailwind CSS v4**, plus an Astro marketing/docs site with an interactive playground.

## Source of truth

| Path | Role |
|------|------|
| `src/index.css` | **Plugin** published to npm (`tailwind-animations`) |
| `web/` | Astro site (https://tailwind-animations.com) |
| `web/src/data/theme.js` | Animation catalog for the **website** only (mirrors plugin names; not published) |
| `test/` | Vitest + PostCSS generation tests |
| `packages/scoped/` | Deprecated npm shim `@midudev/tailwind-animations` → re-exports CSS |
| `AGENTS.md` | Supply-chain rules (fendo) |
| `CHANGELOG.md` | Release notes |
| `scripts/publish-both.mjs` | Publish official + scoped + deprecate shim |

## Hard rules (never violate)

From `AGENTS.md` / fendo:

1. **Exact versions only** in package.json deps — no `^` or `~` (exception: **peer** `tailwindcss: "4"` means any 4.x).
2. **Always commit** `pnpm-lock.yaml`.
3. Install scripts disabled; new build-step deps need explicit approval.
4. Prefer **7-day-old** package versions (minimum release age).
5. No blind `npm update` / ncu; review each upgrade.
6. Use `pnpm install --frozen-lockfile` in CI.
7. Do not commit secrets.

## Stack

- **Plugin:** pure CSS (`@theme inline`, `@keyframes`, `@utility`) — Tailwind v4
- **Peer:** `"tailwindcss": "4"`
- **Site:** Astro + `@tailwindcss/vite` + `@astrojs/sitemap`
- **Package manager:** pnpm workspace
- **Tests:** Vitest

## Consumer API (what the plugin provides)

### Install

```css
@import "tailwindcss";
@import "tailwind-animations";
```

### Animations

Class form: `animate-{name}` where `{name}` is defined via `--animate-{name}` + `@keyframes` in `src/index.css`.

Examples: `animate-fade-in`, `animate-slide-in-bottom`, `animate-jelly`, `animate-zoom-in`.

### Modifiers (compose freely)

| Concern | Classes |
|---------|---------|
| Duration | `animate-duration-{faster\|fast\|normal\|slow\|slower\|100…1000}` or `animate-duration-[777ms]` |
| Delay | `animate-delay-{0…1000\|none}` or arbitrary |
| Steps | `animate-steps-{none\|retro\|normal\|modern}` |
| Iteration | `animate-iteration-count-{once\|twice\|thrice\|infinite\|none}` |
| Fill | `animate-fill-mode-{none\|forwards\|backwards\|both}` |
| Easing | `animate-ease*`, `animate-linear`, `animate-bezier-*` |
| Direction | `animate-direction-{normal\|reverse\|alternate\|alternate-reverse}` |
| Play | `animate-play-running`, `animate-play-paused` |
| Slide distance | `animate-slide-distance-[6rem]` / `[50%]` → `--tw-anim-slide-distance` |
| Timeline | `timeline-scroll`, `timeline-view`, `animate-range-*` |
| Dialog | `animate-dialog`, `animate-dialog-from-*`, `animate-dialog-fade\|zoom`, `animate-dialog-duration-*` |

### Adding a new animation (plugin)

1. Add `--animate-{name}: {name} {duration} {easing} {fill};` inside `@theme inline` in `src/index.css`.
2. Add matching `@keyframes {name} { … }` in the same file (prefer **transform** + **opacity**).
3. Add the name to `web/src/data/theme.js` (`animation` + `keyframes`) so the site gallery/playground list it.
4. If using safelist `@source inline` in `web/src/styles/index.css`, add the new token there for the docs site.
5. Add/adjust a Vitest case in `test/index.test.js` if behavior is non-trivial.
6. Run `pnpm test:ci` and `pnpm --dir web build`.

### Slide distance

Slide keyframes use `var(--tw-anim-slide-distance, 20px)`. Utility:

```css
@utility animate-slide-distance-* {
  --tw-anim-slide-distance: --value([length], [percentage], [*]);
}
```

### Dialog

Native `<dialog>` helpers in `@layer utilities` (`.animate-dialog` + modifiers). Uses `translate`/`scale`/`opacity` transitions + `@starting-style`. Avoid leaving permanent heavy `will-change` on idle dialogs when changing this code.

## Website (`web/`)

### Commands

```bash
pnpm install
pnpm --dir web dev          # http://localhost:4321
pnpm --dir web build
pnpm --dir web preview
pnpm test:ci                # plugin tests (root)
pnpm lint
```

### Key pages

| Route | File |
|-------|------|
| `/` | `web/src/pages/index.astro` |
| `/playground/` | `web/src/pages/playground.astro` |
| `/index.md` | `web/src/pages/index.md.ts` (agent markdown) |
| `/playground.md` | `web/src/pages/playground.md.ts` |
| `/llms-full.md` | `web/src/pages/llms-full.md.ts` |

### Agent-readable Markdown (important)

**Do not scrape HTML** when answering about the public site. Use:

- `https://tailwind-animations.com/index.md`
- `https://tailwind-animations.com/playground.md`
- `https://tailwind-animations.com/llms-full.md`
- `https://tailwind-animations.com/llms.txt`

HTML includes `<link rel="alternate" type="text/markdown">` and an HTML comment pointing agents to these files.

Markdown is generated from `web/src/lib/agent-markdown.js` (reads `theme.js` + root `package.json`). Update that module when public agent docs need new sections.

### Playground URL state

Query params: `a`, `d`, `delay`, `s`, `i`, `f`, `p` (animation, duration, delay, steps, iteration, fill, preset). Defaults omitted from the URL via `history.replaceState`.

### Layout / SEO / a11y

- Shared chrome: `web/src/layouts/Layout.astro` (meta, JSON-LD, theme boot, markdown alternates)
- Header/Footer: multi-page aware (`/#section` vs `/playground`)
- Prefer subtle active UI states (soft backgrounds, not solid black/white pills)
- Keep reduced-motion behavior coherent with `Layout` + `ReducedMotionBanner`

## Release checklist (e.g. 1.0.x)

1. Ensure `src/index.css` + tests green (`pnpm test:ci`).
2. Bump `"version"` in root `package.json`.
3. `pnpm sync:scoped` (sets scoped version + `workspace:*` dep).
4. Update `CHANGELOG.md`.
5. Commit, tag `vX.Y.Z`, push.
6. With npm auth: `pnpm publish:both` (official → scoped → deprecate scoped message).

Scoped package depends on `workspace:*` locally; **pnpm publish rewrites** it to the real version on pack.

### npm pack surface

Root `"files": ["src"]` — only `src/index.css` (+ license/readme) should ship. Verify with `pnpm pack --dry-run`.

## Testing patterns

Tests use PostCSS + Tailwind to generate CSS from HTML content strings (`test/utils.js`). Assert on emitted selectors/keyframes strings.

```bash
pnpm test:ci
```

## Common tasks

### “Add a new animation”

Edit `src/index.css` + `web/src/data/theme.js` + optionally web safelist + test. See **Adding a new animation** above.

### “Fix the website UI”

Work under `web/src/`. Run `pnpm --dir web dev`. Keep plugin CSS changes out of `web/` unless the gallery must list a new name.

### “Change peer Tailwind range”

Only in `peerDependencies` of root + `packages/scoped`. Use `"4"` for any v4. Keep **devDependency** pin exact for this repo.

### “Performance work on the plugin”

Priorities historically discussed:

1. `prefers-reduced-motion` defaults
2. Avoid permanent `will-change` on idle dialogs
3. Document cost of `filter: blur` / infinite loops / backdrop-filter

## Anti-patterns

- Editing only `web/src/data/theme.js` without `src/index.css` (site shows animations that don’t exist in the package).
- Putting plugin logic in JS (package is CSS-only by design).
- Supporting Tailwind v3 in the main package (legacy is `@midudev/tailwind-animations@0.2.0`).
- Selecting all `<article>` for click-to-copy (use `.animation-card[data-class]` only).
- Blind dependency upgrades or ranges in non-peer deps.

## Quick command card

```bash
pnpm install --frozen-lockfile
pnpm test:ci
pnpm lint
pnpm --dir web build
pnpm sync:scoped
pnpm pack --dry-run
# release:
# pnpm publish:both
```

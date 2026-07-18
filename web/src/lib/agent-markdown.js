/**
 * Markdown documents for AI agents that fetch the website.
 * Generated at build time as static .md endpoints.
 */
import pkg from '../../../package.json'
import { theme } from '../data/theme.js'

const SITE = 'https://tailwind-animations.com'
const REPO = 'https://github.com/midudev/tailwind-animations'
const NPM = 'https://www.npmjs.com/package/tailwind-animations'

const animations = Object.keys(theme.animation).sort()
const durations = Object.keys(theme.animationDuration)
const delays = Object.keys(theme.animationDelay)
const steps = Object.keys(theme.animationSteps)
const iterations = Object.keys(theme.animationIterationCount)
const fills = Object.keys(theme.animationFillMode)

const mdHeaders = {
  'Content-Type': 'text/markdown; charset=utf-8',
  'X-Content-Type-Options': 'nosniff',
  'Cache-Control': 'public, max-age=3600'
}

export function markdownResponse (body) {
  return new Response(body, { headers: mdHeaders })
}

export function buildHomeMarkdown () {
  return `# Tailwind Animations

> CSS animation utilities for **Tailwind CSS v4**. Package \`${pkg.name}@${pkg.version}\`. MIT licensed by midudev & community.

This document is the **agent-readable** version of the homepage.
Human UI: ${SITE}/ · Markdown: ${SITE}/index.md · Full catalog: ${SITE}/llms-full.md

## Quick links

| Resource | URL |
|----------|-----|
| Website | ${SITE}/ |
| Playground | ${SITE}/playground/ |
| Playground (markdown) | ${SITE}/playground.md |
| npm | ${NPM} |
| GitHub | ${REPO} |
| llms.txt | ${SITE}/llms.txt |
| Full agent doc | ${SITE}/llms-full.md |

## Install

\`\`\`bash
npm install tailwind-animations
# or: pnpm add tailwind-animations
\`\`\`

\`\`\`css
@import "tailwindcss";
@import "tailwind-animations";
\`\`\`

**Requirements:** Tailwind CSS **v4** (peer: \`"tailwindcss": "4"\` → any 4.x).

**Tailwind v3:** use legacy \`@midudev/tailwind-animations@0.2.0\` (deprecated).

## Usage

\`\`\`html
<div class="animate-fade-in">Hello</div>

<div class="animate-slide-in-bottom animate-delay-300 animate-duration-slow">
  Delayed slide from bottom
</div>

<div class="animate-slide-in-left animate-slide-distance-[6rem]">
  Custom slide distance
</div>
\`\`\`

## Site sections (HTML)

- \`#animation-collection\` — gallery of all utilities (hover preview, click copy)
- \`#option-inputs\` — duration / delay / steps / play-all controls
- \`#slide-distance\` — slide distance demos (if present)
- \`#scroll-animations\` — scroll-driven motion
- \`#scroll-view-timelines\` — view/scroll timelines
- \`#dialog-effects\` — native \`<dialog>\` entry/exit (\`animate-dialog\`)
- \`#faq\` — FAQ
- Playground CTA → \`${SITE}/playground/\`

## Animation catalog (${animations.length})

${animations.map((name) => `- \`animate-${name}\``).join('\n')}

## Modifiers

### Duration (\`animate-duration-*\`)
${durations.map((k) => `\`${k}\``).join(', ')}

### Delay (\`animate-delay-*\`)
${delays.map((k) => `\`${k}\``).join(', ')}

### Steps (\`animate-steps-*\`)
${steps.map((k) => `\`${k}\``).join(', ')}

### Iteration (\`animate-iteration-count-*\`)
${iterations.map((k) => `\`${k}\``).join(', ')}

### Fill mode (\`animate-fill-mode-*\`)
${fills.map((k) => `\`${k}\``).join(', ')}

### Other
- Timing: \`animate-ease\`, \`animate-ease-in\`, \`animate-ease-out\`, \`animate-ease-in-out\`, \`animate-linear\`, \`animate-bezier-*\`
- Direction: \`animate-direction-normal|reverse|alternate|alternate-reverse\`
- Play state: \`animate-play-running\`, \`animate-play-paused\`
- Slide distance: \`animate-slide-distance-[…]\` (length or %)
- Timeline: \`timeline-scroll\`, \`timeline-view\`, \`animate-range-*\`
- Dialog: \`animate-dialog\`, \`animate-dialog-from-*\`, \`animate-dialog-fade|zoom\`, \`animate-dialog-duration-*\`

## Playground URL state

\`${SITE}/playground/?a=fade-in&d=1000&delay=0&s=none&i=once&f=both&p=box\`

| Param | Meaning |
|-------|---------|
| \`a\` | animation name (without \`animate-\` prefix) |
| \`d\` | duration key |
| \`delay\` | delay key |
| \`s\` | steps key |
| \`i\` | iteration key |
| \`f\` | fill mode |
| \`p\` | preset: \`box\` \\| \`button\` \\| \`card\` \\| \`text\` |

## For AI agents

- Prefer markdown endpoints (\`/index.md\`, \`/playground.md\`, \`/llms-full.md\`) over scraping HTML.
- Source of truth for CSS: \`${REPO}/blob/main/src/index.css\`
- Project agent skill (repo): \`.agents/skills/tailwind-animations/SKILL.md\`
- Supply-chain rules: \`AGENTS.md\` (exact dep pins, no \`^\`/\`~\`, keep lockfile)

---
Generated from \`${pkg.name}@${pkg.version}\` · ${SITE}
`
}

export function buildPlaygroundMarkdown () {
  return `# Tailwind Animations — Playground

> Live composition sandbox for \`${pkg.name}\` utilities.

HTML UI: ${SITE}/playground/  
This markdown: ${SITE}/playground.md  
Home (markdown): ${SITE}/index.md

## What you can do

1. Pick an animation from ${animations.length} utilities
2. Tune duration, delay, steps, iteration, fill mode
3. Preview on presets: **box**, **button**, **card**, **text**
4. Copy the class list
5. Share the URL (query params encode state)

## Example share URLs

\`\`\`
${SITE}/playground/?a=jelly&d=700&delay=100&i=infinite&p=card
${SITE}/playground/?a=slide-in-bottom&d=slow&p=button
${SITE}/playground/?a=fade-in-up&d=500&delay=200&f=both&p=text
\`\`\`

## Class composition

\`\`\`html
<!-- Typical output -->
<div class="animate-fade-in animate-duration-500 animate-delay-100 animate-fill-mode-both">
  …
</div>
\`\`\`

## Available animations

${animations.map((name) => `- \`${name}\` → class \`animate-${name}\``).join('\n')}

## Controls

| Control | Class pattern | Keys |
|---------|---------------|------|
| Duration | \`animate-duration-{key}\` | ${durations.join(', ')} |
| Delay | \`animate-delay-{key}\` | ${delays.join(', ')} |
| Steps | \`animate-steps-{key}\` | ${steps.join(', ')} |
| Iteration | \`animate-iteration-count-{key}\` | ${iterations.join(', ')} |
| Fill | \`animate-fill-mode-{key}\` | ${fills.join(', ')} |

## Related

- Package install + full docs: ${SITE}/index.md
- Full agent reference: ${SITE}/llms-full.md
- Source: ${REPO}

---
Generated from \`${pkg.name}@${pkg.version}\`
`
}

export function buildLlmsFullMarkdown () {
  return `# tailwind-animations — full agent reference

Package: \`${pkg.name}@${pkg.version}\`  
npm: ${NPM}  
Repo: ${REPO}  
Site: ${SITE}  
License: MIT  
Author: Miguel Ángel Durán (@midudev) & community

## What it is

A **CSS-only** Tailwind CSS **v4** plugin. Import it next to Tailwind; no JS plugin API.

\`\`\`css
@import "tailwindcss";
@import "tailwind-animations";
\`\`\`

Peer dependency: \`"tailwindcss": "4"\` (any 4.x).

## Do / Don't

| Do | Don't |
|----|--------|
| Use \`animate-{name}\` utilities | Expect Tailwind v3 support in latest (use 0.2.0 scoped legacy) |
| Compose with duration/delay/steps | Animate \`width\`/\`height\`/\`top\` for motion |
| Prefer transform + opacity animations | Ship infinite loops without reduced-motion care |
| Use playground for class discovery | Use \`^\`/\`~\` when contributing to this repo |

## Install (consumers)

\`\`\`bash
npm install tailwind-animations
pnpm add tailwind-animations
yarn add tailwind-animations
\`\`\`

## Utility reference

### Entrance / exit / motion (${animations.length} names)

Prefix every name with \`animate-\`.

${animations.map((n) => `- \`${n}\``).join('\n')}

### Timing modifiers

\`\`\`html
<div class="animate-fade-in animate-duration-slow animate-delay-300 animate-iteration-count-twice animate-fill-mode-both">
</div>
\`\`\`

- **duration:** ${durations.join(', ')} (+ arbitrary \`animate-duration-[777ms]\`)
- **delay:** ${delays.join(', ')} (+ arbitrary)
- **steps:** ${steps.join(', ')}
- **iteration:** ${iterations.join(', ')}
- **fill-mode:** ${fills.join(', ')}
- **ease:** \`animate-ease\`, \`animate-ease-in\`, \`animate-ease-out\`, \`animate-ease-in-out\`, \`animate-linear\`
- **bezier:** \`animate-bezier-sine-in\`, \`…-quad-out\`, \`…-back-in-out\`, etc.
- **direction:** \`animate-direction-normal|reverse|alternate|alternate-reverse\`
- **play:** \`animate-play-running\`, \`animate-play-paused\`

### Slide distance

\`\`\`html
<div class="animate-slide-in-left animate-slide-distance-[50%]"></div>
<div class="animate-slide-in-bottom animate-slide-distance-[6rem]"></div>
\`\`\`

CSS variable: \`--tw-anim-slide-distance\` (default \`20px\`).

### Scroll / view timelines

\`\`\`html
<div class="timeline-scroll animate-rotate-360">…</div>
<div class="animate-zoom-in timeline-view animate-range-entry">…</div>
\`\`\`

### Dialog (native \`<dialog>\`)

\`\`\`html
<dialog class="animate-dialog animate-dialog-from-top animate-dialog-duration-fast" id="d">
  …
</dialog>
\`\`\`

Related: \`animate-dialog-fade\`, \`animate-dialog-zoom\`, \`animate-dialog-from-{top,bottom,left,right}\`.

## Website map for agents

| Path | Purpose |
|------|---------|
| \`/\` | Marketing + live demos |
| \`/index.md\` | **This site's home as Markdown** |
| \`/playground/\` | Interactive class composer |
| \`/playground.md\` | Playground as Markdown |
| \`/llms.txt\` | Short LLM summary |
| \`/llms-full.md\` | This full reference |
| \`/robots.txt\` | Crawl rules + sitemap |

## Contributing / repo layout (for coding agents)

Monorepo (pnpm):

- \`src/index.css\` — **plugin source of truth** (publish surface)
- \`web/\` — Astro site
- \`test/\` — Vitest + PostCSS generation tests
- \`packages/scoped/\` — deprecated \`@midudev/tailwind-animations\` shim
- \`scripts/publish-both.mjs\` — publish official + deprecate scoped

Commands:

\`\`\`bash
pnpm install
pnpm test:ci
pnpm --dir web dev
pnpm --dir web build
pnpm sync:scoped
pnpm publish:both   # needs npm auth
\`\`\`

Supply chain (see \`AGENTS.md\`): exact versions only (no \`^\`/\`~\`), keep \`pnpm-lock.yaml\`, no blind upgrades, 7-day release age.

## Performance notes

- Prefer \`transform\`/\`opacity\` animations (most of the catalog).
- \`blurred-fade-in\` uses \`filter: blur()\` — heavier on mobile.
- Infinite utilities (\`pulse\`, \`horizontal-vibration\`, …) keep the compositor busy.
- Dialogs use \`will-change\` while open — avoid hundreds of simultaneous instances.

---
End of agent reference · ${pkg.name}@${pkg.version}
`
}

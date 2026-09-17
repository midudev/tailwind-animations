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
const beziers = Object.keys(theme.animationCubicBezier)
const ranges = Object.keys(theme.animationRange)
const timelines = Object.keys(theme.timeline)

const sharedCacheHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'Cache-Control': 'public, max-age=3600'
}

const mdHeaders = {
  'Content-Type': 'text/markdown; charset=utf-8',
  ...sharedCacheHeaders
}

const txtHeaders = {
  'Content-Type': 'text/plain; charset=utf-8',
  ...sharedCacheHeaders
}

export function markdownResponse (body) {
  return new Response(body, { headers: mdHeaders })
}

export function textResponse (body) {
  return new Response(body, { headers: txtHeaders })
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
| llm.txt | ${SITE}/llm.txt |
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
- \`#scroll-mask\` — fade overflow edges by scroll position (\`scroll-mask-*\`)
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
- Scroll mask: \`scroll-mask\`, \`scroll-mask-y|x|t|b|l|r\`, \`scroll-mask-*-from-*\` (fade edges by scroll; needs \`animation-timeline: scroll()\`)
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

- Prefer markdown/text endpoints (\`/llm.txt\`, \`/index.md\`, \`/playground.md\`, \`/llms-full.md\`) over scraping HTML.
- Source of truth for CSS: \`${REPO}/blob/main/src/index.css\`
- Consumer agent skill (skills.sh): \`npx skills add midudev/tailwind-animations\`
- Skill files: \`skills/tailwind-animations/SKILL.md\`
- Supply-chain rules for contributors: \`AGENTS.md\` (exact dep pins, no \`^\`/\`~\`, keep lockfile)

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

- Package usage for AIs: ${SITE}/llm.txt
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

### Scroll mask (fade overflow edges)

Pure CSS via \`animation-timeline: scroll()\` + \`mask-image\`. Apply on the scroll container.

\`\`\`html
<ul class="scroll-mask-y max-h-64 overflow-y-auto">…</ul>
<div class="scroll-mask-x flex overflow-x-auto">…</div>
<div class="scroll-mask-b-from-80% overflow-y-auto">…</div>
<div class="scroll-mask-r-from-[calc(100%-2rem)] overflow-x-auto">…</div>
\`\`\`

- Axes: \`scroll-mask\`, \`scroll-mask-y\`, \`scroll-mask-x\` (+ \`-from-*\`)
- Edges: \`scroll-mask-t|b|l|r\` (+ \`-from-*\`)
- Default opaque stop: \`80%\`. CSS vars: \`--tw-scroll-mask-*\`
- Requires browser support for \`animation-timeline: scroll()\`

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
| \`/llm.txt\` | How to use the npm package (for AIs) |
| \`/llms.txt\` | Short LLM summary |
| \`/llms-full.md\` | This full reference |
| \`/robots.txt\` | Crawl rules + sitemap |

## Install this package's agent skill

\`\`\`bash
npx skills add midudev/tailwind-animations
\`\`\`

Consumer skill lives at \`skills/tailwind-animations/SKILL.md\` (mirrored under \`.agents/skills/\`).

## Contributing to the monorepo (optional)

If you are contributing to the plugin itself (not using it as a dependency), see \`AGENTS.md\` and \`src/index.css\` in the GitHub repo. The skills.sh skill is for **consumers**, not monorepo maintainers.

## Performance notes

- Prefer \`transform\`/\`opacity\` animations (most of the catalog).
- \`blurred-fade-in\` uses \`filter: blur()\` — heavier on mobile.
- Infinite utilities (\`pulse\`, \`horizontal-vibration\`, …) keep the compositor busy.
- Dialogs use \`will-change\` while open — avoid hundreds of simultaneous instances.

---
End of agent reference · ${pkg.name}@${pkg.version}
`
}

export function buildLlmTxt () {
  return `# tailwind-animations — how to use this package

You are helping a developer add CSS animations with the \`tailwind-animations\` npm package.
This file is the shortest complete usage guide. Do not invent class names that are not listed here.

Package: \`${pkg.name}@${pkg.version}\`
npm: ${NPM}
Site: ${SITE}
Playground: ${SITE}/playground/
Full reference: ${SITE}/llms-full.md
Skill: \`npx skills add midudev/tailwind-animations\`

## What it is

A **CSS-only** plugin for **Tailwind CSS v4**. There is no JavaScript plugin to register.
Import the CSS next to Tailwind. Then use utility classes in HTML.

Peer dependency: \`"tailwindcss": "4"\` (any 4.x).
Tailwind v3: use deprecated \`@midudev/tailwind-animations@0.2.0\` instead.

## Install

\`\`\`bash
npm install tailwind-animations
# pnpm add tailwind-animations
# yarn add tailwind-animations
\`\`\`

\`\`\`css
/* globals.css / app.css */
@import "tailwindcss";
@import "tailwind-animations";
\`\`\`

That is the entire setup. Do not add a \`plugins\` entry in \`tailwind.config\`.

## How to pick a class

1. Choose an animation name from the catalog.
2. Prefix it with \`animate-\` → \`animate-fade-in\`.
3. Optionally add modifiers (\`animate-duration-*\`, \`animate-delay-*\`, …).
4. Preview composition at ${SITE}/playground/

\`\`\`html
<div class="animate-fade-in">Hello</div>

<div class="animate-slide-in-bottom animate-delay-300 animate-duration-slow">
  Delayed entrance
</div>

<div class="animate-slide-in-left animate-slide-distance-[6rem]">
  Custom travel distance
</div>
\`\`\`

## Animation catalog (${animations.length})

Use as \`animate-{name}\`:

${animations.map((name) => `- ${name}`).join('\n')}

## Modifiers

Compose after the animation class. Arbitrary values work: \`animate-duration-[1.2s]\`.

| Goal | Classes |
|------|---------|
| Duration | \`animate-duration-{${durations.join('|')}}\` or \`animate-duration-[777ms]\` |
| Delay | \`animate-delay-{${delays.join('|')}}\` or \`animate-delay-[250ms]\` |
| Steps | \`animate-steps-{${steps.join('|')}}\` |
| Iteration | \`animate-iteration-count-{${iterations.join('|')}}\` |
| Fill mode | \`animate-fill-mode-{${fills.join('|')}}\` |
| Easing | \`animate-ease\`, \`animate-ease-in\`, \`animate-ease-out\`, \`animate-ease-in-out\`, \`animate-linear\` |
| Bezier | \`animate-bezier-{${beziers.join('|')}}\` |
| Direction | \`animate-direction-normal\|reverse\|alternate\|alternate-reverse\` |
| Play state | \`animate-play-running\`, \`animate-play-paused\` |
| Slide distance | \`animate-slide-distance-[50%]\`, \`animate-slide-distance-[6rem]\` (default travel is \`20px\`) |

## Native \`<dialog>\`

\`\`\`html
<button type="button" commandfor="demo" command="show-modal">Open</button>

<dialog
  id="demo"
  class="animate-dialog animate-dialog-from-top animate-dialog-duration-fast m-auto max-w-lg rounded-2xl p-6"
>
  <p>Content</p>
  <button type="button" commandfor="demo" command="request-close">Close</button>
</dialog>
\`\`\`

Also: \`animate-dialog-fade\`, \`animate-dialog-zoom\`, \`animate-dialog-from-bottom|left|right\`, \`animate-dialog-duration-*\`.

## Scroll / view timelines

\`\`\`html
<div class="timeline-scroll animate-rotate-360">Rotates while scrolling</div>
<div class="animate-zoom-in timeline-view animate-range-entry">Plays as it enters the viewport</div>
\`\`\`

- Timeline keys (\`timeline-{key}\`): ${timelines.join(', ')}
- Range keys (\`animate-range-{key}\`): ${ranges.join(', ')}

Needs browser support for CSS scroll/view timelines.

## Scroll mask (fade overflow edges)

Apply on the **scroll container** (needs overflow). Pure CSS via \`animation-timeline: scroll()\`.

\`\`\`html
<ul class="scroll-mask-y max-h-64 overflow-y-auto">…</ul>
<div class="scroll-mask-x flex overflow-x-auto">…</div>
<div class="scroll-mask-b-from-80% overflow-y-auto">…</div>
<div class="scroll-mask-r-from-[calc(100%-2rem)] overflow-x-auto">…</div>
\`\`\`

- All edges: \`scroll-mask\`, \`scroll-mask-from-*\`
- Axis: \`scroll-mask-y\`, \`scroll-mask-x\` (+ \`-from-*\`)
- One edge: \`scroll-mask-t|b|l|r\` (+ \`-from-*\`)
- Default opaque stop: \`80%\`

## Recipes

Staggered list:

\`\`\`html
<li class="animate-fade-in-up animate-delay-100">…</li>
<li class="animate-fade-in-up animate-delay-200">…</li>
<li class="animate-fade-in-up animate-delay-300">…</li>
\`\`\`

Attention once:

\`\`\`html
<span class="animate-tada animate-iteration-count-once">Saved!</span>
\`\`\`

Modal:

\`\`\`html
<dialog class="animate-dialog animate-dialog-zoom animate-dialog-duration-normal">…</dialog>
\`\`\`

Scrollable panel with edge fade:

\`\`\`html
<div class="scroll-mask-y max-h-80 overflow-y-auto rounded-xl border p-4">…</div>
\`\`\`

## Do / Don't

Do:
- Use names from the catalog above.
- Prefer transform + opacity animations (most of the list).
- Respect \`prefers-reduced-motion\` in the host app.
- Use the playground when unsure: ${SITE}/playground/?a=jelly&d=700&p=card

Don't:
- Register a JS Tailwind plugin (none exists in v1).
- Use this package with Tailwind v3 (use \`@midudev/tailwind-animations@0.2.0\`).
- Invent \`animate-*\` names that are not in the catalog.
- Animate \`width\`, \`height\`, or \`top\` when a transform utility exists.
- Ship infinite loops (\`pulse\`, \`horizontal-vibration\`, …) without reduced-motion care.
- Use \`blurred-fade-in\` heavily on mobile (\`filter: blur\`).

## More docs (prefer these over HTML)

- This guide: ${SITE}/llm.txt
- Short index: ${SITE}/llms.txt
- Home (Markdown): ${SITE}/index.md
- Playground (Markdown): ${SITE}/playground.md
- Full catalog: ${SITE}/llms-full.md
- Source of truth: ${REPO}/blob/main/src/index.css

---
Generated from \`${pkg.name}@${pkg.version}\` · ${SITE}
`
}

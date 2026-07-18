---
name: tailwind-animations
description: >
  Use the tailwind-animations npm package (CSS-only Tailwind CSS v4 plugin) to add
  ready-made animation utilities: fade, slide, zoom, flip, bounce, jelly, dialog
  entry/exit, scroll/view timelines, duration/delay/steps/iteration/fill-mode, and
  animate-slide-distance. Use when the user wants CSS animations with Tailwind,
  animate-* classes, motion utilities, dialog animations, scroll-driven CSS motion,
  or to install/configure tailwind-animations. Triggers: "tailwind animations",
  "animate-fade-in", "animate-dialog", "slide-distance", "tailwind motion plugin",
  /tailwind-animations.
license: MIT
compatibility: Requires Tailwind CSS v4 in the consumer project
metadata:
  author: midudev
  version: "1.0.2"
  organization: midudev
  category: css
  tags: tailwindcss, animations, css, motion, utilities, dialog, scroll-timeline
  homepage: https://tailwind-animations.com
  playground: https://tailwind-animations.com/playground/
  repository: https://github.com/midudev/tailwind-animations
  npm: https://www.npmjs.com/package/tailwind-animations
  docs_markdown: https://tailwind-animations.com/llms-full.md
  install: npx skills add midudev/tailwind-animations
---

# tailwind-animations (consumer skill)

Help the user **use** the [`tailwind-animations`](https://www.npmjs.com/package/tailwind-animations) package in **their** app. This skill is **not** for contributing to the plugin monorepo.

**Package:** CSS-only utilities for **Tailwind CSS v4** (peer: any `tailwindcss@4`).  
**Site / demos:** https://tailwind-animations.com  
**Playground (compose + share URL):** https://tailwind-animations.com/playground/  
**Agent docs (prefer Markdown):** https://tailwind-animations.com/llms-full.md

## When to apply

- Adding entrance/exit/attention animations with Tailwind classes
- Configuring `tailwind-animations` after `npm install`
- Animating native `<dialog>` open/close
- Scroll- or view-driven CSS animations
- Customizing slide distance, duration, delay, steps, iteration, fill mode

## Install in the consumer project

```bash
npm install tailwind-animations
# pnpm add tailwind-animations
# yarn add tailwind-animations
```

```css
/* globals.css / app.css — Tailwind v4 */
@import "tailwindcss";
@import "tailwind-animations";
```

**Requirements:** Tailwind CSS **v4**.  
**Legacy Tailwind v3:** `@midudev/tailwind-animations@0.2.0` (deprecated; different API).

Do **not** register a JS plugin. The package is pure CSS.

## Core usage

Prefix animation names with `animate-`:

```html
<div class="animate-fade-in">Hello</div>

<div class="animate-slide-in-bottom animate-delay-300 animate-duration-slow">
  Slow delayed entrance
</div>

<div class="animate-slide-in-left animate-slide-distance-[6rem]">
  Custom travel distance
</div>
```

### Compose modifiers

| Goal | Classes |
|------|---------|
| Duration | `animate-duration-faster\|fast\|normal\|slow\|slower` or `animate-duration-100`…`1000` or `animate-duration-[777ms]` |
| Delay | `animate-delay-0`…`1000`, `none`, or arbitrary |
| Steps (retro feel) | `animate-steps-none\|retro\|normal\|modern` |
| Iteration | `animate-iteration-count-once\|twice\|thrice\|infinite\|none` |
| Fill mode | `animate-fill-mode-none\|forwards\|backwards\|both` |
| Easing | `animate-ease`, `animate-ease-in`, `animate-ease-out`, `animate-ease-in-out`, `animate-linear` |
| Bezier presets | `animate-bezier-sine-in`, `animate-bezier-quad-out`, `animate-bezier-back-in-out`, … |
| Direction | `animate-direction-normal\|reverse\|alternate\|alternate-reverse` |
| Play state | `animate-play-running`, `animate-play-paused` |
| Slide distance | `animate-slide-distance-[50%]`, `animate-slide-distance-[6rem]` (default travel is `20px`) |

### Dialog (native `<dialog>`)

```html
<button type="button" commandfor="demo" command="show-modal">Open</button>

<dialog
  id="demo"
  class="animate-dialog animate-dialog-from-top animate-dialog-duration-fast m-auto max-w-lg rounded-2xl p-6"
>
  <p>Content</p>
  <button type="button" commandfor="demo" command="request-close">Close</button>
</dialog>
```

Also: `animate-dialog-fade`, `animate-dialog-zoom`, `animate-dialog-from-bottom|left|right`, `animate-dialog-duration-*`.

### Scroll / view timelines

```html
<div class="timeline-scroll animate-rotate-360">Rotates while scrolling</div>

<div class="animate-zoom-in timeline-view animate-range-entry">
  Plays as it enters the viewport
</div>
```

## Animation catalog (79)

Use as `animate-{name}`:

`blink`, `blurred-fade-in`, `bounce-fade-in`, `bouncing`, `contract-horizontally`, `contract-vertically`, `dancing`, `expand-horizontally`, `expand-vertically`, `fade-in`, `fade-in-down`, `fade-in-left`, `fade-in-right`, `fade-in-up`, `fade-out`, `fade-out-down`, `fade-out-left`, `fade-out-right`, `fade-out-up`, `flash`, `flip-horizontal`, `flip-in-x`, `flip-in-y`, `flip-out-x`, `flip-out-y`, `flip-vertical`, `flip-x`, `flip-y`, `float`, `hang`, `heartbeat`, `horizontal-bounce`, `horizontal-vibration`, `impulse-rotation-left`, `impulse-rotation-right`, `jelly`, `jiggle`, `jump`, `pop`, `pulse`, `pulse-fade-in`, `pulsing`, `roll-in`, `roll-out`, `rotate-180`, `rotate-360`, `rotate-90`, `rotate-in`, `rotate-out`, `rotational-wave`, `rubber-band`, `scale`, `shake`, `sink`, `skew`, `skew-right`, `slide-in-bottom`, `slide-in-left`, `slide-in-right`, `slide-in-top`, `slide-out-bottom`, `slide-out-left`, `slide-out-right`, `slide-out-top`, `slide-rotate-in`, `slide-rotate-out`, `slide-up-fade`, `spin-clockwise`, `spin-counter-clockwise`, `squeeze`, `sway`, `swing`, `swing-drop-in`, `tada`, `tilt`, `vertical-bounce`, `wobble`, `zoom-in`, `zoom-out`

## Playground (for discovery)

https://tailwind-animations.com/playground/

Shareable query params: `a` (animation), `d` (duration), `delay`, `s` (steps), `i` (iteration), `f` (fill), `p` (preset: `box|button|card|text`).

Example:  
`https://tailwind-animations.com/playground/?a=jelly&d=700&delay=100&i=infinite&p=card`

## Agent reading of the docs site

Prefer Markdown over scraping HTML:

- https://tailwind-animations.com/index.md  
- https://tailwind-animations.com/playground.md  
- https://tailwind-animations.com/llms-full.md  
- https://tailwind-animations.com/llms.txt  

## Best practices

1. Prefer **transform + opacity** animations (most of the catalog).
2. Treat `blurred-fade-in` (`filter: blur`) as heavier on mobile.
3. Infinite loops (`pulse`, `horizontal-vibration`, `rotational-wave`, …) keep motion running—use sparingly; respect `prefers-reduced-motion` in the host app.
4. Do not animate layout properties (`width`, `height`, `top`) when a transform utility exists.
5. Arbitrary values work with Tailwind: `animate-duration-[1.2s]`, `animate-slide-distance-[10rem]`.

## Anti-patterns

- Installing a JS Tailwind plugin for this package (none exists in v1).
- Using latest package with Tailwind v3 (use `@midudev/tailwind-animations@0.2.0` instead).
- Inventing class names not in the catalog without checking docs/playground.
- Confusing this skill with monorepo contributor workflows (out of scope).

## Quick recipes

**Staggered list entrance**

```html
<li class="animate-fade-in-up animate-delay-100">…</li>
<li class="animate-fade-in-up animate-delay-200">…</li>
<li class="animate-fade-in-up animate-delay-300">…</li>
```

**Attention once**

```html
<span class="animate-tada animate-iteration-count-once">Saved!</span>
```

**Modal**

```html
<dialog class="animate-dialog animate-dialog-zoom animate-dialog-duration-normal">…</dialog>
```

# AGENTS

## Skills (skills.sh)

The **`tailwind-animations` skill is for package consumers** (people using the npm package in their apps), not for contributing to this monorepo.

- Paths (identical copies for discovery):
  - `skills/tailwind-animations/SKILL.md`
  - `.agents/skills/tailwind-animations/SKILL.md`
- Install elsewhere: `npx skills add midudev/tailwind-animations`
- Badge: https://skills.sh/midudev/tailwind-animations

When **working inside this monorepo**, follow this `AGENTS.md`, `CHANGELOG.md`, and the codebase (especially `src/index.css`). Do not treat the consumer skill as contributor docs.

Public site agent docs (prefer Markdown over HTML):

- https://tailwind-animations.com/index.md
- https://tailwind-animations.com/playground.md
- https://tailwind-animations.com/llms-full.md

<!-- fendo:start -->
## Supply Chain Security

This project has been hardened against supply chain attacks using [fendo](https://github.com/midudev/fendo).

### Rules for AI assistants and contributors

- **Never use `^` or `~`** in dependency version specifiers. Always pin exact versions.
- **Always commit the lockfile** (`pnpm-lock.yaml`). Never delete it or add it to `.gitignore`.
- **Install scripts are disabled**. If a new dependency requires a build step, it must be explicitly approved.
- **New package versions must be at least 7 days old** before they can be installed (release age gating is enabled).
- When adding a dependency, verify it on [npmjs.com](https://www.npmjs.com) before installing.
- Prefer well-maintained packages with verified publishers and provenance.
- Run `pnpm install` with the lockfile present — never bypass it.
- Do not add git-based or tarball URL dependencies unless explicitly approved.
- **Do not run `npm update`**, `npx npm-check-updates`, or any blind upgrade command. Review each update individually.
- **Use deterministic installs**: prefer `pnpm install --frozen-lockfile` over `pnpm install` in CI and scripts.
- **Do not store secrets in plain text** in `.env` files committed to version control.
<!-- fendo:end -->

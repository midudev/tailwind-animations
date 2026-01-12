import { execFileSync } from 'node:child_process'

const run = (cmd, args) => execFileSync(cmd, args, { stdio: 'inherit' })

// 1) keep versions aligned
run('node', ['./scripts/sync-scoped-package.mjs'])

// 2) publish official package (unscoped)
run('pnpm', ['publish', '--access', 'public', '--no-git-checks'])

// 3) publish deprecated scoped shim
run('pnpm', ['--dir', './packages/scoped', 'publish', '--access', 'public', '--no-git-checks'])

// 4) mark the scoped shim as deprecated for this version
run('node', ['./scripts/deprecate-scoped.mjs'])

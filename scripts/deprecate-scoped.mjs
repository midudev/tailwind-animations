import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const repoRoot = path.resolve(new URL('..', import.meta.url).pathname)
const rootPkg = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'))

const version = rootPkg.version
if (!version) throw new Error('Root package.json is missing "version"')

const spec = `@midudev/tailwind-animations@${version}`
const message = 'Deprecated: use tailwind-animations instead.'

execFileSync('npm', ['deprecate', spec, message], { stdio: 'inherit' })

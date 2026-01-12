import fs from 'node:fs/promises'
import path from 'node:path'

const repoRoot = path.resolve(new URL('..', import.meta.url).pathname)

const rootPackagePath = path.join(repoRoot, 'package.json')
const scopedPackagePath = path.join(repoRoot, 'packages', 'scoped', 'package.json')

const [rootPkgRaw, scopedPkgRaw] = await Promise.all([
  fs.readFile(rootPackagePath, 'utf8'),
  fs.readFile(scopedPackagePath, 'utf8')
])

const rootPkg = JSON.parse(rootPkgRaw)
const scopedPkg = JSON.parse(scopedPkgRaw)

if (!rootPkg?.version) throw new Error('Root package.json is missing "version"')

scopedPkg.version = rootPkg.version
scopedPkg.dependencies ||= {}
scopedPkg.dependencies['tailwind-animations'] = rootPkg.version

await fs.writeFile(scopedPackagePath, JSON.stringify(scopedPkg, null, 2) + '\n', 'utf8')

console.log(`Synced @midudev/tailwind-animations to version ${rootPkg.version}`)

/**
 * Guard against the crash we shipped on 09.10.26: a field referencing a field
 * group that no longer exists takes the WHOLE studio down with
 * "Field group 'x' is not defined in schema for type 'y'".
 *
 * `sanity schema validate` does not catch it, so this runs as a pretest /
 * predeploy step:  node scripts/check-field-groups.mjs
 */
import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'schemaTypes')
let failures = 0

for (const file of readdirSync(dir).filter((f) => f.endsWith('.js') && f !== 'index.js')) {
  const src = readFileSync(join(dir, file), 'utf8')

  const groupsBlock = src.match(/groups:\s*\[[\s\S]*?\n\s*\],/)
  const defined = new Set([...(groupsBlock?.[0].matchAll(/name:\s*'([^']+)'/g) || [])].map((m) => m[1]))
  if (!defined.size) continue

  // group: 'x'  — and helper calls that pass a group as the last argument
  const used = new Map()
  for (const m of src.matchAll(/group:\s*'([^']+)'/g)) used.set(m[1], (used.get(m[1]) || 0) + 1)
  // helpers are (name, title) or (name, title, group) — only a third argument is a group
  for (const m of src.matchAll(/\b(?:headline|cta)\(\s*'[^']*'\s*,\s*'[^']*'\s*,\s*'([^']+)'\s*\)/g)) {
    used.set(m[1], (used.get(m[1]) || 0) + 1)
  }

  for (const [name, count] of used) {
    if (!defined.has(name)) {
      console.error(`✖ ${file}: field group '${name}' is used ${count}× but never defined`)
      failures++
    }
  }
}

if (failures) {
  console.error(`\n${failures} undefined field group reference(s). The studio would crash on every document.`)
  process.exit(1)
}
console.log('✓ every field group reference resolves')

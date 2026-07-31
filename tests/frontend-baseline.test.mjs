import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')

test('approved independent routes and authentic brand assets exist', () => {
  const routeFiles = [
    'app/page.tsx',
    'app/products/page.tsx',
    'app/products/[id]/page.tsx',
    'app/oem-odm/page.tsx',
    'app/manufacturing/page.tsx',
    'app/quality/page.tsx',
    'app/about/page.tsx',
    'app/faq/page.tsx',
    'app/contact/page.tsx',
  ]

  for (const relativePath of routeFiles) {
    assert.ok(fs.existsSync(path.join(root, relativePath)), `missing ${relativePath}`)
  }

  assert.ok(fs.existsSync(path.join(root, 'public/logo.png')))
  const layout = fs.readFileSync(path.join(root, 'app/layout.tsx'), 'utf8')
  assert.match(layout, /icon:\s*['"]\/logo\.png['"]/)
})

test('frontend does not contain credentials or unsupported customer claims', () => {
  const sourceRoots = ['app', 'components', 'lib']
  const files = sourceRoots.flatMap((directory) => walk(path.join(root, directory)))
  const source = files.filter((file) => /\.(?:ts|tsx|js|mjs)$/.test(file)).map((file) => fs.readFileSync(file, 'utf8')).join('\n')

  for (const prohibited of [
    'SUPABASE_SERVICE_ROLE_KEY=',
    '20 years',
    '100,000',
    'ISO 9001',
    'ISO 14001',
    'ISO 45001',
    'info@wild-north-goose',
  ]) {
    assert.equal(source.includes(prohibited), false, `prohibited source text: ${prohibited}`)
  }
})

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(absolutePath) : absolutePath
  })
}

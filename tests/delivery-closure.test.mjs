import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')

test('contact page uses confirmed public details and hides unavailable channels', () => {
  const contact = read('app/contact/page.tsx')

  assert.match(contact, /info@wildnorthgooseoutdoor\.com/)
  assert.match(contact, /No\. 98 Tonggang Road, Building 1/)
  assert.doesNotMatch(contact, /Contact details to be provided/)
  assert.doesNotMatch(contact, /Phone \/ WhatsApp/)
})

test('inquiry success remains visible without an automatic reset timer', () => {
  const contact = read('app/contact/page.tsx')

  assert.doesNotMatch(contact, /window\.setTimeout/)
})

test('fallback catalog contains no coming-soon or placeholder product content', () => {
  const products = read('lib/products.ts')
  const database = read('lib/products-db.ts')

  assert.doesNotMatch(products, /Coming soon/i)
  assert.doesNotMatch(database, /['"]\/placeholder\.jpg['"]/)
})

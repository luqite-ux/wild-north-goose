import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8')
const homepageProducts = readFileSync(new URL('../lib/homepage-products.ts', import.meta.url), 'utf8')

test('homepage merges category navigation into the featured collection', () => {
  assert.doesNotMatch(page, />Product Categories</)
  for (const category of ['All', 'Fleece Jackets', 'Outdoor Pants', 'Cargo Shorts', 'Knitwear']) {
    assert.match(homepageProducts, new RegExp(`'${category}'`))
  }
  assert.match(page, /CATEGORY_FILTERS\.map/)
  assert.match(page, /filteredProducts\.map/)
})

test('homepage adds an eight-product featured outdoor collection', () => {
  assert.match(page, /Featured Outdoor Collection/)
  assert.equal((homepageProducts.match(/slug:/g) ?? []).length, 8)
  assert.match(page, /filteredProducts\.map/)
  assert.match(page, /View All Products/)
})

test('homepage uses a dedicated text-free quality inspection asset', () => {
  assert.match(page, /\/images\/quality-inspection\.png/)
})

test('homepage motion honors reduced-motion preferences', () => {
  const css = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8')
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
  assert.match(css, /outdoor-reveal/)
})

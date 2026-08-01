import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8')
const homepageProducts = readFileSync(new URL('../lib/homepage-products.ts', import.meta.url), 'utf8')

test('homepage exposes all four real product categories', () => {
  for (const category of ['Fleece Jackets', 'Outdoor Pants', 'Cargo Shorts', 'Knitwear']) {
    assert.match(homepageProducts, new RegExp(category))
  }
  assert.match(page, /lg:grid-cols-4/)
})

test('homepage adds an eight-product featured outdoor collection', () => {
  assert.match(page, /Featured Outdoor Collection/)
  assert.match(page, /FEATURED_PRODUCTS\.map/)
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

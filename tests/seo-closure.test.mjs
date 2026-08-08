import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')

test('site URL defaults to the confirmed formal domain', () => {
  assert.match(read('lib/site-url.ts'), /https:\/\/wildnorthgooseoutdoor\.com/)
})

test('every static public route declares its own canonical path', () => {
  const routes = new Map([
    ['app/layout.tsx', '/'],
    ['app/products/page.tsx', '/products'],
    ['app/news/page.tsx', '/news'],
    ['app/oem-odm/page.tsx', '/oem-odm'],
    ['app/manufacturing/page.tsx', '/manufacturing'],
    ['app/quality/page.tsx', '/quality'],
    ['app/about/page.tsx', '/about'],
    ['app/faq/layout.tsx', '/faq'],
    ['app/contact/layout.tsx', '/contact'],
  ])
  for (const [file, route] of routes) {
    assert.ok(fs.existsSync(path.join(root, file)), `missing ${file}`)
    assert.match(read(file), new RegExp(`canonical:[^\\n]*['\"]${route.replace('/', '\\/')}['\"]`), `${file} missing ${route} canonical`)
  }
})

test('product and news details render their specific schema types and breadcrumbs', () => {
  const product = read('app/products/[id]/page.tsx')
  const article = read('app/news/[slug]/page.tsx')
  assert.match(product, /'@type': 'Product'/)
  assert.match(product, /'@type': 'BreadcrumbList'/)
  assert.match(article, /'@type': 'NewsArticle'/)
  assert.match(article, /'@type': 'BreadcrumbList'/)
})

test('sitemap uses database update timestamps for products', () => {
  const sitemap = read('app/sitemap.ts')
  assert.match(sitemap, /product\.updatedAt/)
  assert.doesNotMatch(sitemap, /products\.map\([^\n]+lastModified: new Date\(\)/)
})

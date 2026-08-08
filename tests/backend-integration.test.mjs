import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')

test('product and article routes use server data with ISR', () => {
  assert.match(read('app/products/page.tsx'), /export const revalidate = 60/)
  assert.match(read('app/products/page.tsx'), /await fetchProductsData\(['"]en['"]\)/)
  const productDetail = read('app/products/[id]/page.tsx')
  assert.match(productDetail, /export const dynamicParams = true/)
  assert.match(productDetail, /await getProductBySlug\(id, ['"]en['"]\)/)
  assert.match(read('app/news/page.tsx'), /await getPublishedArticles\(['"]en['"]\)/)
  assert.match(read('app/news/[slug]/page.tsx'), /await getArticleBySlug/)
})

test('Supabase configuration is environment-only and products retain fallback', () => {
  const supabase = read('lib/supabase.ts')
  assert.match(supabase, /NEXT_PUBLIC_SUPABASE_URL/)
  assert.match(supabase, /NEXT_PUBLIC_SUPABASE_ANON_KEY/)
  assert.match(supabase, /NEXT_PUBLIC_TENANT_ID/)
  assert.equal(/https:\/\/[^'"\s]+\.supabase\.co/.test(supabase), false)
  assert.match(read('lib/products-db.ts'), /fallbackProducts/)
  assert.equal(read('lib/articles-db.ts').includes('fallback'), false)
})

test('contact form performs a real tenant-scoped inquiry insert', () => {
  const contact = read('app/contact/page.tsx')
  assert.match(contact, /from\('inquiries'\)\.insert/)
  assert.match(contact, /tenant_id: tenantId/)
  assert.match(contact, /disabled=\{status === 'submitting'\}/)
  assert.equal(contact.includes('setTimeout(resolve'), false)
  assert.equal(contact.includes("console.log('[v0]"), false)
})

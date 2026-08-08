import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import ts from 'typescript'

const root = path.resolve(import.meta.dirname, '..')
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')

test('localized values follow requested, default, first non-empty, and legacy order', async () => {
  const relativePath = 'lib/i18n.ts'
  assert.ok(fs.existsSync(path.join(root, relativePath)), 'missing lib/i18n.ts')

  const source = read(relativePath)
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
  }).outputText
  const module = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)

  assert.equal(module.pickLocalizedValue({ en: 'English', fr: 'Français' }, 'fr', 'en', 'Legacy'), 'Français')
  assert.equal(module.pickLocalizedValue({ en: 'English', fr: '' }, 'fr', 'en', 'Legacy'), 'English')
  assert.equal(module.pickLocalizedValue({ de: 'Deutsch' }, 'fr', 'en', 'Legacy'), 'Deutsch')
  assert.equal(module.pickLocalizedValue({}, 'fr', 'en', 'Legacy'), 'Legacy')
  assert.deepEqual(module.pickLocalizedArray({ en: ['One'], fr: ['Un'] }, 'fr', 'en', ['Legacy']), ['Un'])
})

test('product and article queries select multilingual JSONB fields', () => {
  const products = read('lib/products-db.ts')
  const articles = read('lib/articles-db.ts')

  for (const field of ['name_i18n', 'description_i18n', 'overview_i18n', 'features_i18n', 'applications_i18n', 'advantages_i18n']) {
    assert.match(products, new RegExp(field))
  }
  for (const field of ['title_i18n', 'excerpt_i18n', 'content_i18n']) {
    assert.match(articles, new RegExp(field))
  }
})

test('public data functions accept a locale and routes request English explicitly', () => {
  const products = read('lib/products-db.ts')
  const articles = read('lib/articles-db.ts')
  assert.match(products, /fetchProductsData\(locale\s*=\s*['"]en['"]\)/)
  assert.match(products, /getProductBySlug\(slug:\s*string,\s*locale\s*=\s*['"]en['"]\)/)
  assert.match(articles, /getPublishedArticles\(locale\s*=\s*['"]en['"]\)/)
  assert.match(articles, /getArticleBySlug\(slug:\s*string,\s*locale\s*=\s*['"]en['"]\)/)

  for (const route of ['app/products/page.tsx', 'app/products/[id]/page.tsx', 'app/news/page.tsx', 'app/news/[slug]/page.tsx', 'app/sitemap.ts']) {
    assert.match(read(route), /['"]en['"]/, `${route} must request the launch locale explicitly`)
  }
})

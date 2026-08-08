import { categories as fallbackCategories, products as fallbackProducts, type Product } from '@/lib/products'
import { getSupabaseClient, getTenantId } from '@/lib/supabase'
import { pickLocalizedArray, pickLocalizedValue } from '@/lib/i18n'

type ProductRow = {
  slug: string | null
  model: string | null
  name: string
  name_en: string | null
  description: string | null
  description_en: string | null
  image_url: string | null
  category_slug: string | null
  features: unknown
  applications: unknown
  specs: unknown
  extra_data: unknown
  updated_at: string | null
  name_i18n: Record<string, string> | null
  description_i18n: Record<string, string> | null
  overview_i18n: Record<string, string> | null
  features_i18n: Record<string, string[]> | null
  applications_i18n: Record<string, string[]> | null
  advantages_i18n: Record<string, string[]> | null
}

export async function fetchProductsData(locale = 'en'): Promise<{ products: Product[]; categories: typeof fallbackCategories }> {
  const client = getSupabaseClient()
  const tenantId = getTenantId()
  if (!client || !tenantId) return { products: fallbackProducts, categories: fallbackCategories }

  const { data, error } = await client.from('products')
    .select('slug,model,name,name_en,description,description_en,image_url,category_slug,features,applications,specs,extra_data,updated_at,name_i18n,description_i18n,overview_i18n,features_i18n,applications_i18n,advantages_i18n')
    .eq('tenant_id', tenantId)
    .eq('is_active', true)
    .order('sort_order')

  if (error || !data?.length) return { products: fallbackProducts, categories: fallbackCategories }
  const products = (data as ProductRow[]).map((row) => mapProduct(row, locale, 'en')).filter((product): product is Product => product !== null)
  return products.length ? { products, categories: fallbackCategories } : { products: fallbackProducts, categories: fallbackCategories }
}

export async function getProductBySlug(slug: string, locale = 'en'): Promise<Product | undefined> {
  const { products } = await fetchProductsData(locale)
  return products.find((product) => product.id === slug)
}

function mapProduct(row: ProductRow, locale: string, defaultLocale: string): Product | null {
  const extra = objectValue(row.extra_data)
  const specs = objectValue(row.specs)
  const extraImages = stringArray(extra.images)
  const image = row.image_url || extraImages[0]
  if (!image) return null
  return {
    id: row.slug || row.model || row.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    sku: stringValue(extra.sku) || row.model || '',
    name: pickLocalizedValue(row.name_i18n, locale, defaultLocale, row.name_en || row.name),
    category: categoryValue(row.category_slug),
    description: pickLocalizedValue(row.description_i18n, locale, defaultLocale, row.description_en || row.description || ''),
    features: pickLocalizedArray(row.features_i18n, locale, defaultLocale, stringArray(row.features)),
    applications: pickLocalizedArray(row.applications_i18n, locale, defaultLocale, stringArray(row.applications)),
    colors: stringArray(extra.colors).length ? stringArray(extra.colors) : splitSpec(specs.Colors),
    sizes: stringArray(extra.sizes).length ? stringArray(extra.sizes) : splitSpec(specs.Sizes),
    image,
    images: extraImages.length ? extraImages : [image],
    updatedAt: row.updated_at,
  }
}

function categoryValue(value: string | null): Product['category'] {
  return value === 'fleece-jackets' || value === 'cargo-shorts' || value === 'knitwear' ? value : 'outdoor-pants'
}

function objectValue(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {}
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

function splitSpec(value: unknown): string[] {
  return typeof value === 'string' ? value.split(',').map((item) => item.trim()).filter(Boolean) : []
}

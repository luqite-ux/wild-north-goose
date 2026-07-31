import { categories as fallbackCategories, products as fallbackProducts, type Product } from '@/lib/products'
import { getSupabaseClient, getTenantId } from '@/lib/supabase'

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
}

export async function fetchProductsData(): Promise<{ products: Product[]; categories: typeof fallbackCategories }> {
  const client = getSupabaseClient()
  const tenantId = getTenantId()
  if (!client || !tenantId) return { products: fallbackProducts, categories: fallbackCategories }

  const { data, error } = await client.from('products')
    .select('slug,model,name,name_en,description,description_en,image_url,category_slug,features,applications,specs,extra_data')
    .eq('tenant_id', tenantId)
    .eq('is_active', true)
    .order('sort_order')

  if (error || !data?.length) return { products: fallbackProducts, categories: fallbackCategories }
  return { products: (data as ProductRow[]).map(mapProduct), categories: fallbackCategories }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const { products } = await fetchProductsData()
  return products.find((product) => product.id === slug)
}

function mapProduct(row: ProductRow): Product {
  const extra = objectValue(row.extra_data)
  const specs = objectValue(row.specs)
  const image = row.image_url || '/placeholder.jpg'
  return {
    id: row.slug || row.model || row.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    sku: stringValue(extra.sku) || row.model || '',
    name: row.name_en || row.name,
    category: categoryValue(row.category_slug),
    description: row.description_en || row.description || '',
    features: stringArray(row.features),
    applications: stringArray(row.applications),
    colors: stringArray(extra.colors).length ? stringArray(extra.colors) : splitSpec(specs.Colors),
    sizes: stringArray(extra.sizes).length ? stringArray(extra.sizes) : splitSpec(specs.Sizes),
    image,
    images: stringArray(extra.images).length ? stringArray(extra.images) : [image],
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

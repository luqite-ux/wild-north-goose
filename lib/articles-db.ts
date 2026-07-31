import { getSupabaseClient, getTenantId } from '@/lib/supabase'

export type Article = {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string | null
  publishedAt: string | null
  updatedAt: string | null
}

const fields = 'slug,title,title_en,excerpt,excerpt_en,content,content_en,featured_image,published_at,updated_at'

export async function getPublishedArticles(): Promise<Article[]> {
  const client = getSupabaseClient()
  const tenantId = getTenantId()
  if (!client || !tenantId) return []
  const { data, error } = await client.from('articles').select(fields)
    .eq('tenant_id', tenantId).eq('is_published', true).order('published_at', { ascending: false })
  if (error || !data) return []
  return data.map(mapArticle)
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const client = getSupabaseClient()
  const tenantId = getTenantId()
  if (!client || !tenantId) return null
  const { data, error } = await client.from('articles').select(fields)
    .eq('tenant_id', tenantId).eq('slug', slug).eq('is_published', true).maybeSingle()
  return error || !data ? null : mapArticle(data)
}

function mapArticle(row: Record<string, unknown>): Article {
  return {
    slug: String(row.slug || ''),
    title: String(row.title_en || row.title || ''),
    excerpt: String(row.excerpt_en || row.excerpt || ''),
    content: String(row.content_en || row.content || ''),
    image: row.featured_image ? String(row.featured_image) : null,
    publishedAt: row.published_at ? String(row.published_at) : null,
    updatedAt: row.updated_at ? String(row.updated_at) : null,
  }
}

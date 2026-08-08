import { getSupabaseClient, getTenantId } from '@/lib/supabase'
import { pickLocalizedValue } from '@/lib/i18n'

export type Article = {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string | null
  publishedAt: string | null
  updatedAt: string | null
}

const fields = 'slug,title,title_en,excerpt,excerpt_en,content,content_en,featured_image,published_at,updated_at,title_i18n,excerpt_i18n,content_i18n'

export async function getPublishedArticles(locale = 'en'): Promise<Article[]> {
  const client = getSupabaseClient()
  const tenantId = getTenantId()
  if (!client || !tenantId) return []
  const { data, error } = await client.from('articles').select(fields)
    .eq('tenant_id', tenantId).eq('is_published', true).order('published_at', { ascending: false })
  if (error || !data) return []
  return data.map((row) => mapArticle(row, locale, 'en'))
}

export async function getArticleBySlug(slug: string, locale = 'en'): Promise<Article | null> {
  const client = getSupabaseClient()
  const tenantId = getTenantId()
  if (!client || !tenantId) return null
  const { data, error } = await client.from('articles').select(fields)
    .eq('tenant_id', tenantId).eq('slug', slug).eq('is_published', true).maybeSingle()
  return error || !data ? null : mapArticle(data, locale, 'en')
}

function mapArticle(row: Record<string, unknown>, locale: string, defaultLocale: string): Article {
  return {
    slug: String(row.slug || ''),
    title: pickLocalizedValue(row.title_i18n as Record<string, string> | null, locale, defaultLocale, String(row.title_en || row.title || '')),
    excerpt: pickLocalizedValue(row.excerpt_i18n as Record<string, string> | null, locale, defaultLocale, String(row.excerpt_en || row.excerpt || '')),
    content: pickLocalizedValue(row.content_i18n as Record<string, string> | null, locale, defaultLocale, String(row.content_en || row.content || '')),
    image: row.featured_image ? String(row.featured_image) : null,
    publishedAt: row.published_at ? String(row.published_at) : null,
    updatedAt: row.updated_at ? String(row.updated_at) : null,
  }
}

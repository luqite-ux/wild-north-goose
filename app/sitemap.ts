import type { MetadataRoute } from 'next'
import { getPublishedArticles } from '@/lib/articles-db'
import { fetchProductsData } from '@/lib/products-db'
import { getSiteUrl } from '@/lib/site-url'

export const revalidate = 60

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl()
  const staticRoutes = ['', '/products', '/news', '/oem-odm', '/manufacturing', '/quality', '/about', '/faq', '/contact']
  const [{ products }, articles] = await Promise.all([fetchProductsData('en'), getPublishedArticles('en')])
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() })),
    ...products.map((product) => ({ url: `${siteUrl}/products/${product.id}`, lastModified: new Date(product.updatedAt || Date.now()) })),
    ...articles.map((article) => ({ url: `${siteUrl}/news/${article.slug}`, lastModified: new Date(article.updatedAt || article.publishedAt || Date.now()) })),
  ]
}

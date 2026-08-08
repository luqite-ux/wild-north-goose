import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { getArticleBySlug } from '@/lib/articles-db'
import { NewsArticleClient } from './news-article-client'
import { getSiteUrl } from '@/lib/site-url'

export const revalidate = 60
export const dynamicParams = true

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = await getArticleBySlug((await params).slug, 'en')
  return article ? {
    title: `${article.title} | Wild North Goose`, description: article.excerpt,
    alternates: { canonical: `${getSiteUrl()}/news/${article.slug}` },
    openGraph: { type: 'article', url: `${getSiteUrl()}/news/${article.slug}`, title: article.title, description: article.excerpt, images: article.image ? [article.image] : ['/logo.png'] },
  } : { title: 'Article Not Found' }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = await getArticleBySlug((await params).slug, 'en')
  if (!article) notFound()
  const articleUrl = `${getSiteUrl()}/news/${article.slug}`
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'NewsArticle', headline: article.title,
    description: article.excerpt, image: article.image ? [article.image] : [`${getSiteUrl()}/logo.png`],
    datePublished: article.publishedAt, dateModified: article.updatedAt || article.publishedAt,
    author: { '@type': 'Organization', name: 'Wild North Goose' },
    publisher: { '@type': 'Organization', name: 'Wild North Goose', logo: { '@type': 'ImageObject', url: `${getSiteUrl()}/logo.png` } },
    mainEntityOfPage: articleUrl,
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: getSiteUrl() },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${getSiteUrl()}/news` },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
    ],
  }
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <Navigation /><NewsArticleClient article={article} /><Footer />
  </>
}

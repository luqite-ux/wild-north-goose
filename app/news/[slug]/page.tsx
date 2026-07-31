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
  const article = await getArticleBySlug((await params).slug)
  return article ? {
    title: `${article.title} | Wild North Goose`, description: article.excerpt,
    alternates: { canonical: `${getSiteUrl()}/news/${article.slug}` },
    openGraph: { type: 'article', url: `${getSiteUrl()}/news/${article.slug}`, title: article.title, description: article.excerpt, images: article.image ? [article.image] : ['/logo.png'] },
  } : { title: 'Article Not Found' }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = await getArticleBySlug((await params).slug)
  if (!article) notFound()
  return <><Navigation /><NewsArticleClient article={article} /><Footer /></>
}

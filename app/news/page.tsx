import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { getPublishedArticles } from '@/lib/articles-db'
import { NewsPageClient } from './news-page-client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Insights | Wild North Goose',
  description: 'Product development, manufacturing, and outdoor apparel insights from Wild North Goose.',
}

export default async function NewsPage() {
  const articles = await getPublishedArticles('en')
  return <><Navigation /><NewsPageClient articles={articles} /><Footer /></>
}

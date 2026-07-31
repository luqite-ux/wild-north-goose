import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/lib/articles-db'

export function NewsArticleClient({ article }: { article: Article }) {
  return (
    <main className="min-h-screen bg-background pt-24">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/news" className="text-primary hover:underline">Back to insights</Link>
        <h1 className="mt-8 text-4xl font-bold text-foreground md:text-6xl">{article.title}</h1>
        {article.publishedAt && <time className="mt-5 block text-muted-foreground">{new Date(article.publishedAt).toLocaleDateString('en-US', { dateStyle: 'long' })}</time>}
        {article.image && <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg"><Image src={article.image} alt={article.title} fill className="object-cover" priority /></div>}
        <div className="article-prose mt-12" dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </main>
  )
}

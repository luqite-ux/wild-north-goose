import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/lib/articles-db'

export function NewsPageClient({ articles }: { articles: Article[] }) {
  return (
    <main className="min-h-screen bg-background pt-24">
      <section className="bg-primary px-6 py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl"><h1 className="text-5xl font-bold md:text-7xl">Insights</h1><p className="mt-5 max-w-2xl text-xl text-primary-foreground/80">Outdoor apparel development, manufacturing, and collaboration updates.</p></div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">
        {articles.length === 0 ? <p className="rounded-lg border border-border bg-card p-10 text-muted-foreground">No articles have been published yet.</p> : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{articles.map((article) => (
            <Link key={article.slug} href={`/news/${article.slug}`} className="overflow-hidden rounded-lg border border-border bg-card transition-transform hover:-translate-y-1">
              {article.image && <div className="relative h-56"><Image src={article.image} alt={article.title} fill className="object-cover" /></div>}
              <div className="p-7"><h2 className="text-2xl font-semibold text-card-foreground">{article.title}</h2><p className="mt-3 text-muted-foreground">{article.excerpt}</p></div>
            </Link>
          ))}</div>
        )}
      </section>
    </main>
  )
}

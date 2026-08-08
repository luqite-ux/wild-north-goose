import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Wild North Goose',
  description: 'Answers about customization, samples, MOQ, production timing, and inspection for outdoor apparel orders.',
  alternates: { canonical: '/faq' },
  openGraph: { type: 'website', url: '/faq', title: 'FAQ | Wild North Goose', description: 'Buyer questions about outdoor apparel development and production.', images: ['/logo.png'] },
}

export default function FAQLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { getSiteUrl } from '@/lib/site-url'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: 'Wild North Goose | Premium Outdoor Apparel Manufacturing',
  description: 'Professional OEM & ODM outdoor apparel manufacturer specializing in high-performance fleece jackets, tactical pants, and technical outdoor wear. MOQ 500, customization available.',
  keywords: 'outdoor apparel manufacturer, OEM outdoor clothing, ODM fleece jackets, tactical pants manufacturer, custom outdoor wear, performance apparel factory',
  alternates: { canonical: '/' },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    title: 'Wild North Goose | Premium Outdoor Apparel Manufacturing',
    description: 'Professional OEM & ODM outdoor apparel manufacturer specializing in high-performance fleece jackets and technical outdoor wear.',
    url: '/',
    images: [{ url: '/logo.png', alt: 'Wild North Goose' }],
  },
  twitter: { card: 'summary_large_image', title: 'Wild North Goose | Outdoor Apparel Manufacturing', description: 'OEM and ODM outdoor apparel development for international brands.', images: ['/logo.png'] },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Organization', name: 'WILD NORTH GOOSE',
          legalName: '苏州北漠雁服饰有限公司', url: getSiteUrl(), logo: `${getSiteUrl()}/logo.png`,
          address: { '@type': 'PostalAddress', streetAddress: '通港路98号1幢', addressLocality: '常熟市', addressRegion: '江苏省', addressCountry: 'CN' },
        }) }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

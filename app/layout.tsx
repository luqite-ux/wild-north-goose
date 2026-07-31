import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wild North Goose | Premium Outdoor Apparel Manufacturing',
  description: 'Professional OEM & ODM outdoor apparel manufacturer specializing in high-performance fleece jackets, tactical pants, and technical outdoor wear. MOQ 500, customization available.',
  keywords: 'outdoor apparel manufacturer, OEM outdoor clothing, ODM fleece jackets, tactical pants manufacturer, custom outdoor wear, performance apparel factory',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    title: 'Wild North Goose | Premium Outdoor Apparel Manufacturing',
    description: 'Professional OEM & ODM outdoor apparel manufacturer specializing in high-performance fleece jackets and technical outdoor wear.',
    images: ['/logo.png'],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Wild North Goose',
  description: 'Send your outdoor apparel requirements to Suzhou Wild North Goose Apparel for review and quotation.',
  alternates: { canonical: '/contact' },
  openGraph: { type: 'website', url: '/contact', title: 'Contact Wild North Goose', description: 'Request an outdoor apparel quotation or discuss an OEM/ODM project.', images: ['/logo.png'] },
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}

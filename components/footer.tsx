import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const productLinks = [
    { href: '/products', label: 'All Products' },
    { href: '/products/fleece-jackets', label: 'Fleece Jackets' },
    { href: '/products/outdoor-pants', label: 'Outdoor Pants' },
    { href: '/products/cargo-shorts', label: 'Cargo Shorts' },
  ]

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/manufacturing', label: 'Manufacturing' },
    { href: '/quality', label: 'Quality Control' },
    { href: '/oem-odm', label: 'OEM & ODM' },
  ]

  const resourceLinks = [
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Wild North Goose"
                width={80}
                height={80}
                className="h-20 w-20"
              />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              Professional outdoor apparel manufacturer specializing in high-performance fleece, tactical wear, and technical outdoor clothing.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/70">
                  Suzhou, Jiangsu, China
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/70">
                  Contact us for inquiries
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/70">
                  Available via contact form
                </span>
              </li>
            </ul>
            <Link href="/contact">
              <button className="mt-6 w-full rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-primary-foreground/60 md:flex-row md:space-y-0">
            <p>© {new Date().getFullYear()} Wild North Goose. All rights reserved.</p>
            <p>苏州北漠雁服饰有限公司</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

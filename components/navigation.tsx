'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const topState = !scrolled && !mobileMenuOpen
  const focusClasses = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/oem-odm', label: 'OEM & ODM' },
    { href: '/manufacturing', label: 'Manufacturing' },
    { href: '/quality', label: 'Quality' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        topState
          ? 'border-b border-white/15 bg-[#10261a]/80 text-white shadow-sm backdrop-blur-md'
          : 'border-b border-border bg-background/95 text-foreground shadow-md backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center space-x-3 rounded-md transition-transform hover:scale-105 ${focusClasses} ${topState ? 'focus-visible:ring-white focus-visible:ring-offset-[#10261a]' : 'focus-visible:ring-primary focus-visible:ring-offset-background'}`}
          >
            <Image
              src="/logo.png"
              alt="Wild North Goose"
              width={60}
              height={60}
              className="h-14 w-14 object-contain"
              priority
            />
            <span className={`hidden text-xl font-bold tracking-tight transition-colors duration-300 lg:block ${topState ? 'text-white' : 'text-foreground'}`}>
              WILD NORTH GOOSE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${focusClasses} ${topState ? 'text-white/85 hover:text-white focus-visible:ring-white focus-visible:ring-offset-[#10261a]' : 'text-foreground/80 hover:text-foreground focus-visible:ring-primary focus-visible:ring-offset-background'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className={`ml-4 ${focusClasses} ${topState ? 'bg-[#b9d7de] text-[#10261a] hover:bg-white focus-visible:ring-white focus-visible:ring-offset-[#10261a]' : 'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary focus-visible:ring-offset-background'}`}>
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`rounded-md p-2 transition-colors lg:hidden ${focusClasses} ${topState ? 'text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-[#10261a]' : 'text-foreground hover:bg-muted focus-visible:ring-primary focus-visible:ring-offset-background'}`}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background shadow-xl lg:hidden">
          <div className="space-y-1 px-4 pb-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-md px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground ${focusClasses} focus-visible:ring-primary focus-visible:ring-offset-background`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className={`mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 ${focusClasses} focus-visible:ring-primary focus-visible:ring-offset-background`}>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

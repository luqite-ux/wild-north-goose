'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Droplet, Wind, Mountain, Shield } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { CATEGORY_FILTERS, FEATURED_PRODUCTS, type HomepageCategory } from '@/lib/homepage-products'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<HomepageCategory>('All')
  const heroRef = useRef<HTMLDivElement>(null)
  const filteredProducts = selectedCategory === 'All'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter((product) => product.category === selectedCategory)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-foreground">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform'
          }}
        >
          <Image
            src="/images/fleece-purple.jpg"
            alt="Wild North Goose Premium Outdoor Apparel"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="animate-fade-in-up mb-6 font-serif text-5xl font-bold leading-tight text-background md:text-7xl lg:text-8xl text-balance">
                Performance Meets Nature
              </h1>
              <p className="animate-fade-in-up mb-8 text-xl text-background/90 leading-relaxed animation-delay-200 md:text-2xl text-pretty">
                Premium outdoor apparel manufacturer. OEM & ODM services for high-performance fleece, tactical wear, and technical outdoor clothing.
              </p>
              <div className="animate-fade-in-up flex flex-col gap-4 animation-delay-400 sm:flex-row">
                <Link href="/products">
                  <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full border-background bg-background/10 text-background backdrop-blur-sm hover:bg-background/20 sm:w-auto">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <div className="h-12 w-8 rounded-full border-2 border-background/50">
            <div className="mx-auto mt-2 h-2 w-2 animate-pulse rounded-full bg-background/70" />
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
              Built for the Elements,<br />Crafted for Performance
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed md:text-2xl text-pretty">
              Where precision manufacturing meets outdoor innovation. Every stitch, every fabric, engineered to endure.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-muted py-24 text-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-primary">Featured Products</p><h2 className="text-4xl font-bold text-foreground md:text-5xl">Featured Outdoor Collection</h2><p className="mt-4 max-w-2xl text-lg text-muted-foreground">Explore selected fleece, utility pants, shorts, and custom layers developed for outdoor brands.</p></div>
              <Link href="/products"><Button size="lg" variant="outline">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="mb-10 flex gap-2 overflow-x-auto border-b border-border pb-px" role="tablist" aria-label="Filter featured products by category">
              {CATEGORY_FILTERS.map((category) => {
                const active = selectedCategory === category
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(category)}
                    className={`category-filter whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors ${active ? 'is-active text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </Reveal>
          <div className="featured-rail -mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {filteredProducts.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 4) * 90} className="min-w-[82vw] snap-start sm:min-w-[45vw] lg:min-w-0">
                <Link href={`/products/${product.slug}`} className="group block h-full">
                  <article className="tech-card h-full overflow-hidden rounded-xl border bg-card shadow-sm">
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted"><Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.045]" /></div>
                    <div className="p-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{product.category}</p><h3 className="mt-2 text-xl font-bold text-card-foreground">{product.name}</h3><p className="mt-2 text-sm text-muted-foreground">Model {product.model}</p></div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Features */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/pants-tactical-hero.jpg"
            alt="Performance"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Performance in Motion</h2>
            <p className="text-xl text-background/80">Technical features for every outdoor pursuit</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Droplet className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Waterproof</h3>
              <p className="text-background/80 leading-relaxed">
                Advanced waterproof membranes keep you dry in challenging conditions
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Wind className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Breathable</h3>
              <p className="text-background/80 leading-relaxed">
                Moisture-wicking fabrics ensure comfort during high-intensity activities
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Mountain className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Trail Tested</h3>
              <p className="text-background/80 leading-relaxed">
                Designed for hiking, skiing, and outdoor exploration in all terrains
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OEM/ODM Section */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">OEM & ODM Services</h2>
              <p className="mb-8 text-xl text-muted-foreground leading-relaxed">
                Transform your vision into reality with our comprehensive customization capabilities. From fabric selection to final production, we partner with you every step of the way.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Custom Design & Sizing</h3>
                    <p className="text-muted-foreground">Full control over dimensions, fit, and style specifications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Fabric & Color Selection</h3>
                    <p className="text-muted-foreground">Choose from premium materials and custom color palettes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Technical Craftsmanship</h3>
                    <p className="text-muted-foreground">Advanced stitching, reinforcement, and finishing techniques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Sample Approval Process</h3>
                    <p className="text-muted-foreground">Pre-production samples to ensure perfect alignment</p>
                  </div>
                </div>
              </div>

              <Link href="/oem-odm" className="mt-8 inline-block">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Learn More About Customization
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-auto">
                <Image
                  src="/images/fleece-black-models.jpg"
                  alt="Custom Manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-auto sm:translate-y-8">
                <Image
                  src="/images/showroom.jpg"
                  alt="Showroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Manufacturing Excellence</h2>
            <p className="text-xl text-muted-foreground">From concept to delivery, precision at every stage</p>
          </div>

          <div className="manufacturing-flow grid gap-8 md:grid-cols-3">
            <Reveal delay={0}><div className="process-card overflow-hidden rounded-lg bg-card shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/factory-interior.jpg"
                  alt="Production Floor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Advanced Production</h3>
                <p className="text-muted-foreground">Modern facilities with skilled craftspeople ensuring consistent quality</p>
              </div>
            </div></Reveal>

            <Reveal delay={140}><div className="process-card inspection-card overflow-hidden rounded-lg bg-card shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/quality-inspection.png"
                  alt="Quality Control"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Quality Assurance</h3>
                <p className="text-muted-foreground">Rigorous inspection processes and third-party quality verification</p>
              </div>
            </div></Reveal>

            <Reveal delay={280}><div className="process-card overflow-hidden rounded-lg bg-card shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/factory-exterior.jpg"
                  alt="Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-card-foreground">Reliable Delivery</h3>
                <p className="text-muted-foreground">Efficient logistics with typical lead times of 15-30 days</p>
              </div>
            </div></Reveal>
          </div>

          <div className="mt-12 text-center">
            <Link href="/manufacturing">
              <Button size="lg" variant="outline">
                Explore Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Why Partner With Us</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-primary">500</div>
              <div className="text-lg font-semibold text-foreground">MOQ Units</div>
              <p className="mt-2 text-muted-foreground">Flexible minimum order quantity</p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-primary">XS-3XL</div>
              <div className="text-lg font-semibold text-foreground">Size Range</div>
              <p className="mt-2 text-muted-foreground">Comprehensive sizing options</p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-primary">15-30</div>
              <div className="text-lg font-semibold text-foreground">Days Lead Time</div>
              <p className="mt-2 text-muted-foreground">Efficient production timeline</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <Shield className="mx-auto h-12 w-12 text-primary" />
              </div>
              <div className="text-lg font-semibold text-foreground">Quality Checked</div>
              <p className="mt-2 text-muted-foreground">Third-party inspections supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/pants-tactical-green.jpg"
            alt="Contact"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-balance">Ready to Start Your Project?</h2>
          <p className="mb-8 text-xl leading-relaxed text-pretty">
            Connect with our team to discuss your outdoor apparel needs. From samples to bulk orders, we&apos;re here to bring your vision to life.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="w-full border-primary-foreground bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 sm:w-auto">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

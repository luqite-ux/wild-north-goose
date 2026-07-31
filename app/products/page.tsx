import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { products, categories } from '@/lib/products'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Products | Wild North Goose',
  description: 'Explore our premium outdoor apparel collection including fleece jackets, tactical pants, and cargo shorts. OEM & ODM services available.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-primary py-32 pt-32 text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/fleece-colors.jpg"
            alt="Products"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl text-balance">
              Product Collection
            </h1>
            <p className="text-xl leading-relaxed md:text-2xl text-pretty">
              Premium outdoor apparel engineered for performance, built for durability
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Browse by Category</h2>
            <p className="text-xl text-muted-foreground">Select a category to explore our full range</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link key={category.slug} href={`/products/${category.slug}`} className="group">
                <div className="overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-card-foreground">{category.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                      View Products <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-bold text-foreground">All Products</h2>
            <p className="text-xl text-muted-foreground">Discover our complete outdoor apparel collection</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm font-medium text-primary">{product.sku}</div>
                    <h3 className="mb-2 text-xl font-bold text-card-foreground">{product.name}</h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {product.colors.slice(0, 3).map((color) => (
                        <span
                          key={color}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {color}
                        </span>
                      ))}
                      {product.colors.length > 3 && (
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                          +{product.colors.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-balance">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-pretty">
            We specialize in custom OEM & ODM solutions. Let&apos;s create the perfect product for your needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                Request Custom Quote
              </Button>
            </Link>
            <Link href="/oem-odm">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 sm:w-auto"
              >
                Learn About Customization
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

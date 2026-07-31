import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Package, Ruler, Palette } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getProductById, products } from '@/lib/products'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} | Wild North Goose`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  // Get related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-muted pt-24 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="bg-muted pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-card">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.slice(1, 5).map((img, idx) => (
                    <div key={idx} className="relative aspect-square overflow-hidden rounded-lg bg-card">
                      <Image src={img} alt={`${product.name} view ${idx + 2}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-2 text-sm font-medium text-primary">{product.sku}</div>
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{product.name}</h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Colors */}
              <div className="mb-8">
                <h3 className="mb-3 flex items-center text-lg font-semibold text-foreground">
                  <Palette className="mr-2 h-5 w-5 text-primary" />
                  Available Colors
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="rounded-full bg-card px-4 py-2 text-sm font-medium text-card-foreground shadow-sm"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <h3 className="mb-3 flex items-center text-lg font-semibold text-foreground">
                  <Ruler className="mr-2 h-5 w-5 text-primary" />
                  Size Range
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="flex h-12 w-12 items-center justify-center rounded-md bg-card text-sm font-medium text-card-foreground shadow-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="mb-3 flex items-center text-lg font-semibold text-foreground">
                  <Package className="mr-2 h-5 w-5 text-primary" />
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Link href="/contact" className="block">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Request a Quote for This Product
                  </Button>
                </Link>
                <Link href="/oem-odm" className="block">
                  <Button size="lg" variant="outline" className="w-full">
                    Customize This Design
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-foreground">Customization Options</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-muted p-8">
              <h3 className="mb-4 text-xl font-bold text-foreground">Sizing</h3>
              <p className="text-muted-foreground">
                Custom sizing available. Standard range: {product.sizes.join(', ')}. Extended sizes on request.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-8">
              <h3 className="mb-4 text-xl font-bold text-foreground">Materials</h3>
              <p className="text-muted-foreground">
                Choose from our premium fabric selection or provide your own material specifications.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-8">
              <h3 className="mb-4 text-xl font-bold text-foreground">Branding</h3>
              <p className="text-muted-foreground">
                Custom labels, embroidery, screen printing, and woven tags available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-muted py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground">Related Products</h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                  <div className="overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-2 text-sm font-medium text-primary">{relatedProduct.sku}</div>
                      <h3 className="mb-2 text-xl font-bold text-card-foreground">{relatedProduct.name}</h3>
                      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                        {relatedProduct.description}
                      </p>
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
      )}

      <Footer />
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Palette, Ruler, FileText, Package, Users, MessageSquare } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'OEM & ODM Services | Wild North Goose',
  description: 'Professional OEM and ODM outdoor apparel manufacturing. Custom design, materials, sizing, and branding. MOQ 500 units.',
  alternates: { canonical: '/oem-odm' },
  openGraph: { type: 'website', url: '/oem-odm', title: 'OEM & ODM Services | Wild North Goose', description: 'Custom outdoor apparel development from sampling through bulk production.', images: ['/logo.png'] },
}

export default function OEMODMPage() {
  const capabilities = [
    {
      icon: Ruler,
      title: 'Custom Sizing & Fit',
      description: 'Tailored dimensions and fit specifications to match your target market and brand standards',
    },
    {
      icon: Palette,
      title: 'Material & Color Selection',
      description: 'Choose from our premium fabric library or specify your own materials and color palettes',
    },
    {
      icon: FileText,
      title: 'Design Development',
      description: 'From concept sketches to technical specs, we bring your vision to production reality',
    },
    {
      icon: Package,
      title: 'Branding & Packaging',
      description: 'Custom labels, tags, embroidery, and packaging solutions for your brand identity',
    },
    {
      icon: Users,
      title: 'Sample Approval',
      description: 'Pre-production samples for fit, quality, and specification verification',
    },
    {
      icon: MessageSquare,
      title: 'Dedicated Support',
      description: 'Direct communication with our production team throughout the entire process',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Share your product vision, requirements, target market, and quantity needs',
    },
    {
      step: '02',
      title: 'Design & Specification',
      description: 'We develop technical drawings, material selections, and detailed specifications',
    },
    {
      step: '03',
      title: 'Sample Creation',
      description: 'Pre-production samples created for your review and approval',
    },
    {
      step: '04',
      title: 'Sample Revision',
      description: 'Refinements based on your feedback until specifications are perfect',
    },
    {
      step: '05',
      title: 'Bulk Production',
      description: 'Full-scale manufacturing with rigorous quality control at every stage',
    },
    {
      step: '06',
      title: 'Quality Inspection',
      description: 'Final inspection and third-party quality verification available',
    },
    {
      step: '07',
      title: 'Delivery & Support',
      description: 'Efficient logistics and ongoing support for future orders',
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-primary py-32 pt-32 text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/showroom.jpg"
            alt="OEM ODM"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl text-balance">
              OEM & ODM Services
            </h1>
            <p className="text-xl leading-relaxed md:text-2xl text-pretty">
              Transform your vision into reality with our comprehensive customization capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Customization Capabilities</h2>
            <p className="text-xl text-muted-foreground">Full control over every aspect of your product</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon
              return (
                <div key={capability.title} className="rounded-lg bg-muted p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Our Process</h2>
            <p className="text-xl text-muted-foreground">From concept to delivery in seven proven steps</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="relative rounded-lg bg-card p-8 shadow-lg">
                <div className="mb-4 text-5xl font-bold text-accent/20">{item.step}</div>
                <h3 className="mb-3 text-xl font-bold text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Customization Examples</h2>
            <p className="text-xl text-muted-foreground">See the range of what&apos;s possible</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/fleece-colors.jpg"
                alt="Color customization"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="mb-2 text-2xl font-bold">Color Variations</h3>
                <p className="text-background/90">Custom color matching and fabric selection</p>
              </div>
            </div>

            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/fleece-black-models.jpg"
                alt="Design customization"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="mb-2 text-2xl font-bold">Design Flexibility</h3>
                <p className="text-background/90">Adapt fit, features, and styling to your brand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Key Information</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-accent">500</div>
              <div className="mb-2 text-xl font-semibold">Minimum Order</div>
              <p className="text-primary-foreground/80">Flexible MOQ for OEM/ODM projects</p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-accent">15-30</div>
              <div className="mb-2 text-xl font-semibold">Days Production</div>
              <p className="text-primary-foreground/80">Typical lead time after sample approval</p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-accent">XS-3XL</div>
              <div className="mb-2 text-xl font-semibold">Size Range</div>
              <p className="text-primary-foreground/80">Standard range, custom sizes available</p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-accent">100%</div>
              <div className="mb-2 text-xl font-semibold">Quality Focus</div>
              <p className="text-primary-foreground/80">Third-party inspection supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl text-balance">
            Ready to Start Your Custom Project?
          </h2>
          <p className="mb-8 text-xl text-muted-foreground leading-relaxed text-pretty">
            Share your requirements with us and receive a detailed proposal within 48 hours
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Browse Base Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

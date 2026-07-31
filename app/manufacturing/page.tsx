import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Factory, PackageCheck, Ruler, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Manufacturing Capabilities | Wild North Goose',
  description: 'State-of-the-art manufacturing facilities with experienced production teams, quality control systems, and flexible capacity for both sampling and bulk production.',
}

export default function ManufacturingPage() {
  const capabilities = [
    {
      icon: Factory,
      title: 'Production Capacity',
      description: 'Modern manufacturing facility with multiple production lines capable of handling orders from 500 to 50,000+ units.',
    },
    {
      icon: Users,
      title: 'Skilled Workforce',
      description: 'Experienced team of pattern makers, sewers, and quality control specialists trained in technical outdoor apparel production.',
    },
    {
      icon: Ruler,
      title: 'Sample Development',
      description: 'In-house sampling room for rapid prototyping, pattern adjustments, and pre-production sample approval.',
    },
    {
      icon: PackageCheck,
      title: 'Quality Systems',
      description: 'Multi-stage inspection process from incoming materials through final packaging, with third-party inspection support.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Order Confirmation',
      description: 'Finalize specifications, quantities, materials, colors, and delivery timeline.',
    },
    {
      step: '02',
      title: 'Material Sourcing',
      description: 'Procure approved fabrics, trims, and accessories from vetted suppliers.',
    },
    {
      step: '03',
      title: 'Pre-Production Sample',
      description: 'Create PP sample for final approval before bulk production begins.',
    },
    {
      step: '04',
      title: 'Bulk Production',
      description: 'Cut, sew, and assemble garments following approved specifications and quality standards.',
    },
    {
      step: '05',
      title: 'Quality Inspection',
      description: 'Conduct inline and final inspections, with optional third-party audit.',
    },
    {
      step: '06',
      title: 'Packaging & Delivery',
      description: 'Pack according to requirements and arrange shipping to your destination.',
    },
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/factory-interior.jpg"
              alt="Manufacturing facility"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 opacity-0 animate-fade-in-up">
                Manufacturing Excellence
              </h1>
              <p className="text-xl md:text-2xl text-background/90 mb-8 opacity-0 animate-fade-in-up animation-delay-200">
                Advanced facilities, skilled craftsmanship, and rigorous quality control systems ensuring consistent results for every order.
              </p>
              <div className="opacity-0 animate-fade-in-up animation-delay-400">
                <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/contact">Request Factory Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive manufacturing infrastructure designed to meet the demanding requirements of outdoor apparel brands worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability) => {
                const Icon = capability.icon
                return (
                  <div key={capability.title} className="group">
                    <div className="bg-card border border-border p-8 rounded-lg h-full hover:border-primary transition-colors">
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Production Floor Images */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/factory-exterior.jpg"
                  alt="Factory exterior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/showroom.jpg"
                  alt="Showroom display"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-12">
              <div className="grid md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">15-30</div>
                  <div className="text-muted-foreground">Days Production Lead Time</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Minimum Order Quantity</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Production Process */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Production Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A transparent, structured workflow from order confirmation through final delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="bg-card border border-border p-8 rounded-lg hover:border-primary transition-colors">
                    <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Quality Standards</h2>
                <div className="space-y-6">
                  {[
                    'Incoming material inspection for all fabrics and trims',
                    'Inline quality checks during cutting and sewing operations',
                    'Final inspection before packaging with AQL standards',
                    'Third-party inspection services supported',
                    'Detailed QC reports provided with every shipment',
                    'Post-delivery support and defect resolution',
                  ].map((standard) => (
                    <div key={standard} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg leading-relaxed">{standard}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Button asChild size="lg">
                    <Link href="/quality">Learn More About Quality</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/images/factory-interior.jpg"
                  alt="Quality control process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Manufacturing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with our production team to discuss your project requirements, timeline, and specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/oem-odm">View OEM Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

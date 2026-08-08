import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Award, CheckCircle2, FileCheck, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Quality Assurance | Wild North Goose',
  description: 'Rigorous quality control systems ensuring every garment meets international standards for outdoor performance apparel.',
  alternates: { canonical: '/quality' },
  openGraph: { type: 'website', url: '/quality', title: 'Quality Inspection | Wild North Goose', description: 'Material, inline, and pre-shipment inspection processes for outdoor apparel orders.', images: ['/images/quality-inspection.png'] },
}

export default function QualityPage() {
  const standards = [
    {
      icon: Shield,
      title: 'Material Inspection',
      description: 'All incoming fabrics and trims undergo rigorous testing for color fastness, shrinkage, and performance specifications before production begins.',
    },
    {
      icon: CheckCircle2,
      title: 'Inline QC',
      description: 'Quality checkpoints throughout the production process ensure consistent construction, accurate measurements, and proper assembly at every stage.',
    },
    {
      icon: FileCheck,
      title: 'Final Inspection',
      description: 'Comprehensive final audit of finished garments using AQL standards, checking for defects, fit, functionality, and packaging requirements.',
    },
    {
      icon: Award,
      title: 'Third-Party Audit',
      description: 'We support and facilitate independent third-party inspection services to provide additional verification and buyer confidence.',
    },
  ]

  const testingAreas = [
    {
      category: 'Fabric Testing',
      tests: [
        'Color fastness to washing and light',
        'Dimensional stability / shrinkage',
        'Tensile strength and tear resistance',
        'Pilling resistance',
        'Water repellency (if applicable)',
      ],
    },
    {
      category: 'Construction Quality',
      tests: [
        'Seam strength and stitch density',
        'Zipper functionality and durability',
        'Button and snap attachment strength',
        'Measurement accuracy (±1cm tolerance)',
        'Pattern alignment and symmetry',
      ],
    },
    {
      category: 'Performance Features',
      tests: [
        'Waterproof / breathability (when specified)',
        'Insulation performance',
        'Pocket functionality and capacity',
        'Velcro and elastic retention',
        'Reflective element visibility',
      ],
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
              src="/images/fleece-detail.jpg"
              alt="Quality craftsmanship"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 to-foreground/60" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 opacity-0 animate-fade-in-up">
                Quality Without Compromise
              </h1>
              <p className="text-xl md:text-2xl text-background/90 mb-8 opacity-0 animate-fade-in-up animation-delay-200">
                Multi-stage quality control systems ensuring every garment meets the demanding standards of outdoor performance apparel.
              </p>
            </div>
          </div>
        </section>

        {/* QC Standards Grid */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Quality Control Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From raw materials to finished product, every stage is monitored to ensure consistent quality and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {standards.map((standard) => {
                const Icon = standard.icon
                return (
                  <div key={standard.title} className="group">
                    <div className="bg-card border border-border p-10 rounded-lg h-full hover:border-primary transition-colors">
                      <Icon className="w-14 h-14 text-primary mb-6" />
                      <h3 className="text-2xl font-semibold mb-4">{standard.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{standard.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testing Areas */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Testing & Inspection</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive testing protocols covering materials, construction, and performance characteristics.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testingAreas.map((area) => (
                <div key={area.category} className="bg-card border border-border p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">{area.category}</h3>
                  <ul className="space-y-4">
                    {area.tests.map((test) => (
                      <li key={test} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Images Showcase */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/fleece-collar.jpg"
                  alt="Detail craftsmanship"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/fleece-purple.jpg"
                  alt="Quality materials"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/fleece-colors.jpg"
                  alt="Color consistency"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Standards & Certifications */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/factory-interior.jpg"
                  alt="Quality inspection floor"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Standards & Compliance</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Quality Management</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      Our quality management system follows international best practices for apparel manufacturing, with documented procedures for every stage of production.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Third-Party Inspection</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      We welcome and support independent third-party inspection services such as SGS, Bureau Veritas, and Intertek to provide buyers with additional confidence.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Documentation</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Detailed QC reports, measurement specs, test results, and photo documentation are provided with every shipment for full traceability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AQL Standards */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">AQL Inspection Standards</h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-primary mb-3">2.5</div>
                  <div className="text-lg font-semibold mb-2">Critical Defects</div>
                  <p className="text-muted-foreground">Defects that could pose safety risks or render the garment unwearable</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-3">4.0</div>
                  <div className="text-lg font-semibold mb-2">Major Defects</div>
                  <p className="text-muted-foreground">Defects that significantly impact appearance or functionality</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-3">6.5</div>
                  <div className="text-lg font-semibold mb-2">Minor Defects</div>
                  <p className="text-muted-foreground">Small imperfections that do not affect wearability or appearance</p>
                </div>
              </div>

              <p className="text-center text-muted-foreground mt-8">
                Standard AQL levels applied unless otherwise specified by buyer
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Quality You Can Trust</h2>
            <p className="text-xl mb-8 opacity-90">
              Request detailed QC procedures, inspection reports, or arrange a factory visit to see our quality systems in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/manufacturing">View Manufacturing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

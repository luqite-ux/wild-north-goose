import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Globe, Heart, Shield, Target } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Wild North Goose',
  description: 'Professional outdoor apparel manufacturer with over a decade of experience serving brands worldwide. Specializing in OEM/ODM services for performance outdoor wear.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail in every pattern, stitch, and finish ensures consistent quality across all production runs.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'On-time delivery, transparent communication, and dependable quality you can count on, order after order.',
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We view our clients as long-term partners, supporting their growth with flexible solutions and responsive service.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Continuous investment in new materials, techniques, and sustainable practices to stay ahead of industry trends.',
    },
  ]

  const timeline = [
    {
      year: '2019',
      title: 'Foundation',
      description: 'Established as Suzhou Wild North Goose Apparel Co., Ltd., focusing on outdoor performance garments.',
    },
    {
      year: '2020-2021',
      title: 'Growth',
      description: 'Expanded production capacity and client base, serving outdoor brands across North America and Europe.',
    },
    {
      year: '2022-2023',
      title: 'Specialization',
      description: 'Developed expertise in technical fleece, tactical pants, and multi-functional outdoor wear.',
    },
    {
      year: '2024+',
      title: 'Future',
      description: 'Continuing to innovate with sustainable materials and advanced manufacturing capabilities.',
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
              src="/images/factory-exterior.jpg"
              alt="Wild North Goose factory"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 opacity-0 animate-fade-in-up">
                About Wild North Goose
              </h1>
              <p className="text-xl md:text-2xl text-background/90 opacity-0 animate-fade-in-up animation-delay-200">
                Professional outdoor apparel manufacturer partnering with brands worldwide to create high-performance, reliable outdoor wear.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Who We Are</h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Wild North Goose</span> (Suzhou Beimo Yan Apparel Co., Ltd. / 苏州北漠雁服饰有限公司) is a professional outdoor apparel manufacturer based in Suzhou, China, specializing in OEM and ODM services for outdoor brands worldwide.
                  </p>
                  <p>
                    With over a decade of experience in technical outdoor garment production, we have built our reputation on delivering consistent quality, flexible customization, and reliable service. Our facility combines modern manufacturing equipment with skilled craftsmanship to produce everything from high-performance fleece jackets to tactical cargo pants.
                  </p>
                  <p>
                    We serve outdoor brands, retailers, and distributors looking for a manufacturing partner who understands the demanding requirements of outdoor apparel—durability, functionality, and performance in challenging conditions.
                  </p>
                  <p>
                    Our core categories include fleece jackets, outdoor pants, cargo pants, outdoor shorts, and technical knitwear. We offer complete customization in materials, colors, sizing, and features, with minimum order quantities starting at 500 units.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/showroom.jpg"
                    alt="Showroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Min Order Qty</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">15-30</div>
                    <div className="text-sm text-muted-foreground">Days Lead Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our work and relationships with clients, suppliers, and team members.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From foundation to the present, a commitment to quality and service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <div className="bg-card border border-border p-8 rounded-lg h-full hover:border-primary transition-colors">
                    <div className="text-5xl font-bold text-primary mb-4">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Images */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/factory-interior.jpg"
                  alt="Production floor"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6">Modern Facilities</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our manufacturing facility is equipped with modern sewing equipment, cutting machines, and quality control stations. We maintain clean, organized production floors with proper workflow to ensure efficiency and consistency.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our experienced team includes pattern makers, sample sewers, production supervisors, and quality inspectors who specialize in outdoor performance garments.
                </p>
                <div>
                  <Button asChild size="lg">
                    <Link href="/manufacturing">Explore Manufacturing</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card border border-border p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized knowledge in outdoor apparel construction, materials, and performance requirements.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Flexible Customization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full customization of materials, colors, sizes, features, and branding to match your specifications.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Quality Control</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Multi-stage inspection process from materials through final product, with third-party audit support.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Reasonable MOQ</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Minimum order quantity of 500 units per style makes us accessible to growing brands.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Sample Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In-house sampling capabilities for prototypes, pre-production samples, and design iterations.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Clear Communication</h3>
                <p className="text-muted-foreground leading-relaxed">
                  English-speaking team, transparent pricing, and regular production updates throughout the process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to start your next outdoor apparel project? Get in touch to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: 'Orders & MOQ',
      questions: [
        {
          q: 'What is your minimum order quantity (MOQ)?',
          a: 'Our standard MOQ is 500 units per style. This allows us to maintain competitive pricing while keeping the entry barrier reasonable for growing brands. Mixed sizes and colors within the same style are welcome.',
        },
        {
          q: 'Can I order samples before placing a bulk order?',
          a: 'Yes, we support sample orders. You can order existing samples from our collection for evaluation, or we can produce custom samples based on your specifications. Sample lead time is typically 7-10 days after approval.',
        },
        {
          q: 'What is the typical production lead time?',
          a: 'Production lead time is typically 15-30 days after pre-production sample approval and deposit payment, depending on order quantity and complexity. Rush orders may be accommodated with advance notice.',
        },
        {
          q: 'Do you accept small test orders?',
          a: 'While our standard MOQ is 500 units, we can discuss smaller initial orders on a case-by-case basis, particularly for new partnerships. Please contact us to discuss your specific needs.',
        },
      ],
    },
    {
      category: 'Customization & OEM',
      questions: [
        {
          q: 'What can be customized?',
          a: 'Nearly everything can be customized: fabric type and weight, colors (Pantone matching available), sizes (XS-3XL standard, custom sizing available), features (pockets, zippers, drawstrings), branding (woven labels, printed labels, embroidery, heat transfers), and packaging.',
        },
        {
          q: 'Can you develop products from my designs?',
          a: 'Yes, we offer full ODM services. You can provide sketches, tech packs, or reference samples, and our pattern makers will develop prototypes. We can also suggest improvements based on our manufacturing experience.',
        },
        {
          q: 'Do you provide design services?',
          a: 'We can assist with technical design and pattern development based on your concept. While we focus on manufacturing rather than creative design, we can recommend modifications for better functionality, cost efficiency, or manufacturability.',
        },
        {
          q: 'What fabric options are available?',
          a: 'We work with a wide range of performance fabrics including polar fleece (various weights), softshell, ripstop nylon, cotton canvas, polyester blends, and technical stretch fabrics. We can source specific fabrics upon request or work with your nominated suppliers.',
        },
      ],
    },
    {
      category: 'Quality & Compliance',
      questions: [
        {
          q: 'What quality standards do you follow?',
          a: 'We follow AQL (Acceptable Quality Level) inspection standards with typical levels of 2.5 for critical defects, 4.0 for major defects, and 6.5 for minor defects. All garments undergo incoming material inspection, inline QC, and final inspection before shipping.',
        },
        {
          q: 'Can I arrange third-party inspection?',
          a: 'Absolutely. We welcome and support third-party inspection services such as SGS, Bureau Veritas, Intertek, or your own QC team. We will coordinate timing and provide full access to the production floor and finished goods.',
        },
        {
          q: 'Do you have certifications?',
          a: 'We work with certified fabric and trim suppliers and can provide test reports for specific performance characteristics (water repellency, colorfastness, etc.) upon request. We can also facilitate any specific testing or certification required by your market.',
        },
        {
          q: 'What if there are quality issues after delivery?',
          a: 'We stand behind our work. If quality issues arise that are our responsibility, we will work with you to find a solution, whether that means rework, discount, or credit toward future orders. Clear communication during pre-production minimizes these situations.',
        },
      ],
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          q: 'How is pricing determined?',
          a: 'Pricing depends on fabric type, construction complexity, order quantity, and customization requirements. To provide an accurate quote, we need: style reference (photo or tech pack), fabric specifications, quantity per size/color, and any special features or branding.',
        },
        {
          q: 'What are your payment terms?',
          a: 'Standard terms are 30% deposit upon order confirmation and 70% balance before shipment. For established clients, we can discuss adjusted terms. We accept T/T (wire transfer) and can provide necessary banking information upon order confirmation.',
        },
        {
          q: 'Do you include shipping in your quotes?',
          a: 'Our standard quotes are FOB (Free on Board) from our nearest port. We can arrange shipping and provide CIF or door-to-door quotes if preferred. Shipping costs vary based on volume, weight, and destination.',
        },
      ],
    },
    {
      category: 'Logistics & Shipping',
      questions: [
        {
          q: 'What shipping methods do you use?',
          a: 'For bulk orders, sea freight is most economical. For urgent or smaller orders, air freight is available. We work with established freight forwarders and can arrange door-to-door delivery, or you can use your own logistics partner.',
        },
        {
          q: 'How are goods packaged?',
          a: 'Standard packaging is individual polybags per garment, packed in export cartons. We can accommodate custom packaging requirements including hangtags, folding methods, inner boxes, or retail-ready packaging.',
        },
        {
          q: 'Do you handle customs documentation?',
          a: 'Yes, we prepare all necessary export documentation including commercial invoice, packing list, and certificate of origin. We have experience shipping to North America, Europe, Australia, and other markets.',
        },
      ],
    },
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Common questions about our manufacturing services, customization options, quality standards, and order process.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={category.category}>
                <h2 className="text-3xl font-bold mb-8 text-primary">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 10 + questionIndex
                    const isOpen = openIndex === globalIndex
                    
                    return (
                      <div
                        key={globalIndex}
                        className="bg-card border border-border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <span className="text-lg font-semibold pr-8">{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-8 pb-6">
                            <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Quick Facts</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card border border-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">500</div>
                <div className="text-muted-foreground">Minimum Order Quantity</div>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">XS–3XL</div>
                <div className="text-muted-foreground">Standard Size Range</div>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">15-30</div>
                <div className="text-muted-foreground">Days Production Time</div>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">Full</div>
                <div className="text-muted-foreground">Customization Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {"Can't find the answer you're looking for? Our team is here to help with any questions about our manufacturing services, capabilities, or order process."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

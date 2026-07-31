'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { getSupabaseClient, getTenantId } from '@/lib/supabase'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    quantity: '',
    customization: '',
    message: '',
  })
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    const client = getSupabaseClient()
    const tenantId = getTenantId()
    if (!client || !tenantId) {
      setStatus('error')
      return
    }
    const subject = [formData.productInterest, formData.quantity].filter(Boolean).join(' — ')
    const message = [formData.customization && `Customization: ${formData.customization}`, formData.message].filter(Boolean).join('\n\n')
    const { error } = await client.from('inquiries').insert({
      tenant_id: tenantId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      company: formData.company || null,
      subject: subject || 'Website inquiry',
      message,
    })
    if (error) {
      setStatus('error')
      return
    }
    setStatus('success')
    setFormData({
      name: '', email: '', phone: '', company: '', productInterest: '', quantity: '', customization: '', message: '',
    })
    window.setTimeout(() => {
      setStatus('idle')
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const productCategories = [
    'Fleece Jackets',
    'Outdoor Pants',
    'Cargo Pants',
    'Outdoor Shorts',
    'Knitwear',
    'Custom / Other',
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your project? Share your requirements and our team will review your inquiry.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Location</div>
                        <div className="text-muted-foreground">
                          Suzhou, Jiangsu Province<br />
                          China
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <div className="text-muted-foreground">
                          [Contact details to be provided]
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Phone / WhatsApp</div>
                        <div className="text-muted-foreground">
                          [Contact details to be provided]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Requirements reviewed by our project team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Initial consultation and needs assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Pricing based on your specifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Sample and production timeline details</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border p-8 md:p-12 rounded-lg">
                  <h2 className="text-3xl font-bold mb-8">Request a Quote</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="+1 234 567 8900"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="productInterest" className="block text-sm font-medium mb-2">
                          Product Interest *
                        </label>
                        <select
                          id="productInterest"
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="e.g., 1000 units"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="customization" className="block text-sm font-medium mb-2">
                        Customization Requirements
                      </label>
                      <input
                        type="text"
                        id="customization"
                        name="customization"
                        value={formData.customization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Colors, sizes, branding, special features..."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <div>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent Successfully!' : 'Send Inquiry'}
                      </Button>
                      
                      {status === 'success' && (
                        <p className="text-center text-sm text-primary mt-4">
                          Thank you! Your inquiry has been received.
                        </p>
                      )}
                      
                      {status === 'error' && (
                        <p className="text-center text-sm text-destructive mt-4">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

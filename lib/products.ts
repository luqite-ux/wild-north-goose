export interface Product {
  id: string
  name: string
  category: 'fleece-jackets' | 'outdoor-pants' | 'cargo-shorts' | 'knitwear'
  sku: string
  description: string
  features: string[]
  colors: string[]
  sizes: string[]
  applications: string[]
  image: string
  images: string[]
}

export const products: Product[] = [
  // Fleece Jackets
  {
    id: 'fleece-jacket-reversible',
    name: 'Reversible Fleece Jacket',
    category: 'fleece-jackets',
    sku: 'WNG-FL-001',
    description: 'Premium double-sided fleece jacket with ultra-soft plush interior and smooth technical exterior. Features full-zip closure, stand collar, and superior warmth retention.',
    features: [
      'Reversible design with dual-layer fleece',
      'High-density plush lining for maximum warmth',
      'Smooth polyester shell for wind resistance',
      'Full-length YKK zipper with chin guard',
      'Two side pockets with secure closures',
      'Sizes: XS-3XL',
    ],
    colors: ['Purple', 'Black', 'Turquoise', 'Cream', 'Gray', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    applications: ['Hiking', 'Camping', 'Urban wear', 'Travel'],
    image: '/images/fleece-purple.jpg',
    images: [
      '/images/fleece-purple.jpg',
      '/images/fleece-collar.jpg',
      '/images/fleece-colors.jpg',
      '/images/fleece-black-models.jpg',
    ],
  },
  {
    id: 'fleece-jacket-performance',
    name: 'Performance Fleece Jacket',
    category: 'fleece-jackets',
    sku: 'WNG-FL-002',
    description: 'Technical fleece jacket designed for high-performance outdoor activities with breathable fabric and moisture-wicking properties.',
    features: [
      'Breathable polyester fleece construction',
      'Moisture-wicking technology',
      'Zippered chest pocket for valuables',
      'Elastic cuffs and hem for secure fit',
      'Lightweight and packable',
      'Available in multiple colorways',
    ],
    colors: ['Black', 'Navy', 'Forest Green', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    applications: ['Skiing', 'Hiking', 'Running', 'Cycling'],
    image: '/images/fleece-black-models.jpg',
    images: ['/images/fleece-black-models.jpg', '/images/fleece-detail.jpg'],
  },

  // Outdoor Pants
  {
    id: 'tactical-cargo-pants',
    name: 'Tactical Cargo Pants',
    category: 'outdoor-pants',
    sku: 'WNG-PT-001',
    description: 'Professional-grade tactical pants with reinforced construction, multiple cargo pockets, and durable ripstop fabric for demanding outdoor use.',
    features: [
      'Ripstop fabric with reinforced knees',
      'Six cargo pockets with button/Velcro closures',
      'YKK zippers throughout',
      'Articulated knees for mobility',
      'Belt loops with D-ring attachment',
      'Water-resistant coating',
    ],
    colors: ['Olive Green', 'Black', 'Khaki', 'Navy', 'Charcoal'],
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    applications: ['Tactical operations', 'Hiking', 'Outdoor work', 'Hunting'],
    image: '/images/pants-green.jpg',
    images: [
      '/images/pants-green.jpg',
      '/images/pants-tactical-green.jpg',
      '/images/pants-tactical-hero.jpg',
    ],
  },
  {
    id: 'outdoor-trekking-pants',
    name: 'Outdoor Trekking Pants',
    category: 'outdoor-pants',
    sku: 'WNG-PT-002',
    description: 'Lightweight trekking pants with stretch fabric and quick-dry properties, perfect for multi-day adventures.',
    features: [
      'Stretch nylon blend for unrestricted movement',
      'Quick-dry technology',
      'UPF 50+ sun protection',
      'Zippered security pockets',
      'Adjustable waistband',
      'Reinforced seat and knees',
    ],
    colors: ['Navy', 'Khaki', 'Gray', 'Olive'],
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    applications: ['Trekking', 'Backpacking', 'Travel', 'Casual wear'],
    image: '/images/pants-tactical-green.jpg',
    images: ['/images/pants-tactical-green.jpg'],
  },

  // Cargo Shorts
  {
    id: 'multi-pocket-cargo-shorts',
    name: 'Multi-Pocket Cargo Shorts',
    category: 'cargo-shorts',
    sku: 'WNG-SH-001',
    description: 'Versatile cargo shorts with multiple storage options and durable cotton-polyester blend for summer adventures.',
    features: [
      'Six-pocket design for maximum storage',
      'Cotton-polyester blend for durability',
      'Reinforced stitching at stress points',
      'Adjustable webbing belt included',
      'Button and zipper fly closure',
      'Quick-dry fabric treatment',
    ],
    colors: ['Khaki', 'Black', 'Navy', 'Olive', 'Gray', 'Camo'],
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    applications: ['Hiking', 'Travel', 'Casual wear', 'Outdoor activities'],
    image: '/images/shorts-beige.jpg',
    images: [
      '/images/shorts-beige.jpg',
      '/images/shorts-black.jpg',
      '/images/shorts-gray.jpg',
      '/images/shorts-camo.jpg',
      '/images/shorts-cargo-beige.jpg',
      '/images/shorts-design.jpg',
    ],
  },
  {
    id: 'tactical-shorts',
    name: 'Tactical Shorts',
    category: 'cargo-shorts',
    sku: 'WNG-SH-002',
    description: 'Professional tactical shorts with reinforced construction and optimized pocket placement for outdoor work and activities.',
    features: [
      'Ripstop fabric construction',
      'Tactical pocket layout',
      'D-ring attachments',
      'Reinforced belt loops',
      'YKK zippers',
      'Quick-release buckle option',
    ],
    colors: ['Black', 'Navy', 'Camo', 'Khaki'],
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    applications: ['Tactical use', 'Outdoor work', 'Hiking', 'Camping'],
    image: '/images/shorts-black.jpg',
    images: ['/images/shorts-black.jpg', '/images/shorts-cargo-beige.jpg'],
  },
]

export function getProductsByCategory(category: Product['category']) {
  return products.filter((p) => p.category === category)
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id)
}

export const categories = [
  {
    slug: 'fleece-jackets',
    name: 'Fleece Jackets',
    description: 'Premium insulated fleece jackets with reversible designs and superior warmth',
    image: '/images/fleece-collar.jpg',
  },
  {
    slug: 'outdoor-pants',
    name: 'Outdoor Pants',
    description: 'Tactical cargo pants with reinforced construction and multiple storage options',
    image: '/images/pants-green.jpg',
  },
  {
    slug: 'cargo-shorts',
    name: 'Cargo Shorts',
    description: 'Versatile outdoor shorts with utility pockets and durable construction',
    image: '/images/shorts-beige.jpg',
  },
  {
    slug: 'knitwear',
    name: 'Knitwear',
    description: 'Coming soon - Premium outdoor knitwear collection',
    image: '/images/fleece-black-models.jpg',
  },
]

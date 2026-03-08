// Bunjoz Hub Configuration
module.exports = {
  // Business Info
  business: {
    name: 'Bunjoz Hub',
    owner: 'Derick',
    tagline: 'Fix It, Find It, Love It',
    description: 'Professional phone repairs, quality phones, and genuine accessories in Kampala',
    since: '2020',
    currency: 'UGX'
  },
  
  // Contact Details
  contact: {
    phone: '+256 703 753787',
    phone_display: '+256 703 753787',
    email: 'info@bunjozhub.com',
    whatsapp: '256703753787',
    address: 'Kampala Road, Kampala, Uganda',
    map_link: 'https://maps.google.com/?q=Kampala+Road+Uganda'
  },
  
  // Business Hours
  hours: {
    monday_friday: '9:00 AM - 8:00 PM',
    saturday: '9:00 AM - 8:00 PM',
    sunday: '10:00 AM - 4:00 PM'
  },
  
  // Social Media
  social: {
    facebook: 'https://facebook.com/bunjozhub',
    instagram: 'https://instagram.com/bunjozhub',
    twitter: 'https://twitter.com/bunjozhub',
    whatsapp: 'https://wa.me/256703753787'
  },
  
  // Images (using professional placeholder images)
  images: {
    logo: 'https://via.placeholder.com/180x60/2c3e50/ffffff?text=Bunjoz+Hub',
    hero: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200',
    repair: 'https://images.unsplash.com/photo-1581092335871-4c7ff3f832b1?w=600',
    sales: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
    accessories: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600',
    about: 'https://images.unsplash.com/photo-1571066811602-ff8371a6f4c6?w=600',
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300',
    default_phone: 'https://via.placeholder.com/300x400/3498db/ffffff?text=Phone+Image',
    banner: 'https://images.unsplash.com/photo-1563013544-824ae1b704d0?w=1200'
  },
  
  // Services Offered
  services: [
    {
      name: 'Screen Replacement',
      icon: 'fas fa-mobile-alt',
      description: 'Cracked screen? We replace screens for all models with high-quality displays.',
      features: ['All models supported', 'Quality displays', 'Fast service', 'Warranty included']
    },
    {
      name: 'Battery Replacement',
      icon: 'fas fa-battery-full',
      description: 'Battery draining fast? Get a genuine replacement and enjoy full day usage.',
      features: ['Genuine batteries', 'Quick installation', 'Testing included', '6-month warranty']
    },
    {
      name: 'Charging Port Repair',
      icon: 'fas fa-charging-station',
      description: 'Phone not charging? We fix or replace charging ports quickly.',
      features: ['Port cleaning', 'Port replacement', 'Fast charging fix', 'Same-day service']
    },
    {
      name: 'Water Damage Repair',
      icon: 'fas fa-water',
      description: 'Dropped in water? Bring it immediately for professional cleaning and repair.',
      features: ['Ultrasonic cleaning', 'Corrosion treatment', 'Component repair', 'Emergency service']
    },
    {
      name: 'Camera Repair',
      icon: 'fas fa-camera',
      description: 'Blurry photos or camera not working? We fix front and rear cameras.',
      features: ['Front camera', 'Rear camera', 'Camera glass replacement', 'Testing included']
    },
    {
      name: 'Software Issues',
      icon: 'fas fa-code',
      description: 'Phone frozen, boot loop, or software problems? We can fix it.',
      features: ['OS reinstallation', 'Virus removal', 'Boot loop fix', 'Data backup']
    }
  ],
  
  // Brands we work with
  brands: [
    { name: 'iPhone', icon: 'fab fa-apple' },
    { name: 'Samsung', icon: 'fas fa-mobile-alt' },
    { name: 'Tecno', icon: 'fas fa-mobile-alt' },
    { name: 'Infinix', icon: 'fas fa-mobile-alt' },
    { name: 'Itel', icon: 'fas fa-mobile-alt' },
    { name: 'Huawei', icon: 'fas fa-mobile-alt' },
    { name: 'Nokia', icon: 'fas fa-mobile-alt' },
    { name: 'Google', icon: 'fab fa-google' }
  ],
  
  // Features/Why choose us
  features: [
    {
      title: 'Expert Technicians',
      description: 'Years of experience with all phone models',
      icon: 'fas fa-user-tie'
    },
    {
      title: 'Genuine Parts',
      description: 'We use only quality replacement parts',
      icon: 'fas fa-check-double'
    },
    {
      title: 'Fast Service',
      description: 'Most repairs done within 1-2 hours',
      icon: 'fas fa-clock'
    },
    {
      title: 'Warranty',
      description: 'All repairs and phones come with warranty',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Fair Prices',
      description: 'Transparent pricing, no hidden fees',
      icon: 'fas fa-tags'
    },
    {
      title: 'Free Diagnostics',
      description: 'We diagnose your phone for free',
      icon: 'fas fa-stethoscope'
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      name: 'Sarah K.',
      comment: 'Best phone repair in Kampala! Fixed my iPhone screen in just 1 hour.',
      rating: 5
    },
    {
      name: 'John M.',
      comment: 'Bought a Samsung from them. Great price and warranty. Highly recommend!',
      rating: 5
    },
    {
      name: 'Peter W.',
      comment: 'Professional service, fair prices. Derick knows his stuff!',
      rating: 5
    }
  ],
  
  // Stats
  stats: [
    { number: '1000+', label: 'Phones Repaired', icon: 'fas fa-tools' },
    { number: '500+', label: 'Phones Sold', icon: 'fas fa-shopping-cart' },
    { number: '5+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
    { number: '100%', label: 'Satisfaction', icon: 'fas fa-smile' }
  ],
  
  // SEO
  seo: {
    title: 'Bunjoz Hub - Phone Repair & Sales in Kampala | Derick',
    keywords: 'phone repair, phone sales, smartphone repair, iPhone repair, Samsung repair, Kampala, Uganda, Derick',
    author: 'Derick - Bunjoz Hub'
  }
};
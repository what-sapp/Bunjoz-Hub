// Bunjoz Hub Configuration
module.exports = {
  // Business Info
  business: {
    name: 'Bunjoz Hub',
    tagline: 'Your Trusted Phone Repair & Sales Hub',
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
  
  // Images (using placeholder images - replace with your own)
  images: {
    logo: 'https://via.placeholder.com/150x50?text=Bunjoz+Hub',
    hero: 'https://via.placeholder.com/1200x400?text=Phone+Repair+Services',
    repair: 'https://via.placeholder.com/600x400?text=Phone+Repair',
    sales: 'https://via.placeholder.com/600x400?text=Phones+for+Sale',
    accessories: 'https://via.placeholder.com/600x400?text=Accessories',
    about: 'https://via.placeholder.com/600x400?text=About+Us',
    team: 'https://via.placeholder.com/300x300?text=Our+Team',
    default_phone: 'https://via.placeholder.com/300x400?text=Phone+Image'
  },
  
  // Services Offered - NO PRICES
  services: [
    {
      name: 'Screen Replacement',
      icon: 'fas fa-mobile-alt',
      description: 'Cracked screen? We replace screens for all models with high-quality displays.',
      features: ['All models supported', 'Quality displays', 'Fast service']
    },
    {
      name: 'Battery Replacement',
      icon: 'fas fa-battery-full',
      description: 'Battery draining fast? Get a genuine replacement and enjoy full day usage.',
      features: ['Genuine batteries', 'Quick installation', 'Testing included']
    },
    {
      name: 'Charging Port Repair',
      icon: 'fas fa-charging-station',
      description: 'Phone not charging? We fix or replace charging ports quickly.',
      features: ['Port cleaning', 'Port replacement', 'Fast charging fix']
    },
    {
      name: 'Water Damage Repair',
      icon: 'fas fa-water',
      description: 'Dropped in water? Bring it immediately for professional cleaning and repair.',
      features: ['Ultrasonic cleaning', 'Corrosion treatment', 'Component repair']
    },
    {
      name: 'Camera Repair',
      icon: 'fas fa-camera',
      description: 'Blurry photos or camera not working? We fix front and rear cameras.',
      features: ['Front camera', 'Rear camera', 'Camera glass replacement']
    },
    {
      name: 'Speaker & Mic Repair',
      icon: 'fas fa-volume-up',
      description: 'No sound or others cant hear you? We fix all audio issues.',
      features: ['Speaker repair', 'Microphone fix', 'Audio IC repair']
    },
    {
      name: 'Software Issues',
      icon: 'fas fa-code',
      description: 'Phone frozen, boot loop, or software problems? We can fix it.',
      features: ['OS reinstallation', 'Virus removal', 'Boot loop fix']
    },
    {
      name: 'Water Damage Repair',
      icon: 'fas fa-tint',
      description: 'Emergency water damage repair with specialized cleaning equipment.',
      features: ['Immediate service', 'Deep cleaning', 'Parts salvaging']
    }
  ],
  
  // Brands we work with
  brands: [
    'iPhone', 'Samsung', 'Tecno', 'Infinix', 'Itel', 
    'Huawei', 'Nokia', 'Oppo', 'Vivo', 'Realme', 'Google'
  ],
  
  // Features/Why choose us
  features: [
    'Expert Technicians with years of experience',
    'Genuine parts only',
    'Most repairs done within 1-2 hours',
    'Warranty on all repairs and phones',
    'Fair and transparent pricing',
    'Customer satisfaction guaranteed',
    'Free diagnostics',
    'Same-day service for most repairs'
  ],
  
  // SEO
  seo: {
    title: 'Bunjoz Hub - Phone Repair & Sales in Kampala',
    keywords: 'phone repair, phone sales, smartphone repair, iPhone repair, Samsung repair, Kampala, Uganda',
    author: 'Bunjoz Hub'
  }
};
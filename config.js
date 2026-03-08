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
  
  // Images
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
    },
    {
      name: 'Speaker & Mic Repair',
      icon: 'fas fa-volume-up',
      description: 'No sound or others cant hear you? We fix all audio issues.',
      features: ['Speaker repair', 'Microphone fix', 'Audio IC repair', 'Quick service']
    },
    {
      name: 'Back Cover Replacement',
      icon: 'fas fa-tablet-alt',
      description: 'Broken back glass or plastic cover? We replace it with original quality parts.',
      features: ['Glass back', 'Plastic back', 'Metal back', 'Color matching']
    }
  ],
  
  // UGANDA & AFRICA BRANDS - Comprehensive List (30+ Brands)
  brands: [
    // Premium/International Brands
    { name: 'iPhone (Apple)', icon: 'fab fa-apple' },
    { name: 'Samsung', icon: 'fas fa-mobile-alt' },
    { name: 'Google Pixel', icon: 'fab fa-google' },
    { name: 'Nokia', icon: 'fas fa-mobile-alt' },
    { name: 'Sony Xperia', icon: 'fab fa-sony' },
    { name: 'Motorola', icon: 'fas fa-mobile-alt' },
    { name: 'HTC', icon: 'fas fa-mobile-alt' },
    { name: 'LG', icon: 'fas fa-mobile-alt' },
    { name: 'BlackBerry', icon: 'fas fa-mobile-alt' },
    
    // Chinese Brands - Very Popular in Uganda
    { name: 'Tecno', icon: 'fas fa-mobile-alt' },
    { name: 'Infinix', icon: 'fas fa-mobile-alt' },
    { name: 'Itel', icon: 'fas fa-mobile-alt' },
    { name: 'Huawei', icon: 'fas fa-mobile-alt' },
    { name: 'Oppo', icon: 'fas fa-mobile-alt' },
    { name: 'Vivo', icon: 'fas fa-mobile-alt' },
    { name: 'Xiaomi', icon: 'fas fa-mobile-alt' },
    { name: 'Redmi', icon: 'fas fa-mobile-alt' },
    { name: 'Realme', icon: 'fas fa-mobile-alt' },
    { name: 'OnePlus', icon: 'fas fa-mobile-alt' },
    { name: 'ZTE', icon: 'fas fa-mobile-alt' },
    { name: 'Lenovo', icon: 'fas fa-laptop' },
    
    // African & Local Brands
    { name: 'Mara Phone', icon: 'fas fa-mobile-alt' },
    { name: 'Oraimo', icon: 'fas fa-mobile-alt' },
    { name: 'Carlcare', icon: 'fas fa-tools' },
    
    // Budget/Local Favorites
    { name: 'Gionee', icon: 'fas fa-mobile-alt' },
    { name: 'QMobile', icon: 'fas fa-mobile-alt' },
    { name: 'Micromax', icon: 'fas fa-mobile-alt' },
    { name: 'Lava', icon: 'fas fa-mobile-alt' },
    { name: 'Karbonn', icon: 'fas fa-mobile-alt' },
    { name: 'Spice', icon: 'fas fa-mobile-alt' },
    
    // Feature Phones (still popular in Uganda)
    { name: 'Nokia 3310', icon: 'fas fa-phone' },
    { name: 'Tecno Pop', icon: 'fas fa-phone' },
    { name: 'Itel King', icon: 'fas fa-phone' },
    
    // Tablet Brands
    { name: 'iPad (Apple)', icon: 'fab fa-apple' },
    { name: 'Samsung Tab', icon: 'fas fa-tablet-alt' },
    { name: 'Tecno Pad', icon: 'fas fa-tablet-alt' },
    { name: 'Infinix Pad', icon: 'fas fa-tablet-alt' }
  ],
  
  // Features/Why choose us
  features: [
    {
      title: 'Expert Technicians',
      description: 'Years of experience with all phone models including Tecno, Infinix, iPhone and Samsung',
      icon: 'fas fa-user-tie'
    },
    {
      title: 'Genuine Parts',
      description: 'We use only quality replacement parts for all brands',
      icon: 'fas fa-check-double'
    },
    {
      title: 'Fast Service',
      description: 'Most repairs done within 1-2 hours while you wait',
      icon: 'fas fa-clock'
    },
    {
      title: 'Warranty',
      description: 'All repairs and phones come with warranty',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Fair Prices',
      description: 'Best prices in Kampala, no hidden fees',
      icon: 'fas fa-tags'
    },
    {
      title: 'Free Diagnostics',
      description: 'We diagnose your phone for free, no obligation',
      icon: 'fas fa-stethoscope'
    },
    {
      title: 'All Brands Supported',
      description: 'From iPhone to Tecno, we fix them all - over 30 brands!',
      icon: 'fas fa-globe-africa'
    },
    {
      title: 'Genuine Accessories',
      description: 'Original chargers, cases, and more',
      icon: 'fas fa-headphones'
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      name: 'Sarah K.',
      comment: 'Best phone repair in Kampala! Fixed my iPhone screen in just 1 hour. Derick knows his stuff!',
      rating: 5
    },
    {
      name: 'John M.',
      comment: 'Bought a Samsung from them. Great price and warranty. Highly recommend!',
      rating: 5
    },
    {
      name: 'Peter W.',
      comment: 'My Tecno Camon had water damage. They fixed it like new. Thank you Bunjoz Hub!',
      rating: 5
    },
    {
      name: 'Grace A.',
      comment: 'Best place for Infinix repairs in Kampala. Fair prices and quick service.',
      rating: 5
    },
    {
      name: 'Robert T.',
      comment: 'Got my Nokia revived here. They have parts others don\'t. Derick is a legend!',
      rating: 5
    },
    {
      name: 'Martha N.',
      comment: 'Bought an Itel phone for my mum. Great price and they even helped set it up.',
      rating: 5
    },
    {
      name: 'David O.',
      comment: 'They fixed my Huawei P30 screen in 2 hours. Perfect job!',
      rating: 5
    },
    {
      name: 'Patience N.',
      comment: 'Best place for Oppo and Vivo phones in Kampala. Very knowledgeable staff.',
      rating: 5
    }
  ],
  
  // Stats
  stats: [
    { number: '2000+', label: 'Phones Repaired', icon: 'fas fa-tools' },
    { number: '1000+', label: 'Phones Sold', icon: 'fas fa-shopping-cart' },
    { number: '30+', label: 'Brands Supported', icon: 'fas fa-mobile-alt' },
    { number: '100%', label: 'Customer Satisfaction', icon: 'fas fa-smile' }
  ],
  
  // SEO
  seo: {
    title: 'Bunjoz Hub - Phone Repair & Sales in Kampala | Derick',
    keywords: 'phone repair, phone sales, smartphone repair, iPhone repair, Samsung repair, Tecno repair, Infinix repair, Itel repair, Huawei repair, Kampala, Uganda, Derick, Bunjoz Hub',
    author: 'Derick - Bunjoz Hub'
  }
};
import { DataSource } from 'typeorm';
import { Content } from './src/content/content.entity';

export async function seedData(dataSource: DataSource) {
  const contentRepository = dataSource.getRepository(Content);

  // Navbar - TR
  const navbarTR = await contentRepository.findOne({ where: { key: 'navbar', language: 'tr' } });
  const navbarDataTR = {
    logo: '',
    brandName: 'adoreGo',
    menuItems: [
      // Header Menüleri
      { id: '1', label: 'Yurtdışı Kargo', link: '/yurtdisi-kargo', type: 'link', order: 0, isActive: true, position: 'header', parentId: null },
      { id: '2', label: 'Yurtiçi Kargo', link: '/yurtici-kargo', type: 'link', order: 1, isActive: true, position: 'header', parentId: null },
      { id: '3', label: 'Fiyat Hesapla', link: '/fiyatlar', type: 'link', order: 2, isActive: true, position: 'header', parentId: null },
      { id: '4', label: 'Gönderi Takibi', link: '/gonderi-takibi', type: 'link', order: 3, isActive: true, position: 'header', parentId: null },
      { id: '5', label: 'Blog', link: '/blog', type: 'link', order: 4, isActive: true, position: 'header', parentId: null },
      { id: '6', label: 'İletişim', link: '/iletisim', type: 'link', order: 5, isActive: true, position: 'header', parentId: null },

      // Footer Bölüm 1 - Hizmetlerimiz
      { id: '100', label: '1-Hizmetlerimiz', link: '#', type: 'link', order: 5, isActive: true, position: 'footer', parentId: null },
      { id: '101', label: 'Yurtdışı Kargo', link: '/#yurtdisi', type: 'link', order: 0, isActive: true, position: 'footer', parentId: '100' },
      { id: '102', label: 'Ekonomik Kargo', link: '/#yurtdisi', type: 'link', order: 1, isActive: true, position: 'footer', parentId: '100' },
      { id: '103', label: 'Express Kargo', link: '/#yurtdisi', type: 'link', order: 2, isActive: true, position: 'footer', parentId: '100' },
      { id: '104', label: "Yurtdışından Türkiye'ye", link: '/#yurtdisi', type: 'link', order: 3, isActive: true, position: 'footer', parentId: '100' },
      { id: '105', label: 'Yurtiçi Avantajlar', link: '/#yurtici', type: 'link', order: 4, isActive: true, position: 'footer', parentId: '100' },
      { id: '106', label: 'Alıcı Ödemeli Kargo', link: '/#yurtici', type: 'link', order: 5, isActive: true, position: 'footer', parentId: '100' },
      { id: '107', label: 'Kapıda Ödemeli Kargo', link: '/#yurtici', type: 'link', order: 6, isActive: true, position: 'footer', parentId: '100' },
      { id: '108', label: 'Büyük Desi Gönderimler', link: '/#yurtici', type: 'link', order: 7, isActive: true, position: 'footer', parentId: '100' },

      // Footer Bölüm 2 - Nasıl Çalışır?
      { id: '200', label: '2-Nasıl Çalışır?', link: '#', type: 'link', order: 6, isActive: true, position: 'footer', parentId: null },
      { id: '201', label: 'Nasıl Gönderirim?', link: '/#nasil-calisir', type: 'link', order: 0, isActive: true, position: 'footer', parentId: '200' },
      { id: '202', label: 'Kapıdan Alım – Teslim', link: '/#nasil-calisir', type: 'link', order: 1, isActive: true, position: 'footer', parentId: '200' },
      { id: '203', label: 'İlk Kez Gönderenler', link: '/#nasil-calisir', type: 'link', order: 2, isActive: true, position: 'footer', parentId: '200' },
      { id: '204', label: 'Gümrük & Evrak Rehberi', link: '/#nasil-calisir', type: 'link', order: 3, isActive: true, position: 'footer', parentId: '200' },
      { id: '205', label: 'Yurtdışı İade & Geri', link: '/#nasil-calisir', type: 'link', order: 4, isActive: true, position: 'footer', parentId: '200' },
      { id: '206', label: 'Hangi Gönderim Uygun?', link: '/#nasil-calisir', type: 'link', order: 5, isActive: true, position: 'footer', parentId: '200' },

      // Footer Bölüm 3 - Bilgi & Kaynaklar
      { id: '300', label: '3-Bilgi & Kaynaklar', link: '#', type: 'link', order: 7, isActive: true, position: 'footer', parentId: null },
      { id: '301', label: 'Blog', link: '/blog', type: 'link', order: 0, isActive: true, position: 'footer', parentId: '300' },
      { id: '302', label: 'Sıkça Sorulan Sorular', link: '/#sss', type: 'link', order: 1, isActive: true, position: 'footer', parentId: '300' },
      { id: '303', label: 'Yurtdışı Kargo Rehberi', link: '/#', type: 'link', order: 2, isActive: true, position: 'footer', parentId: '300' },
      { id: '304', label: 'Mikro İhracat Rehberi', link: '/#', type: 'link', order: 3, isActive: true, position: 'footer', parentId: '300' },
      { id: '305', label: 'Gümrük Rehberi', link: '/#', type: 'link', order: 4, isActive: true, position: 'footer', parentId: '300' },
      { id: '306', label: 'Güncel Duyurular', link: '/#', type: 'link', order: 5, isActive: true, position: 'footer', parentId: '300' },

      // Footer Bölüm 4 - Entegrasyonlar
      { id: '400', label: '4-Entegrasyonlar', link: '#', type: 'link', order: 8, isActive: true, position: 'footer', parentId: null },
      { id: '401', label: 'Shopify Entegrasyonu', link: '/#', type: 'link', order: 0, isActive: true, position: 'footer', parentId: '400' },
      { id: '402', label: 'Etsy Entegrasyonu', link: '/#', type: 'link', order: 1, isActive: true, position: 'footer', parentId: '400' },
      { id: '403', label: 'Amazon Entegrasyonu', link: '/#', type: 'link', order: 2, isActive: true, position: 'footer', parentId: '400' },
      { id: '404', label: 'WooCommerce', link: '/#', type: 'link', order: 3, isActive: true, position: 'footer', parentId: '400' },
      { id: '405', label: 'Özel Site Kargo API', link: '/#', type: 'link', order: 4, isActive: true, position: 'footer', parentId: '400' },
    ],
    ctaButtons: [
      { id: '1', label: 'PANEL', link: '/admin', icon: 'fa-user-shield', style: 'outline' },
      { id: '2', label: 'ÜYE OL', link: '#', style: 'primary' },
    ],
  };

  if (navbarTR) {
    console.log('Updating TR Navbar...');
    navbarTR.data = navbarDataTR;
    await contentRepository.save(navbarTR);
  } else {
    console.log('Creating TR Navbar...');
    await contentRepository.save({
      key: 'navbar',
      language: 'tr',
      data: navbarDataTR,
    });
  }

  // Navbar - EN
  const navbarEN = await contentRepository.findOne({ where: { key: 'navbar', language: 'en' } });
  const navbarDataEN = {
    logo: '',
    brandName: 'adoreGo',
    menuItems: [
      // Header Menüleri
      { id: '1', label: 'International Shipping', link: '/yurtdisi-kargo', type: 'link', order: 0, isActive: true, position: 'header', parentId: null },
      { id: '2', label: 'Domestic Shipping', link: '/yurtici-kargo', type: 'link', order: 1, isActive: true, position: 'header', parentId: null },
      { id: '3', label: 'Price Calculator', link: '/fiyatlar', type: 'link', order: 2, isActive: true, position: 'header', parentId: null },
      { id: '4', label: 'Track Shipment', link: '/gonderi-takibi', type: 'link', order: 3, isActive: true, position: 'header', parentId: null },
      { id: '5', label: 'Blog', link: '/blog', type: 'link', order: 4, isActive: true, position: 'header', parentId: null },
      { id: '6', label: 'Contact', link: '/iletisim', type: 'link', order: 5, isActive: true, position: 'header', parentId: null },

      // Footer Bölüm 1 - Our Services
      { id: '100', label: '1-Our Services', link: '#', type: 'link', order: 5, isActive: true, position: 'footer', parentId: null },
      { id: '101', label: 'International Shipping', link: '/#yurtdisi', type: 'link', order: 0, isActive: true, position: 'footer', parentId: '100' },
      { id: '102', label: 'Economy Shipping', link: '/#yurtdisi', type: 'link', order: 1, isActive: true, position: 'footer', parentId: '100' },
      { id: '103', label: 'Express Shipping', link: '/#yurtdisi', type: 'link', order: 2, isActive: true, position: 'footer', parentId: '100' },
      { id: '104', label: 'From Abroad to Turkey', link: '/#yurtdisi', type: 'link', order: 3, isActive: true, position: 'footer', parentId: '100' },
      { id: '105', label: 'Domestic Advantages', link: '/#yurtici', type: 'link', order: 4, isActive: true, position: 'footer', parentId: '100' },
      { id: '106', label: 'Receiver Payment', link: '/#yurtici', type: 'link', order: 5, isActive: true, position: 'footer', parentId: '100' },
      { id: '107', label: 'Cash on Delivery', link: '/#yurtici', type: 'link', order: 6, isActive: true, position: 'footer', parentId: '100' },
      { id: '108', label: 'Large Volume Shipments', link: '/#yurtici', type: 'link', order: 7, isActive: true, position: 'footer', parentId: '100' },

      // Footer Bölüm 2 - How It Works?
      { id: '200', label: '2-How It Works?', link: '#', type: 'link', order: 6, isActive: true, position: 'footer', parentId: null },
      { id: '201', label: 'How to Ship?', link: '/#nasil-calisir', type: 'link', order: 0, isActive: true, position: 'footer', parentId: '200' },
      { id: '202', label: 'Door to Door', link: '/#nasil-calisir', type: 'link', order: 1, isActive: true, position: 'footer', parentId: '200' },
      { id: '203', label: 'First Time Shippers', link: '/#nasil-calisir', type: 'link', order: 2, isActive: true, position: 'footer', parentId: '200' },
      { id: '204', label: 'Customs & Documents Guide', link: '/#nasil-calisir', type: 'link', order: 3, isActive: true, position: 'footer', parentId: '200' },
      { id: '205', label: 'International Returns', link: '/#nasil-calisir', type: 'link', order: 4, isActive: true, position: 'footer', parentId: '200' },
      { id: '206', label: 'Which Shipping is Right?', link: '/#nasil-calisir', type: 'link', order: 5, isActive: true, position: 'footer', parentId: '200' },

      // Footer Bölüm 3 - Info & Resources
      { id: '300', label: '3-Info & Resources', link: '#', type: 'link', order: 7, isActive: true, position: 'footer', parentId: null },
      { id: '301', label: 'Blog', link: '/blog', type: 'link', order: 0, isActive: true, position: 'footer', parentId: '300' },
      { id: '302', label: 'FAQ', link: '/#sss', type: 'link', order: 1, isActive: true, position: 'footer', parentId: '300' },
      { id: '303', label: 'International Shipping Guide', link: '/#', type: 'link', order: 2, isActive: true, position: 'footer', parentId: '300' },
      { id: '304', label: 'Micro Export Guide', link: '/#', type: 'link', order: 3, isActive: true, position: 'footer', parentId: '300' },
      { id: '305', label: 'Customs Guide', link: '/#', type: 'link', order: 4, isActive: true, position: 'footer', parentId: '300' },
      { id: '306', label: 'Latest Announcements', link: '/#', type: 'link', order: 5, isActive: true, position: 'footer', parentId: '300' },

      // Footer Bölüm 4 - Integrations
      { id: '400', label: '4-Integrations', link: '#', type: 'link', order: 8, isActive: true, position: 'footer', parentId: null },
      { id: '401', label: 'Shopify Integration', link: '/#', type: 'link', order: 0, isActive: true, position: 'footer', parentId: '400' },
      { id: '402', label: 'Etsy Integration', link: '/#', type: 'link', order: 1, isActive: true, position: 'footer', parentId: '400' },
      { id: '403', label: 'Amazon Integration', link: '/#', type: 'link', order: 2, isActive: true, position: 'footer', parentId: '400' },
      { id: '404', label: 'WooCommerce', link: '/#', type: 'link', order: 3, isActive: true, position: 'footer', parentId: '400' },
      { id: '405', label: 'Custom Site Shipping API', link: '/#', type: 'link', order: 4, isActive: true, position: 'footer', parentId: '400' },
    ],
    ctaButtons: [
      { id: '1', label: 'PANEL', link: '/admin', icon: 'fa-user-shield', style: 'outline' },
      { id: '2', label: 'SIGN UP', link: '#', style: 'primary' },
    ],
  };

  if (navbarEN) {
    console.log('Updating EN Navbar...');
    navbarEN.data = navbarDataEN;
    await contentRepository.save(navbarEN);
  } else {
    console.log('Creating EN Navbar...');
    await contentRepository.save({
      key: 'navbar',
      language: 'en',
      data: navbarDataEN,
    });
  }

  // Hero - TR (PDF'den güncellendi)
  const heroTR = await contentRepository.findOne({ where: { key: 'hero', language: 'tr' } });
  if (heroTR) {
    heroTR.data = {
      ...heroTR.data,
      title: 'Kazanç\nYurtdışında.\nUygun Kargo Bizde.',
      subtitle: 'Yurtdışına satış yapanlar için uygun fiyatlı, kapıdan alım kapıya teslim kargo çözümleri.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      buttons: [
        { text: 'Ücretsiz Fiyat Al', icon: 'fa-calculator', style: 'success' },
        { text: 'Ücretsiz Üye Ol', icon: 'fa-user-plus', style: 'outline' },
      ],
      badges: [
        { text: 'BAŞVURU GEREKMEZ', icon: 'fa-check', color: 'blue' },
        { text: 'SABİT FİYAT GARANTİSİ', icon: 'fa-check', color: 'green' },
      ],
      stats: [
        { value: '220+', label: 'GLOBAL ÜLKE AĞI', icon: 'fa-globe-africa' },
        { value: '35 Yıl', label: 'SEKTÖREL TECRÜBE', icon: 'fa-award' },
      ],
    };
    await contentRepository.save(heroTR);
  } else {
    await contentRepository.save({
      key: 'hero',
      language: 'tr',
      data: {
        title: 'Kazanç\nYurtdışında.\nUygun Kargo Bizde.',
        subtitle: 'Yurtdışına satış yapanlar için uygun fiyatlı, kapıdan alım kapıya teslim kargo çözümleri.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
        buttons: [
          { text: 'Ücretsiz Fiyat Al', icon: 'fa-calculator', style: 'success' },
          { text: 'Ücretsiz Üye Ol', icon: 'fa-user-plus', style: 'outline' },
        ],
        badges: [
          { text: 'BAŞVURU GEREKMEZ', icon: 'fa-check', color: 'blue' },
          { text: 'SABİT FİYAT GARANTİSİ', icon: 'fa-check', color: 'green' },
        ],
        stats: [
          { value: '220+', label: 'GLOBAL ÜLKE AĞI', icon: 'fa-globe-africa' },
          { value: '35 Yıl', label: 'SEKTÖREL TECRÜBE', icon: 'fa-award' },
        ],
      },
    });
  }

  // Hero - EN (PDF'den güncellendi)
  const heroEN = await contentRepository.findOne({ where: { key: 'hero', language: 'en' } });
  if (heroEN) {
    heroEN.data = {
      ...heroEN.data,
      title: 'Profit\nAbroad.\nAffordable Shipping Here.',
      subtitle: 'Affordable pricing for those selling abroad, door-to-door pickup and delivery cargo solutions.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      buttons: [
        { text: 'Get Free Quote', icon: 'fa-calculator', style: 'success' },
        { text: 'Free Sign Up', icon: 'fa-user-plus', style: 'outline' },
      ],
      badges: [
        { text: 'NO APPLICATION REQUIRED', icon: 'fa-check', color: 'blue' },
        { text: 'FIXED PRICE GUARANTEE', icon: 'fa-check', color: 'green' },
      ],
      stats: [
        { value: '220+', label: 'GLOBAL NETWORK', icon: 'fa-globe-africa' },
        { value: '35 Years', label: 'INDUSTRY EXPERIENCE', icon: 'fa-award' },
      ],
    };
    await contentRepository.save(heroEN);
  } else {
    await contentRepository.save({
      key: 'hero',
      language: 'en',
      data: {
        title: 'Profit\nAbroad.\nAffordable Shipping Here.',
        subtitle: 'Affordable pricing for those selling abroad, door-to-door pickup and delivery cargo solutions.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
        buttons: [
          { text: 'Get Free Quote', icon: 'fa-calculator', style: 'success' },
          { text: 'Free Sign Up', icon: 'fa-user-plus', style: 'outline' },
        ],
        badges: [
          { text: 'NO APPLICATION REQUIRED', icon: 'fa-check', color: 'blue' },
          { text: 'FIXED PRICE GUARANTEE', icon: 'fa-check', color: 'green' },
        ],
        stats: [
          { value: '220+', label: 'GLOBAL NETWORK', icon: 'fa-globe-africa' },
          { value: '35 Years', label: 'INDUSTRY EXPERIENCE', icon: 'fa-award' },
        ],
      },
    });
  }

  // Features Header - TR (Görseldeki tasarım: Neden adoreGo?)
  const featuresHeaderTR = await contentRepository.findOne({ where: { key: 'featuresHeader', language: 'tr' } });
  if (featuresHeaderTR) {
    featuresHeaderTR.data = {
      badge: '',
      title: 'Neden adoreGo?',
      subtitle: 'Yurtdışı kargo gönderiminde en iyi deneyim için ihtiyacınız olan her şey',
    };
    await contentRepository.save(featuresHeaderTR);
  } else {
    await contentRepository.save({
      key: 'featuresHeader',
      language: 'tr',
      data: {
        badge: '',
        title: 'Neden adoreGo?',
        subtitle: 'Yurtdışı kargo gönderiminde en iyi deneyim için ihtiyacınız olan her şey',
      },
    });
  }

  // Features Header - EN
  const featuresHeaderEN = await contentRepository.findOne({ where: { key: 'featuresHeader', language: 'en' } });
  if (featuresHeaderEN) {
    featuresHeaderEN.data = {
      badge: '',
      title: 'Why adoreGo?',
      subtitle: 'Everything you need for the best experience in international shipping',
    };
    await contentRepository.save(featuresHeaderEN);
  } else {
    await contentRepository.save({
      key: 'featuresHeader',
      language: 'en',
      data: {
        badge: '',
        title: 'Why adoreGo?',
        subtitle: 'Everything you need for the best experience in international shipping',
      },
    });
  }

  // Features - TR (Görseldeki 4 özellik: Hızlı Entegrasyon, Tam Güvence, Global Takip, Rekabetçi Fiyat)
  const featuresTR = await contentRepository.findOne({ where: { key: 'features', language: 'tr' } });
  if (featuresTR) {
    featuresTR.data = [
      {
        id: 1,
        icon: 'fa-rocket',
        color: 'bg-blue-500',
        title: 'Hızlı Entegrasyon',
        description: 'Pazaryeri mağazalarınızı dakikalar içinde bağlayın, gönderilerinizi otomatik yönetin.',
        order: 0
      },
      {
        id: 2,
        icon: 'fa-shield-halved',
        color: 'bg-green-500',
        title: 'Tam Güvence',
        description: 'adoreGo ile tüm paketleriniz sigortalı ve uçtan uca takip sistemimizle koruma altında.',
        order: 1
      },
      {
        id: 3,
        icon: 'fa-map-location-dot',
        color: 'bg-purple-500',
        title: 'Global Takip',
        description: 'Dünyanın neresinde olursa olsun kargonuzu canlı harita üzerinden takip edin.',
        order: 2
      },
      {
        id: 4,
        icon: 'fa-hand-holding-dollar',
        color: 'bg-orange-500',
        title: 'Rekabetçi Fiyat',
        description: 'Hacminiz ne olursa olsun, en uygun birim fiyat garantisi ile lojistik maliyetlerinizi düşürün.',
        order: 3
      }
    ];
    await contentRepository.save(featuresTR);
  } else {
    await contentRepository.save({
      key: 'features',
      language: 'tr',
      data: [
        {
          id: 1,
          icon: 'fa-rocket',
          color: 'bg-blue-500',
          title: 'Hızlı Entegrasyon',
          description: 'Pazaryeri mağazalarınızı dakikalar içinde bağlayın, gönderilerinizi otomatik yönetin.',
          order: 0
        },
        {
          id: 2,
          icon: 'fa-shield-halved',
          color: 'bg-green-500',
          title: 'Tam Güvence',
          description: 'adoreGo ile tüm paketleriniz sigortalı ve uçtan uca takip sistemimizle koruma altında.',
          order: 1
        },
        {
          id: 3,
          icon: 'fa-map-location-dot',
          color: 'bg-purple-500',
          title: 'Global Takip',
          description: 'Dünyanın neresinde olursa olsun kargonuzu canlı harita üzerinden takip edin.',
          order: 2
        },
        {
          id: 4,
          icon: 'fa-hand-holding-dollar',
          color: 'bg-orange-500',
          title: 'Rekabetçi Fiyat',
          description: 'Hacminiz ne olursa olsun, en uygun birim fiyat garantisi ile lojistik maliyetlerinizi düşürün.',
          order: 3
        }
      ],
    });
  }

  // Features - EN
  const featuresEN = await contentRepository.findOne({ where: { key: 'features', language: 'en' } });
  if (featuresEN) {
    featuresEN.data = [
      {
        id: 1,
        icon: 'fa-rocket',
        color: 'bg-blue-500',
        title: 'Fast Integration',
        description: 'Connect your marketplace stores in minutes and manage your shipments automatically.',
        order: 0
      },
      {
        id: 2,
        icon: 'fa-shield-halved',
        color: 'bg-green-500',
        title: 'Full Protection',
        description: 'All your packages are insured with adoreGo and protected by our end-to-end tracking system.',
        order: 1
      },
      {
        id: 3,
        icon: 'fa-map-location-dot',
        color: 'bg-purple-500',
        title: 'Global Tracking',
        description: 'Track your shipment on a live map, wherever it is in the world.',
        order: 2
      },
      {
        id: 4,
        icon: 'fa-hand-holding-dollar',
        color: 'bg-orange-500',
        title: 'Competitive Pricing',
        description: 'Reduce your logistics costs with the best unit price guarantee, regardless of your volume.',
        order: 3
      }
    ];
    await contentRepository.save(featuresEN);
  } else {
    await contentRepository.save({
      key: 'features',
      language: 'en',
      data: [
        {
          id: 1,
          icon: 'fa-rocket',
          color: 'bg-blue-500',
          title: 'Fast Integration',
          description: 'Connect your marketplace stores in minutes and manage your shipments automatically.',
          order: 0
        },
        {
          id: 2,
          icon: 'fa-shield-halved',
          color: 'bg-green-500',
          title: 'Full Protection',
          description: 'All your packages are insured with adoreGo and protected by our end-to-end tracking system.',
          order: 1
        },
        {
          id: 3,
          icon: 'fa-map-location-dot',
          color: 'bg-purple-500',
          title: 'Global Tracking',
          description: 'Track your shipment on a live map, wherever it is in the world.',
          order: 2
        },
        {
          id: 4,
          icon: 'fa-hand-holding-dollar',
          color: 'bg-orange-500',
          title: 'Competitive Pricing',
          description: 'Reduce your logistics costs with the best unit price guarantee, regardless of your volume.',
          order: 3
        }
      ],
    });
  }

  // FAQ Header - TR
  await contentRepository.save({
    key: 'faqHeader',
    language: 'tr',
    data: {
      title: 'Sıkça Sorulan Sorular',
      subtitle: 'Yurtdışı kargo hizmetimiz hakkında merak ettiğiniz her şey',
    },
  });

  // FAQ Header - EN
  await contentRepository.save({
    key: 'faqHeader',
    language: 'en',
    data: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you wonder about our international shipping service',
    },
  });

  // FAQ - TR (PDF'den detaylı sorular)
  const faqTR = await contentRepository.findOne({ where: { key: 'faq', language: 'tr' } });
  if (faqTR) {
    faqTR.data = [
      {
        id: '1',
        question: 'Nasıl Gönderirim?',
        answer: 'Kapıdan Alım – Teslim: Gönderinizi adresinizden alıyoruz, alıcının adresine teslim ediyoruz. Tüm süreç tek panelden takip edilir.'
      },
      {
        id: '2',
        question: 'Kapıdan Alım – Teslim nasıl çalışır?',
        answer: 'Gönderinizi adresinizden alıyoruz, alıcının adresine teslim ediyoruz. Size sadece gönderi oluşturmanız yeterli. Kalan her şeyi biz hallediyoruz.'
      },
      {
        id: '3',
        question: 'İlk Kez Gönderenler için ne var?',
        answer: 'Daha önce hiç yurtdışına göndermediysen bile rahatça kullanabilirsin. İlk gönderim en kolayıdır. İlk gönderiminde de güvenle kargo oluştur. İlk kez gönderiyorsan, sistem seni yönlendirir.'
      },
      {
        id: '4',
        question: 'Gümrük & Evrak Rehberi',
        answer: 'Bilmen gereken kadarını bil, gerisini sisteme bırak. Gerekli bilgiler gönderi oluştururken sistem tarafından sana sorulur. Karmaşık Evraklarla Uğraşmazsın, Yanlış Ürünlerde Uyarı Alırsın. Tüm gümrük süreçlerinde biz destek sağlarız.'
      },
      {
        id: '5',
        question: 'Yurtdışı İade & Geri Gönderim',
        answer: 'Teslim edilemeyen yurtdışı gönderilerde iade ve geri gönderim süreci kontrol altındadır. İade veya geri dönüş durumları panelden takip edilir. Sürprizle Karşılaşmazsın, Gönderin yolda kalırsa süreci biz yönetiriz.'
      },
      {
        id: '6',
        question: 'Hangi Gönderim Bana Uygun?',
        answer: 'Kararsızsan sorun değil. Gönderinin aciliyetine ve önceliğine göre en uygun seçeneği sistem senin için belirler. Fiyat Öncelikliyse: Ekonomik Kargo. Hız Öncelikliyse: Express Kargo. Satış Amaçlıysa: Mikro İhracat Gönderimi. Seçmek zorunda değilsin, İhtiyacını söyle, gerisini bize bırak.'
      },
      {
        id: '7',
        question: 'Mikro İhracat Satış Amaçlı Gönderimler',
        answer: 'Yurtdışına ürün satışı yapıyorsan, Mikro ihracata uygun gönderim seçenekleriyle kargonu gönderebilirsin. Büyük firma olman gerekmez. Küçük adetli satışlar için de mikro ihracat yapılabilir. Satış amaçlı gönderimlerde gerekli bilgiler sistem tarafından sorulur.'
      },
      {
        id: '8',
        question: 'Fiyat nasıl hesaplanır?',
        answer: 'Göndereceğin ülkeyi ve paketin ağırlığını girersin. Sistem sana en uygun yurtdışı fiyatını anında gösterir. Ücretsiz fiyat almak için fiyat hesapla bölümünü kullanabilirsin.'
      },
      {
        id: '9',
        question: 'Yurtiçi kargo fiyatları nasıl belirlenir?',
        answer: 'Yurtdışı gönderi yaptıktan sonra, yurtiçi kargo fiyatların otomatik olarak daha avantajlı hale gelir. Sistem bunu otomatik uygular. Ne kadar gönderirsen, o kadar avantajlı olursun.'
      },
      {
        id: '10',
        question: 'Hangi ülkelere gönderim yapılabilir?',
        answer: '220+ ülkeye gönderim yapılabilir. En çok gönderilen ülkeler: Almanya, Hollanda, Fransa, Amerika ve diğer Avrupa/Amerika ülkeleri. Ülkeni seç, fiyatı anında gör.'
      }
    ];
    await contentRepository.save(faqTR);
  } else {
    await contentRepository.save({
      key: 'faq',
      language: 'tr',
      data: [
        {
          id: '1',
          question: 'Nasıl Gönderirim?',
          answer: 'Kapıdan Alım – Teslim: Gönderinizi adresinizden alıyoruz, alıcının adresine teslim ediyoruz. Tüm süreç tek panelden takip edilir.'
        },
        {
          id: '2',
          question: 'Kapıdan Alım – Teslim nasıl çalışır?',
          answer: 'Gönderinizi adresinizden alıyoruz, alıcının adresine teslim ediyoruz. Size sadece gönderi oluşturmanız yeterli. Kalan her şeyi biz hallediyoruz.'
        },
        {
          id: '3',
          question: 'İlk Kez Gönderenler için ne var?',
          answer: 'Daha önce hiç yurtdışına göndermediysen bile rahatça kullanabilirsin. İlk gönderim en kolayıdır. İlk gönderiminde de güvenle kargo oluştur. İlk kez gönderiyorsan, sistem seni yönlendirir.'
        },
        {
          id: '4',
          question: 'Gümrük & Evrak Rehberi',
          answer: 'Bilmen gereken kadarını bil, gerisini sisteme bırak. Gerekli bilgiler gönderi oluştururken sistem tarafından sana sorulur. Karmaşık Evraklarla Uğraşmazsın, Yanlış Ürünlerde Uyarı Alırsın. Tüm gümrük süreçlerinde biz destek sağlarız.'
        },
        {
          id: '5',
          question: 'Yurtdışı İade & Geri Gönderim',
          answer: 'Teslim edilemeyen yurtdışı gönderilerde iade ve geri gönderim süreci kontrol altındadır. İade veya geri dönüş durumları panelden takip edilir. Sürprizle Karşılaşmazsın, Gönderin yolda kalırsa süreci biz yönetiriz.'
        },
        {
          id: '6',
          question: 'Hangi Gönderim Bana Uygun?',
          answer: 'Kararsızsan sorun değil. Gönderinin aciliyetine ve önceliğine göre en uygun seçeneği sistem senin için belirler. Fiyat Öncelikliyse: Ekonomik Kargo. Hız Öncelikliyse: Express Kargo. Satış Amaçlıysa: Mikro İhracat Gönderimi. Seçmek zorunda değilsin, İhtiyacını söyle, gerisini bize bırak.'
        },
        {
          id: '7',
          question: 'Mikro İhracat Satış Amaçlı Gönderimler',
          answer: 'Yurtdışına ürün satışı yapıyorsan, Mikro ihracata uygun gönderim seçenekleriyle kargonu gönderebilirsin. Büyük firma olman gerekmez. Küçük adetli satışlar için de mikro ihracat yapılabilir. Satış amaçlı gönderimlerde gerekli bilgiler sistem tarafından sorulur.'
        },
        {
          id: '8',
          question: 'Fiyat nasıl hesaplanır?',
          answer: 'Göndereceğin ülkeyi ve paketin ağırlığını girersin. Sistem sana en uygun yurtdışı fiyatını anında gösterir. Ücretsiz fiyat almak için fiyat hesapla bölümünü kullanabilirsin.'
        },
        {
          id: '9',
          question: 'Yurtiçi kargo fiyatları nasıl belirlenir?',
          answer: 'Yurtdışı gönderi yaptıktan sonra, yurtiçi kargo fiyatların otomatik olarak daha avantajlı hale gelir. Sistem bunu otomatik uygular. Ne kadar gönderirsen, o kadar avantajlı olursun.'
        },
        {
          id: '10',
          question: 'Hangi ülkelere gönderim yapılabilir?',
          answer: '220+ ülkeye gönderim yapılabilir. En çok gönderilen ülkeler: Almanya, Hollanda, Fransa, Amerika ve diğer Avrupa/Amerika ülkeleri. Ülkeni seç, fiyatı anında gör.'
        }
      ],
    });
  }

  // FAQ - EN
  await contentRepository.save({
    key: 'faq',
    language: 'en',
    data: [],
  });

  // Partners - TR
  const partnersTR = await contentRepository.findOne({ where: { key: 'partners', language: 'tr' } });
  if (partnersTR) {
    partnersTR.data = [
      {
        name: 'DHL',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/DHL-Logo.png',
        color: 'bg-gradient-to-br from-yellow-400 to-red-500'
      },
      {
        name: 'FedEx',
        logo: 'https://logos-world.net/wp-content/uploads/2020/03/FedEx-Logo.png',
        color: 'bg-gradient-to-br from-purple-500 to-orange-500'
      },
      {
        name: 'UPS',
        logo: 'https://logos-world.net/wp-content/uploads/2020/03/UPS-Logo.png',
        color: 'bg-gradient-to-br from-yellow-600 to-yellow-700'
      },
      {
        name: 'TNT',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/TNT-Logo.png',
        color: 'bg-gradient-to-br from-orange-500 to-red-600'
      },
      {
        name: 'PTT Kargo',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/PTT_Kargo_logo.png/512px-PTT_Kargo_logo.png',
        color: 'bg-gradient-to-br from-red-500 to-blue-500'
      },
      {
        name: 'MNG Kargo',
        logo: 'https://logo.clearbit.com/mngkargo.com.tr',
        color: 'bg-gradient-to-br from-orange-400 to-orange-600'
      },
      {
        name: 'Aras Kargo',
        logo: 'https://logo.clearbit.com/araskargo.com.tr',
        color: 'bg-gradient-to-br from-blue-500 to-blue-700'
      },
      {
        name: 'Yurtiçi Kargo',
        logo: 'https://logo.clearbit.com/yurticikargo.com',
        color: 'bg-gradient-to-br from-green-500 to-green-700'
      }
    ];
    await contentRepository.save(partnersTR);
  } else {
    await contentRepository.save({
      key: 'partners',
      language: 'tr',
      data: [
        {
          name: 'DHL',
          logo: 'https://logos-world.net/wp-content/uploads/2020/04/DHL-Logo.png',
          color: 'bg-gradient-to-br from-yellow-400 to-red-500'
        },
        {
          name: 'FedEx',
          logo: 'https://logos-world.net/wp-content/uploads/2020/03/FedEx-Logo.png',
          color: 'bg-gradient-to-br from-purple-500 to-orange-500'
        },
        {
          name: 'UPS',
          logo: 'https://logos-world.net/wp-content/uploads/2020/03/UPS-Logo.png',
          color: 'bg-gradient-to-br from-yellow-600 to-yellow-700'
        },
        {
          name: 'TNT',
          logo: 'https://logos-world.net/wp-content/uploads/2020/04/TNT-Logo.png',
          color: 'bg-gradient-to-br from-orange-500 to-red-600'
        },
        {
          name: 'PTT Kargo',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/PTT_Kargo_logo.png/512px-PTT_Kargo_logo.png',
          color: 'bg-gradient-to-br from-red-500 to-blue-500'
        },
        {
          name: 'MNG Kargo',
          logo: 'https://logo.clearbit.com/mngkargo.com.tr',
          color: 'bg-gradient-to-br from-orange-400 to-orange-600'
        },
        {
          name: 'Aras Kargo',
          logo: 'https://logo.clearbit.com/araskargo.com.tr',
          color: 'bg-gradient-to-br from-blue-500 to-blue-700'
        },
        {
          name: 'Yurtiçi Kargo',
          logo: 'https://logo.clearbit.com/yurticikargo.com',
          color: 'bg-gradient-to-br from-green-500 to-green-700'
        }
      ],
    });
  }

  // Partners - EN
  const partnersEN = await contentRepository.findOne({ where: { key: 'partners', language: 'en' } });
  if (partnersEN) {
    partnersEN.data = [
      {
        name: 'DHL',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/DHL-Logo.png',
        color: 'bg-gradient-to-br from-yellow-400 to-red-500'
      },
      {
        name: 'FedEx',
        logo: 'https://logos-world.net/wp-content/uploads/2020/03/FedEx-Logo.png',
        color: 'bg-gradient-to-br from-purple-500 to-orange-500'
      },
      {
        name: 'UPS',
        logo: 'https://logos-world.net/wp-content/uploads/2020/03/UPS-Logo.png',
        color: 'bg-gradient-to-br from-yellow-600 to-yellow-700'
      },
      {
        name: 'TNT',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/TNT-Logo.png',
        color: 'bg-gradient-to-br from-orange-500 to-red-600'
      },
      {
        name: 'PTT Cargo',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/PTT_Kargo_logo.png/512px-PTT_Kargo_logo.png',
        color: 'bg-gradient-to-br from-red-500 to-blue-500'
      },
      {
        name: 'MNG Cargo',
        logo: 'https://logo.clearbit.com/mngkargo.com.tr',
        color: 'bg-gradient-to-br from-orange-400 to-orange-600'
      },
      {
        name: 'Aras Cargo',
        logo: 'https://logo.clearbit.com/araskargo.com.tr',
        color: 'bg-gradient-to-br from-blue-500 to-blue-700'
      },
      {
        name: 'Domestic Cargo',
        logo: 'https://logo.clearbit.com/yurticikargo.com',
        color: 'bg-gradient-to-br from-green-500 to-green-700'
      }
    ];
    await contentRepository.save(partnersEN);
  } else {
    await contentRepository.save({
      key: 'partners',
      language: 'en',
      data: [
        {
          name: 'DHL',
          logo: 'https://logos-world.net/wp-content/uploads/2020/04/DHL-Logo.png',
          color: 'bg-gradient-to-br from-yellow-400 to-red-500'
        },
        {
          name: 'FedEx',
          logo: 'https://logos-world.net/wp-content/uploads/2020/03/FedEx-Logo.png',
          color: 'bg-gradient-to-br from-purple-500 to-orange-500'
        },
        {
          name: 'UPS',
          logo: 'https://logos-world.net/wp-content/uploads/2020/03/UPS-Logo.png',
          color: 'bg-gradient-to-br from-yellow-600 to-yellow-700'
        },
        {
          name: 'TNT',
          logo: 'https://logos-world.net/wp-content/uploads/2020/04/TNT-Logo.png',
          color: 'bg-gradient-to-br from-orange-500 to-red-600'
        },
        {
          name: 'PTT Cargo',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/PTT_Kargo_logo.png/512px-PTT_Kargo_logo.png',
          color: 'bg-gradient-to-br from-red-500 to-blue-500'
        },
        {
          name: 'MNG Cargo',
          logo: 'https://logo.clearbit.com/mngkargo.com.tr',
          color: 'bg-gradient-to-br from-orange-400 to-orange-600'
        },
        {
          name: 'Aras Cargo',
          logo: 'https://logo.clearbit.com/araskargo.com.tr',
          color: 'bg-gradient-to-br from-blue-500 to-blue-700'
        },
        {
          name: 'Domestic Cargo',
          logo: 'https://logo.clearbit.com/yurticikargo.com',
          color: 'bg-gradient-to-br from-green-500 to-green-700'
        }
      ],
    });
  }

  // HowItWorks - TR (PDF'den detaylı içerik)
  const howItWorksTR = await contentRepository.findOne({ where: { key: 'howItWorks', language: 'tr' } });
  if (howItWorksTR) {
    howItWorksTR.data = {
      badge: 'SÜREÇ',
      title: 'Yurtdışı Kargo',
      titleHighlight: 'Nasıl Çalışır?',
      steps: [
        {
          id: 1,
          icon: 'fa-search-dollar',
          title: 'En Uygun Fiyatı Anında Görürsün',
          description: 'Göndereceğin ülkeyi ve paketin ağırlığını girersin.\nSistem sana en uygun yurtdışı fiyatını anında gösterir.',
          color: 'bg-blue-500',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=400&fit=crop',
          order: 0,
          buttonText: 'Fiyat Hesapla',
          buttonLink: '#fiyat-hesapla',
          buttonStyle: 'primary'
        },
        {
          id: 2,
          icon: 'fa-hand-pointer',
          title: 'Biz Senin İçin Kargoyu Seçeriz',
          description: 'Kargo firması seçmek zorunda kalmazsın.\nGönderine göre en uygun, en sorunsuz seçeneği sistem otomatik belirler.',
          color: 'bg-[#4DB848]',
          image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=400&fit=crop',
          order: 1,
          buttonText: 'İletişime Geç',
          buttonLink: '#iletisim',
          buttonStyle: 'secondary'
        },
        {
          id: 3,
          icon: 'fa-truck-fast',
          title: 'Kapıdan alıp, kapıya teslim ederiz.',
          description: 'Gönderini teslim edersin, biz süreci takip ederiz.\nTakip, bilgilendirme ve destek tek yerden yapılır.',
          color: 'bg-[#102477]',
          image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=400&h=400&fit=crop',
          order: 2,
          buttonText: 'Teklif Al',
          buttonLink: '#teklif',
          buttonStyle: 'outline'
        },
        {
          id: 4,
          icon: 'fa-chart-line',
          title: 'Gönderdikçe Daha Avantajlı Olursun',
          description: 'Yurtdışı gönderim yaptıkça,\nKargo fiyatların otomatik olarak düşer.\nEkstra talep yok, sistem kendisi uygular.',
          color: 'bg-orange-500',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
          order: 3,
          buttonText: 'Hemen Başla',
          buttonLink: '#kayit',
          buttonStyle: 'primary'
        }
      ],
      buttons: [
        {
          id: 1,
          text: 'İhtiyacını seç → Fiyatı gör → Gönderini oluştur',
          link: '#fiyat-hesapla',
          style: 'primary',
          icon: 'fa-arrow-right',
          order: 0
        }
      ],
      subtitle: 'Kargo firması seçmezsin. İhtiyacını seçersin.'
    };
    await contentRepository.save(howItWorksTR);
  } else {
    await contentRepository.save({
      key: 'howItWorks',
      language: 'tr',
      data: {
        badge: 'SÜREÇ',
        title: 'Yurtdışı Kargo',
        titleHighlight: 'Nasıl Çalışır?',
        steps: [
          {
            id: 1,
            icon: 'fa-search-dollar',
            title: 'En Uygun Fiyatı Anında Görürsün',
            description: 'Göndereceğin ülkeyi ve paketin ağırlığını girersin.\nSistem sana en uygun yurtdışı fiyatını anında gösterir.',
            color: 'bg-blue-500',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=400&fit=crop',
            order: 0,
            buttonText: 'Fiyat Hesapla',
            buttonLink: '#fiyat-hesapla',
            buttonStyle: 'primary'
          },
          {
            id: 2,
            icon: 'fa-hand-pointer',
            title: 'Biz Senin İçin Kargoyu Seçeriz',
            description: 'Kargo firması seçmek zorunda kalmazsın.\nGönderine göre en uygun, en sorunsuz seçeneği sistem otomatik belirler.',
            color: 'bg-[#4DB848]',
            image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=400&fit=crop',
            order: 1,
            buttonText: 'İletişime Geç',
            buttonLink: '#iletisim',
            buttonStyle: 'secondary'
          },
          {
            id: 3,
            icon: 'fa-truck-fast',
            title: 'Kapıdan alıp, kapıya teslim ederiz.',
            description: 'Gönderini teslim edersin, biz süreci takip ederiz.\nTakip, bilgilendirme ve destek tek yerden yapılır.',
            color: 'bg-[#102477]',
            image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=400&h=400&fit=crop',
            order: 2,
            buttonText: 'Teklif Al',
            buttonLink: '#teklif',
            buttonStyle: 'outline'
          },
          {
            id: 4,
            icon: 'fa-chart-line',
            title: 'Gönderdikçe Daha Avantajlı Olursun',
            description: 'Yurtdışı gönderim yaptıkça,\nKargo fiyatların otomatik olarak düşer.\nEkstra talep yok, sistem kendisi uygular.',
            color: 'bg-orange-500',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
            order: 3,
            buttonText: 'Hemen Başla',
            buttonLink: '#kayit',
            buttonStyle: 'primary'
          }
        ],
        buttons: [
          {
            id: 1,
            text: 'İhtiyacını seç → Fiyatı gör → Gönderini oluştur',
            link: '#fiyat-hesapla',
            style: 'primary',
            icon: 'fa-arrow-right',
            order: 0
          }
        ],
        subtitle: 'Kargo firması seçmezsin. İhtiyacını seçersin.'
      },
    });
  }

  // HowItWorks - EN
  await contentRepository.save({
    key: 'howItWorks',
    language: 'en',
    data: {
      steps: [],
      buttons: [],
    },
  });

  // CTA - TR
  await contentRepository.save({
    key: 'cta',
    language: 'tr',
    data: {},
  });

  // CTA - EN
  await contentRepository.save({
    key: 'cta',
    language: 'en',
    data: {},
  });

  // Solutions - TR (adorelgo.com görseline göre: İhtiyacına Göre Akıllı Gönderim)
  const solutionsTR = await contentRepository.findOne({ where: { key: 'solutions', language: 'tr' } });
  if (solutionsTR) {
    solutionsTR.data = {
      badge: 'ÖZEL ÇÖZÜMLER',
      title: 'İhtiyacına Göre',
      highlightedTitle: 'Akıllı Gönderim.',
      buttonText: 'HEMEN BAŞLA',
      buttonLink: '#kayit',
      cardTitle: 'Hangi Gönderim Bana Uygun?',
      cardDescription: 'Kararsızsan sorun değil. Sistem, gönderinin aciliyet ve önceliğine göre en uygun gönderimi seçer.',
      services: [
        {
          id: '1',
          title: 'Mikro İhracat Satış Amaçlı Gönderimler',
          desc: 'Yurtdışına ürün satışı yapıyorsan, kargonu mikro ihracata uygun gönder. Büyük firma olman gerekmez, küçük adetli satışlar yapılabilir.',
          icon: 'fa-box-open',
          color: 'bg-blue-500',
          bgColor: 'bg-blue-50',
          order: 0
        },
        {
          id: '2',
          title: 'Büyük Desi + Alıcı Ödemeli',
          desc: 'Desisi yüksek gönderilerde kapıda nakit & kart tahsilat. Kargo ücretini alıcı ödemeli gönderebilirsin.',
          icon: 'fa-truck-loading',
          color: 'bg-purple-500',
          bgColor: 'bg-purple-50',
          order: 1
        },
        {
          id: '3',
          title: 'Alıcı Ödemeli Kargo (Yurtiçi)',
          desc: 'Kargo ücreti satıcıdan değil, teslimatta alıcıdan tahsil edilir. Alıcı nakit veya kredi kartı ile ödeyebilir.',
          icon: 'fa-hand-holding-dollar',
          color: 'bg-green-500',
          bgColor: 'bg-green-50',
          order: 2
        },
        {
          id: '4',
          title: "Yurtdışından Türkiye'ye Kargo",
          desc: "Yurtdışındaki adresinden Türkiye'deki adrese kargo gönderebilirsin. Kapıdan alım, kapıya teslim.",
          icon: 'fa-plane-arrival',
          color: 'bg-orange-500',
          bgColor: 'bg-orange-50',
          order: 3
        }
      ],
      shippingOptions: [
        {
          id: '1',
          title: 'Ekonomik Kargo',
          subtitle: 'Fiyat Öncelikliyse',
          icon: 'fa-coins',
          color: 'bg-green-500',
          description: 'Maliyetinizi düşürün. Zaman esnekliğiniz varsa en uygun fiyatlarla standart teslimat süresi ile gönderin.',
          features: ['En uygun fiyat', '5-7 iş günü teslimat', 'Güvenli taşıma'],
          order: 0
        },
        {
          id: '2',
          title: 'Express Kargo',
          subtitle: 'Hız Öncelikliyse',
          icon: 'fa-bolt',
          color: 'bg-yellow-500',
          description: 'Acil gönderimleriniz için hızlı teslimat. 2-3 iş günü içinde adrese teslim garantisi.',
          features: ['Hızlı teslimat', '2-3 iş günü', 'Öncelikli işlem'],
          order: 1
        },
        {
          id: '3',
          title: 'Mikro İhracat',
          subtitle: 'Satış Amaçlıysa',
          icon: 'fa-store',
          color: 'bg-blue-500',
          description: 'E-ticaret satışlarınız için özel çözüm. Gümrük işlemleri dahil, ticari gönderi avantajları.',
          features: ['Gümrük kolaylığı', 'Ticari fatura', 'Düşük vergi oranı'],
          order: 2
        }
      ]
    };
    await contentRepository.save(solutionsTR);
  } else {
    await contentRepository.save({
      key: 'solutions',
      language: 'tr',
      data: {
        badge: 'ÖZEL ÇÖZÜMLER',
        title: 'İhtiyacına Göre',
        highlightedTitle: 'Akıllı Gönderim.',
        buttonText: 'HEMEN BAŞLA',
        buttonLink: '#kayit',
        cardTitle: 'Hangi Gönderim Bana Uygun?',
        cardDescription: 'Kararsızsan sorun değil. Sistem, gönderinin aciliyet ve önceliğine göre en uygun gönderimi seçer.',
        services: [
          {
            id: '1',
            title: 'Mikro İhracat Satış Amaçlı Gönderimler',
            desc: 'Yurtdışına ürün satışı yapıyorsan, kargonu mikro ihracata uygun gönder. Büyük firma olman gerekmez, küçük adetli satışlar yapılabilir.',
            icon: 'fa-box-open',
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50',
            order: 0
          },
          {
            id: '2',
            title: 'Büyük Desi + Alıcı Ödemeli',
            desc: 'Desisi yüksek gönderilerde kapıda nakit & kart tahsilat. Kargo ücretini alıcı ödemeli gönderebilirsin.',
            icon: 'fa-truck-loading',
            color: 'bg-purple-500',
            bgColor: 'bg-purple-50',
            order: 1
          },
          {
            id: '3',
            title: 'Alıcı Ödemeli Kargo (Yurtiçi)',
            desc: 'Kargo ücreti satıcıdan değil, teslimatta alıcıdan tahsil edilir. Alıcı nakit veya kredi kartı ile ödeyebilir.',
            icon: 'fa-hand-holding-dollar',
            color: 'bg-green-500',
            bgColor: 'bg-green-50',
            order: 2
          },
          {
            id: '4',
            title: "Yurtdışından Türkiye'ye Kargo",
            desc: "Yurtdışındaki adresinden Türkiye'deki adrese kargo gönderebilirsin. Kapıdan alım, kapıya teslim.",
            icon: 'fa-plane-arrival',
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50',
            order: 3
          }
        ],
        shippingOptions: [
          {
            id: '1',
            title: 'Ekonomik Kargo',
            subtitle: 'Fiyat Öncelikliyse',
            icon: 'fa-coins',
            color: 'bg-green-500',
            description: 'Maliyetinizi düşürün. Zaman esnekliğiniz varsa en uygun fiyatlarla standart teslimat süresi ile gönderin.',
            features: ['En uygun fiyat', '5-7 iş günü teslimat', 'Güvenli taşıma'],
            order: 0
          },
          {
            id: '2',
            title: 'Express Kargo',
            subtitle: 'Hız Öncelikliyse',
            icon: 'fa-bolt',
            color: 'bg-yellow-500',
            description: 'Acil gönderimleriniz için hızlı teslimat. 2-3 iş günü içinde adrese teslim garantisi.',
            features: ['Hızlı teslimat', '2-3 iş günü', 'Öncelikli işlem'],
            order: 1
          },
          {
            id: '3',
            title: 'Mikro İhracat',
            subtitle: 'Satış Amaçlıysa',
            icon: 'fa-store',
            color: 'bg-blue-500',
            description: 'E-ticaret satışlarınız için özel çözüm. Gümrük işlemleri dahil, ticari gönderi avantajları.',
            features: ['Gümrük kolaylığı', 'Ticari fatura', 'Düşük vergi oranı'],
            order: 2
          }
        ]
      },
    });
  }

  // Solutions - EN
  const solutionsEN = await contentRepository.findOne({ where: { key: 'solutions', language: 'en' } });
  if (solutionsEN) {
    solutionsEN.data = {
      badge: 'SPECIAL SOLUTIONS',
      title: 'Smart Shipping',
      highlightedTitle: 'Based on Your Needs.',
      buttonText: 'GET STARTED',
      buttonLink: '#kayit',
      cardTitle: 'Which Shipping is Right for Me?',
      cardDescription: "No problem if you're undecided. The system selects the most suitable shipping based on urgency and priority.",
      services: [
        {
          id: '1',
          title: 'Micro Export for Sales Purposes',
          desc: "If you're selling products abroad, send your cargo suitable for micro export. You don't need to be a large company, small quantity sales are possible.",
          icon: 'fa-box-open',
          color: 'bg-blue-500',
          bgColor: 'bg-blue-50',
          order: 0
        },
        {
          id: '2',
          title: 'Large Volume + Receiver Payment',
          desc: 'Cash & card collection at the door for high volume shipments. You can send the cargo with receiver payment.',
          icon: 'fa-truck-loading',
          color: 'bg-purple-500',
          bgColor: 'bg-purple-50',
          order: 1
        },
        {
          id: '3',
          title: 'Receiver Payment Cargo (Domestic)',
          desc: 'Cargo fee is collected from the receiver on delivery, not from the sender. Receiver can pay by cash or credit card.',
          icon: 'fa-hand-holding-dollar',
          color: 'bg-green-500',
          bgColor: 'bg-green-50',
          order: 2
        },
        {
          id: '4',
          title: 'From Abroad to Turkey Cargo',
          desc: 'You can send cargo from your address abroad to an address in Turkey. Door-to-door pickup and delivery.',
          icon: 'fa-plane-arrival',
          color: 'bg-orange-500',
          bgColor: 'bg-orange-50',
          order: 3
        }
      ],
      shippingOptions: [
        {
          id: '1',
          title: 'Economy Shipping',
          subtitle: 'If Price is Priority',
          icon: 'fa-coins',
          color: 'bg-green-500',
          description: 'Reduce your costs. If you have time flexibility, ship with the most affordable prices and standard delivery time.',
          features: ['Best price', '5-7 business days delivery', 'Safe transport'],
          order: 0
        },
        {
          id: '2',
          title: 'Express Shipping',
          subtitle: 'If Speed is Priority',
          icon: 'fa-bolt',
          color: 'bg-yellow-500',
          description: 'Fast delivery for your urgent shipments. Guaranteed address delivery within 2-3 business days.',
          features: ['Fast delivery', '2-3 business days', 'Priority processing'],
          order: 1
        },
        {
          id: '3',
          title: 'Micro Export',
          subtitle: 'If For Sales Purpose',
          icon: 'fa-store',
          color: 'bg-blue-500',
          description: 'Special solution for your e-commerce sales. Customs procedures included, commercial shipment advantages.',
          features: ['Customs facilitation', 'Commercial invoice', 'Low tax rate'],
          order: 2
        }
      ]
    };
    await contentRepository.save(solutionsEN);
  } else {
    await contentRepository.save({
      key: 'solutions',
      language: 'en',
      data: {
        badge: 'SPECIAL SOLUTIONS',
        title: 'Smart Shipping',
        highlightedTitle: 'Based on Your Needs.',
        buttonText: 'GET STARTED',
        buttonLink: '#kayit',
        cardTitle: 'Which Shipping is Right for Me?',
        cardDescription: "No problem if you're undecided. The system selects the most suitable shipping based on urgency and priority.",
        services: [
          {
            id: '1',
            title: 'Micro Export for Sales Purposes',
            desc: "If you're selling products abroad, send your cargo suitable for micro export. You don't need to be a large company, small quantity sales are possible.",
            icon: 'fa-box-open',
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50',
            order: 0
          },
          {
            id: '2',
            title: 'Large Volume + Receiver Payment',
            desc: 'Cash & card collection at the door for high volume shipments. You can send the cargo with receiver payment.',
            icon: 'fa-truck-loading',
            color: 'bg-purple-500',
            bgColor: 'bg-purple-50',
            order: 1
          },
          {
            id: '3',
            title: 'Receiver Payment Cargo (Domestic)',
            desc: 'Cargo fee is collected from the receiver on delivery, not from the sender. Receiver can pay by cash or credit card.',
            icon: 'fa-hand-holding-dollar',
            color: 'bg-green-500',
            bgColor: 'bg-green-50',
            order: 2
          },
          {
            id: '4',
            title: 'From Abroad to Turkey Cargo',
            desc: 'You can send cargo from your address abroad to an address in Turkey. Door-to-door pickup and delivery.',
            icon: 'fa-plane-arrival',
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50',
            order: 3
          }
        ],
        shippingOptions: [
          {
            id: '1',
            title: 'Economy Shipping',
            subtitle: 'If Price is Priority',
            icon: 'fa-coins',
            color: 'bg-green-500',
            description: 'Reduce your costs. If you have time flexibility, ship with the most affordable prices and standard delivery time.',
            features: ['Best price', '5-7 business days delivery', 'Safe transport'],
            order: 0
          },
          {
            id: '2',
            title: 'Express Shipping',
            subtitle: 'If Speed is Priority',
            icon: 'fa-bolt',
            color: 'bg-yellow-500',
            description: 'Fast delivery for your urgent shipments. Guaranteed address delivery within 2-3 business days.',
            features: ['Fast delivery', '2-3 business days', 'Priority processing'],
            order: 1
          },
          {
            id: '3',
            title: 'Micro Export',
            subtitle: 'If For Sales Purpose',
            icon: 'fa-store',
            color: 'bg-blue-500',
            description: 'Special solution for your e-commerce sales. Customs procedures included, commercial shipment advantages.',
            features: ['Customs facilitation', 'Commercial invoice', 'Low tax rate'],
            order: 2
          }
        ]
      },
    });
  }

  // Target Audience - TR (Gönderdikçe Kazan bölümü - adorelgo.com görseline göre)
  const targetAudienceTR = await contentRepository.findOne({ where: { key: 'targetAudience', language: 'tr' } });
  if (targetAudienceTR) {
    targetAudienceTR.data = {
      earnSection: {
        badge: 'GÖNDERDİKÇE KAZAN',
        title: 'Yurtdışı Gönder',
        highlightedTitle: 'Yurtiçi Ucuzlasın.',
        description: 'Yurtdışı gönderi yaptığınızda sistem sizi aktif kullanıcı olarak tanır ve yurtiçi kargo fiyatlarınız otomatik olarak avantajlı hale gelir.',
        benefits: [
          { number: '01', text: 'Sistem sizi otomatik tanır, başvuru gerekmez.' },
          { number: '02', text: 'Gönderi sayınız arttıkça fiyatlar kendiliğinden düşer.' }
        ],
        card: {
          topBadge: 'AKILLI FİYATLANDIRMA',
          statusBadge: 'AKTİF',
          fromLabel: 'Standart',
          toLabel: 'Avantajlı Plus',
          discount: '-%40',
          discountLabel: 'YURTİÇİ KARGO İNDİRİMİ',
          miniCards: [
            { icon: 'fa-shipping-fast', label: 'Hızlı Teslimat' },
            { icon: 'fa-chart-line', label: 'Otomatik İndirim' }
          ]
        }
      },
      trustSection: {
        title: 'Kullananlar Bırakmıyor',
        subtitle: 'Her Gün Aktif Gönderileri olanlar',
        description: 'Instagram satıcıları, evden satış yapanlar ve küçük e-ticaretçiler yurtdışı gönderilerini her gün bu sistem üzerinden oluşturuyor.',
        subDescription: 'Tek seferlik değil, sürekli kullanılan bir sistem.',
        points: [
          {
            id: 1,
            title: 'Her Gün Aktif Gönderileri olanlar',
            description: 'Instagram satıcıları, evden satış yapanlar ve küçük e-ticaretçiler yurtdışı gönderilerini her gün bu sistem üzerinden oluşturuyor.',
            subDescription: 'Tek seferlik değil, sürekli kullanılan bir sistem.',
            order: 0
          },
          {
            id: 2,
            title: 'Birçok Ülkeye Düzenli Gönderim yapanlar',
            description: 'Avrupa ve Amerika başta olmak üzere birçok ülkeye düzenli gönderim yapan kullanıcılar.',
            order: 1
          }
        ]
      }
    };
    await contentRepository.save(targetAudienceTR);
  } else {
    await contentRepository.save({
      key: 'targetAudience',
      language: 'tr',
      data: {
        earnSection: {
          badge: 'GÖNDERDİKÇE KAZAN',
          title: 'Yurtdışı Gönder',
          highlightedTitle: 'Yurtiçi Ucuzlasın.',
          description: 'Yurtdışı gönderi yaptığınızda sistem sizi aktif kullanıcı olarak tanır ve yurtiçi kargo fiyatlarınız otomatik olarak avantajlı hale gelir.',
          benefits: [
            { number: '01', text: 'Sistem sizi otomatik tanır, başvuru gerekmez.' },
            { number: '02', text: 'Gönderi sayınız arttıkça fiyatlar kendiliğinden düşer.' }
          ],
          card: {
            topBadge: 'AKILLY FİYATLANDIRMA',
            statusBadge: 'AKTİF',
            fromLabel: 'Standart',
            toLabel: 'Avantajlı Plus',
            discount: '-%40',
            discountLabel: 'YURTİÇİ KARGO İNDİRİMİ',
            miniCards: [
              { icon: 'fa-shipping-fast', label: 'Hızlı Teslimat' },
              { icon: 'fa-chart-line', label: 'Otomatik İndirim' }
            ]
          }
        },
        trustSection: {
          title: 'Kullananlar Bırakmıyor',
          subtitle: 'Her Gün Aktif Gönderileri olanlar',
          description: 'Instagram satıcıları, evden satış yapanlar ve küçük e-ticaretçiler yurtdışı gönderilerini her gün bu sistem üzerinden oluşturuyor.',
          subDescription: 'Tek seferlik değil, sürekli kullanılan bir sistem.',
          points: [
            {
              id: 1,
              title: 'Her Gün Aktif Gönderileri olanlar',
              description: 'Instagram satıcıları, evden satış yapanlar ve küçük e-ticaretçiler yurtdışı gönderilerini her gün bu sistem üzerinden oluşturuyor.',
              subDescription: 'Tek seferlik değil, sürekli kullanılan bir sistem.',
              order: 0
            },
            {
              id: 2,
              title: 'Birçok Ülkeye Düzenli Gönderim yapanlar',
              description: 'Avrupa ve Amerika başta olmak üzere birçok ülkeye düzenli gönderim yapan kullanıcılar.',
              order: 1
            }
          ]
        }
      },
    });
  }

  // Target Audience - EN
  await contentRepository.save({
    key: 'targetAudience',
    language: 'en',
    data: {},
  });

  // Popular Destinations - TR (PDF'den: Ülkeye Göre Popüler Gönderimler)
  const popularDestinationsTR = await contentRepository.findOne({ where: { key: 'popularDestinations', language: 'tr' } });
  if (popularDestinationsTR) {
    popularDestinationsTR.data = {
      title: 'Ülkeye Göre Popüler Gönderimler',
      subtitle: 'Yurtdışına kargo gönderen satıcıların en sık tercih ettiği ülkeler burada. Bu ülkelere gönderim hem daha hızlı, hem de daha avantajlı fiyatlarla yapılır.',
      bottomText: 'En çok gönderilen ülkelere gönderim, her zaman daha avantajlı başlar.',
      miniGuide: 'Ülkeni seç → Fiyatı gör → Gönderini oluştur',
      countries: [
        {
          id: 1,
          name: 'Almanya',
          flag: '🇩🇪',
          description: 'E-ticaret ve Instagram satışlarının en yoğun olduğu ülkelerden biri.',
          subDescription: 'Küçük paketler için uygun fiyatlı ve sorunsuz gönderim',
          order: 0
        },
        {
          id: 2,
          name: 'Hollanda',
          flag: '🇳🇱',
          description: 'Avrupa içi hızlı teslimat.',
          subDescription: 'Düzenli gönderim yapanlar için ideal.',
          order: 1
        },
        {
          id: 3,
          name: 'Fransa',
          flag: '🇫🇷',
          description: 'Tekstil, aksesuar ve butik ürün gönderimleri için sık tercih edilir.',
          order: 2
        },
        {
          id: 4,
          name: 'Amerika',
          flag: '🇺🇸',
          description: 'Yüksek ürün değeri olan gönderiler için en çok kullanılan rota.',
          order: 3
        },
        {
          id: 5,
          name: 'Diğer Ülkeler',
          flag: '🌍',
          description: 'Avrupa, Amerika ve birçok farklı ülkeye gönderim yapılabilir. Ülkeni seç, fiyatı anında gör.',
          order: 4
        }
      ]
    };
    await contentRepository.save(popularDestinationsTR);
  } else {
    await contentRepository.save({
      key: 'popularDestinations',
      language: 'tr',
      data: {
        title: 'Ülkeye Göre Popüler Gönderimler',
        subtitle: 'Yurtdışına kargo gönderen satıcıların en sık tercih ettiği ülkeler burada. Bu ülkelere gönderim hem daha hızlı, hem de daha avantajlı fiyatlarla yapılır.',
        bottomText: 'En çok gönderilen ülkelere gönderim, her zaman daha avantajlı başlar.',
        miniGuide: 'Ülkeni seç → Fiyatı gör → Gönderini oluştur',
        countries: [
          {
            id: 1,
            name: 'Almanya',
            flag: '🇩🇪',
            description: 'E-ticaret ve Instagram satışlarının en yoğun olduğu ülkelerden biri.',
            subDescription: 'Küçük paketler için uygun fiyatlı ve sorunsuz gönderim',
            order: 0
          },
          {
            id: 2,
            name: 'Hollanda',
            flag: '🇳🇱',
            description: 'Avrupa içi hızlı teslimat.',
            subDescription: 'Düzenli gönderim yapanlar için ideal.',
            order: 1
          },
          {
            id: 3,
            name: 'Fransa',
            flag: '🇫🇷',
            description: 'Tekstil, aksesuar ve butik ürün gönderimleri için sık tercih edilir.',
            order: 2
          },
          {
            id: 4,
            name: 'Amerika',
            flag: '🇺🇸',
            description: 'Yüksek ürün değeri olan gönderiler için en çok kullanılan rota.',
            order: 3
          },
          {
            id: 5,
            name: 'Diğer Ülkeler',
            flag: '🌍',
            description: 'Avrupa, Amerika ve birçok farklı ülkeye gönderim yapılabilir. Ülkeni seç, fiyatı anında gör.',
            order: 4
          }
        ]
      },
    });
  }

  // Popular Destinations - EN
  await contentRepository.save({
    key: 'popularDestinations',
    language: 'en',
    data: {},
  });

  // Footer - TR (PDF'den footer menü içerikleri)
  const footerTR = await contentRepository.findOne({ where: { key: 'footer', language: 'tr' } });
  const footerDataTR = {
    sections: [
      {
        title: '1-Hizmetlerimiz',
        links: [
          { n: 'Yurtdışı Kargo', h: '/#yurtdisi' },
          { n: 'Ekonomik Kargo', h: '/#ekonomik-kargo' },
          { n: 'Express Kargo', h: '/#express-kargo' },
          { n: "Yurtdışından Türkiye'ye", h: '/#yurtdisindan-turkiye' },
          { n: 'Yurtiçi Avantajlar', h: '/#yurtici' },
          { n: 'Alıcı Ödemeli Kargo', h: '/#alici-odemeli' },
          { n: 'Kapıda Ödemeli Kargo', h: '/#kapida-odemeli' },
          { n: 'Büyük Desi Gönderimler', h: '/#buyuk-desi' }
        ]
      },
      {
        title: '2-Nasıl Çalışır?',
        links: [
          { n: 'Nasıl Gönderirim?', h: '/#nasil-gonderirim' },
          { n: 'Kapıdan Alım – Teslim', h: '/#kapi-alim-teslim' },
          { n: 'İlk Kez Gönderenler', h: '/#ilk-kez-gonder' },
          { n: 'Gümrük & Evrak Rehberi', h: '/#gumruk-evrak' },
          { n: 'Yurtdışı İade & Geri', h: '/#yurtdisi-iade' },
          { n: 'Hangi Gönderim Uygun?', h: '/#hangi-gonderim' }
        ]
      },
      {
        title: '3-Bilgi & Kaynaklar',
        links: [
          { n: 'Blog', h: '/blog' },
          { n: 'Sıkça Sorulan Sorular', h: '/#sss' },
          { n: 'Yurtdışı Kargo Rehberi', h: '/#yurtdisi-rehber' },
          { n: 'Mikro İhracat Rehberi', h: '/#mikro-ihracat' },
          { n: 'Gümrük Rehberi', h: '/#gumruk-rehber' },
          { n: 'Güncel Duyurular', h: '/#duyurular' }
        ]
      },
      {
        title: '4-Entegrasyonlar',
        links: [
          { n: 'Shopify Entegrasyonu', h: '/#shopify' },
          { n: 'Etsy Entegrasyonu', h: '/#etsy' },
          { n: 'Amazon Entegrasyonu', h: '/#amazon' },
          { n: 'WooCommerce', h: '/#woocommerce' },
          { n: 'Özel Site Kargo API', h: '/#api' }
        ]
      }
    ],
    cta: {
      title: 'Sorun mu var? Kararsız mı kaldın?',
      subtitle: 'Destek ekibimiz e-ticaret lojistik süreçlerinizde her adımda yanınızda.',
      button1Text: 'İletişime Geç',
      button1Link: '/#iletisim',
      button2Text: 'Ücretsiz Kayıt Ol',
      button2Link: '/#kayit'
    },
    bottomSection: {
      logoUrl: '',
      tagline: 'YENİ NESİL AKILLI LOJİSTİK TEKNOLOJİLERİ PLATFORMU',
      socialLinks: [
        { platform: 'instagram', url: '#', icon: 'fa-instagram' },
        { platform: 'linkedin', url: '#', icon: 'fa-linkedin-in' }
      ],
      corporateTitle: 'KURUMSAL BAĞLANTILAR',
      corporateLinks: [
        { name: 'Hakkımızda', url: '/hakkimizda' },
        { name: 'İletişim', url: '/iletisim' },
        { name: 'Destek', url: '/destek' },
        { name: 'Gizlilik Politikası', url: '/gizlilik-politikasi' },
        { name: 'Kullanım Şartları', url: '/kullanim-sartlari' },
        { name: 'KVKK Aydınlatma', url: '/kvkk-aydinlatma' }
      ],
      copyrightText: '© 2024 adoreGo. Site kargo firması vitrini değil, teknoloji lojistik platformudur.'
    }
  };

  if (footerTR) {
    footerTR.data = footerDataTR;
    await contentRepository.save(footerTR);
  } else {
    await contentRepository.save({
      key: 'footer',
      language: 'tr',
      data: footerDataTR
    });
  }

  // Footer - EN
  const footerEN = await contentRepository.findOne({ where: { key: 'footer', language: 'en' } });
  const footerDataEN = {
    sections: [
      {
        title: '1-Our Services',
        links: [
          { n: 'International Shipping', h: '/#yurtdisi' },
          { n: 'Economy Shipping', h: '/#ekonomik-kargo' },
          { n: 'Express Shipping', h: '/#express-kargo' },
          { n: 'From Abroad to Turkey', h: '/#yurtdisindan-turkiye' },
          { n: 'Domestic Advantages', h: '/#yurtici' },
          { n: 'Receiver Payment', h: '/#alici-odemeli' },
          { n: 'Cash on Delivery', h: '/#kapida-odemeli' },
          { n: 'Large Volume Shipments', h: '/#buyuk-desi' }
        ]
      },
      {
        title: '2-How It Works?',
        links: [
          { n: 'How to Ship?', h: '/#nasil-gonderirim' },
          { n: 'Door to Door', h: '/#kapi-alim-teslim' },
          { n: 'First Time Shippers', h: '/#ilk-kez-gonder' },
          { n: 'Customs & Documents Guide', h: '/#gumruk-evrak' },
          { n: 'International Returns', h: '/#yurtdisi-iade' },
          { n: 'Which Shipping is Right?', h: '/#hangi-gonderim' }
        ]
      },
      {
        title: '3-Info & Resources',
        links: [
          { n: 'Blog', h: '/blog' },
          { n: 'FAQ', h: '/#sss' },
          { n: 'International Shipping Guide', h: '/#yurtdisi-rehber' },
          { n: 'Micro Export Guide', h: '/#mikro-ihracat' },
          { n: 'Customs Guide', h: '/#gumruk-rehber' },
          { n: 'Latest Announcements', h: '/#duyurular' }
        ]
      },
      {
        title: '4-Integrations',
        links: [
          { n: 'Shopify Integration', h: '/#shopify' },
          { n: 'Etsy Integration', h: '/#etsy' },
          { n: 'Amazon Integration', h: '/#amazon' },
          { n: 'WooCommerce', h: '/#woocommerce' },
          { n: 'Custom Site Shipping API', h: '/#api' }
        ]
      }
    ],
    cta: {
      title: 'Having problems? Undecided?',
      subtitle: 'Our support team is with you at every step of your e-commerce logistics processes.',
      button1Text: 'Contact Us',
      button1Link: '/#iletisim',
      button2Text: 'Free Sign Up',
      button2Link: '/#kayit'
    },
    bottomSection: {
      logoUrl: '',
      tagline: 'NEXT GENERATION SMART LOGISTICS TECHNOLOGY PLATFORM',
      socialLinks: [
        { platform: 'instagram', url: '#', icon: 'fa-instagram' },
        { platform: 'linkedin', url: '#', icon: 'fa-linkedin-in' }
      ],
      corporateTitle: 'CORPORATE LINKS',
      corporateLinks: [
        { name: 'About Us', url: '/hakkimizda' },
        { name: 'Contact', url: '/iletisim' },
        { name: 'Support', url: '/destek' },
        { name: 'Privacy Policy', url: '/gizlilik-politikasi' },
        { name: 'Terms of Use', url: '/kullanim-sartlari' },
        { name: 'GDPR Notice', url: '/kvkk-aydinlatma' }
      ],
      copyrightText: '© 2024 adoreGo. This site is not a cargo company showcase, but a technology logistics platform.'
    }
  };

  if (footerEN) {
    footerEN.data = footerDataEN;
    await contentRepository.save(footerEN);
  } else {
    await contentRepository.save({
      key: 'footer',
      language: 'en',
      data: footerDataEN
    });
  }

  // SEO Home - TR
  await contentRepository.save({
    key: 'seo_home',
    language: 'tr',
    data: {
      title: 'adoreGo - Yurtdışı Kargo ve Lojistik Çözümleri',
      description: 'Yurtdışı kargo gönderiminde en uygun fiyatlar ve en hızlı teslimat. Kapıdan alım, mikro ihracat ve profesyonel lojistik hizmetleri.',
      keywords: 'yurtdışı kargo, uluslararası kargo, lojistik, kargo şirketi',
    },
  });

  // SEO Home - EN
  await contentRepository.save({
    key: 'seo_home',
    language: 'en',
    data: {
      title: 'adoreGo - International Shipping and Logistics Solutions',
      description: 'Best prices and fastest delivery for international shipping. Door-to-door pickup, micro export and professional logistics services.',
      keywords: 'international shipping, logistics, courier, shipping company',
    },
  });

  // Site Settings - General (TR & EN - ortak)
  // Mevcut kayıtları bul ve güncelle, yoksa oluştur
  for (const lang of ['tr', 'en']) {
    const existingSettings = await contentRepository.findOne({
      where: { key: 'siteSettings_general', language: lang },
    });

    const defaultData = lang === 'tr' ? {
      siteName: 'adoreGo',
      siteTitle: 'adoreGo - Global Lojistik Çözümleri',
      siteUrl: 'https://adorego.com',
      adminEmail: 'admin@adorego.com',
      supportEmail: 'destek@adorego.com',
      headerLogo: '', // Header/Navbar logosu
      footerLogo: '', // Footer logosu
      favicon: '', // Favicon (tarayıcı sekmesi ikonu)
    } : {
      siteName: 'adoreGo',
      siteTitle: 'adoreGo - Global Logistics Solutions',
      siteUrl: 'https://adorego.com',
      adminEmail: 'admin@adorego.com',
      supportEmail: 'support@adorego.com',
      headerLogo: '', // Header/Navbar logo
      footerLogo: '', // Footer logo
      favicon: '', // Favicon (browser tab icon)
    };

    if (existingSettings) {
      // Mevcut veriyi koru, sadece eksik alanları ekle
      const existingData = existingSettings.data || {};
      const mergedData = {
        ...existingData,
        ...defaultData,
        // Logo alanlarını güncelle (yeni alanlar)
        headerLogo: existingData.headerLogo !== undefined ? existingData.headerLogo : (existingData.mainLogo || ''),
        footerLogo: existingData.footerLogo !== undefined ? existingData.footerLogo : (existingData.originalLogo || ''),
        favicon: existingData.favicon !== undefined ? existingData.favicon : (existingData.demoLogo || ''),
      };

      // Eski alanları kaldır
      delete mergedData.mainLogo;
      delete mergedData.originalLogo;
      delete mergedData.demoLogo;

      existingSettings.data = mergedData;
      await contentRepository.save(existingSettings);
    } else {
      // Yeni kayıt oluştur
      await contentRepository.save({
        key: 'siteSettings_general',
        language: lang,
        data: defaultData,
      });
    }
  }

  console.log('✅ Seed data başarıyla eklendi!');
}

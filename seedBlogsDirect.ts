import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Content } from './src/content/content.entity';
import { User } from './src/users/user.entity';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5435', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password123',
    database: process.env.DB_DATABASE || 'adorego',
    entities: [Content, User],
    synchronize: false,
});

const blogs = [
    {
        "slug": "yurtdisi-kargo-rehberi",
        "category": "yurtdisi-kargo",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_yurtdisi_kargo_1767914230493.png",
        "titleTR": "Yurtdışı Kargo Gönderimi: Kapsamlı Rehber 2024",
        "titleEN": "International Shipping Guide: Complete Guide 2024",
        "excerptTR": "Yurtdışına kargo göndermek isteyenler için A'dan Z'ye kapsamlı rehber.",
        "excerptEN": "Complete A to Z guide for international shipping.",
        "contentTR": "## Yurtdışı Kargo Nedir?\nYurtdışı kargo, ürün veya belgelerin bir ülkeden başka bir ülkeye taşınması işlemidir...",
        "contentEN": "## What is International Shipping?\nInternational shipping is the process of transporting products from one country to another...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Yurtdışı Kargo Rehberi 2024 | Gümrük ve Fiyatlandırma",
            "metaTitleEN": "International Shipping Guide 2024 | Customs and Pricing",
            "metaDescriptionTR": "Yurtdışı kargo gönderimi için kapsamlı rehber.",
            "metaDescriptionEN": "Complete guide for international shipping.",
            "keywords": ["yurtdışı kargo", "gümrük", "lojistik"]
        }
    },
    {
        "slug": "etsy-saticilar-kargo-cozumleri",
        "category": "e-ticaret",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_etsy_shipping_1767914243045.png",
        "titleTR": "Etsy Satıcıları için En İyi Kargo Çözümleri",
        "titleEN": "Best Shipping Solutions for Etsy Sellers",
        "excerptTR": "Etsy'de satış yapıyorsanız, doğru kargo çözümü işinizi büyütür.",
        "excerptEN": "If you're selling on Etsy, the right shipping solution grows your business.",
        "contentTR": "## Etsy Satıcıları için Kargo Zorlukları\nEtsy platformunda başarılı olmak için doğru lojistik ortağı seçmek kritik öneme sahiptir...",
        "contentEN": "## Shipping Challenges for Etsy Sellers\nChoosing the right logistics partner is critical for success on the Etsy platform...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Etsy Kargo Rehberi | adoreGo",
            "metaTitleEN": "Etsy Shipping Guide | adoreGo",
            "metaDescriptionTR": "Etsy satıcıları için kargo çözümleri ve maliyet yönetimi.",
            "metaDescriptionEN": "Shipping solutions and cost management for Etsy sellers.",
            "keywords": ["etsy kargo", "e-ticaret", "yurtdışı kargo"]
        }
    },
    {
        "slug": "amazon-fba-kargo-ipuclari",
        "category": "e-ticaret",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_amazon_fba_1767914256524.png",
        "titleTR": "Amazon FBA için Kargo Optimizasyonu: 10 Altın İpucu",
        "titleEN": "Shipping Optimization for Amazon FBA: 10 Golden Tips",
        "excerptTR": "Amazon FBA satıcıları için kargo maliyetlerini düşürecek stratejiler.",
        "excerptEN": "Strategies to reduce shipping costs for Amazon FBA sellers.",
        "contentTR": "## Amazon FBA Lojistik Süreçleri\nAmazon FBA kullanırken en büyük gider kalemlerinden biri kargodur...",
        "contentEN": "## Amazon FBA Logistics Processes\nOne of the biggest expense items when using Amazon FBA is shipping...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Amazon FBA Kargo Optimizasyonu | 10 İpucu",
            "metaTitleEN": "Amazon FBA Shipping Optimization | 10 Tips",
            "metaDescriptionTR": "Amazon FBA satıcıları için depo gönderim maliyetlerini düşürme rehberi.",
            "metaDescriptionEN": "Guide to reducing warehouse shipping costs for Amazon FBA sellers.",
            "keywords": ["amazon fba", "kargo", "lojistik"]
        }
    },
    {
        "slug": "ekonomik-kargo-express-kargo-farki",
        "category": "lojistik",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_economy_express_1767914271503.png",
        "titleTR": "Ekonomik Kargo mı Express Kargo mu? Hangisini Seçmelisiniz?",
        "titleEN": "Economy Shipping vs Express Shipping? Which Should You Choose?",
        "excerptTR": "Fiyat ve hız dengesini kurmak için kargo türlerini karşılaştırdık.",
        "excerptEN": "We compared shipping types to balance price and speed.",
        "contentTR": "## Hangisi Daha Mantıklı?\nEkonomik kargo maliyet odaklıyken, express kargo hız odaklıdır...",
        "contentEN": "## Which One Makes More Sense?\nWhile economy shipping is cost-oriented, express shipping is speed-oriented...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Ekonomik vs Express Kargo Karşılaştırması",
            "metaTitleEN": "Economy vs Express Shipping Comparison",
            "metaDescriptionTR": "Hangi kargo yönteminin işletmeniz için daha uygun olduğunu öğrenin.",
            "metaDescriptionEN": "Learn which shipping method is more suitable for your business.",
            "keywords": ["express kargo", "ekonomik kargo", "kargo hızı"]
        }
    },
    {
        "slug": "gumruk-islemleri-rehberi",
        "category": "rehber",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_customs_guide_1767914289041.png",
        "titleTR": "Gümrük İşlemleri: Bilmeniz Gereken Her Şey",
        "titleEN": "Customs Procedures: Everything You Need to Know",
        "excerptTR": "Uluslararası ticarette gümrük süreçlerini hatasız yönetme rehberi.",
        "excerptEN": "Guide to managing customs processes error-free in international trade.",
        "contentTR": "## Gümrük Belgeleri ve Vergiler\nGümrük işlemleri uluslararası ticaretin en karmaşık kısmıdır...",
        "contentEN": "## Customs Documents and Taxes\nCustoms procedures are the most complex part of international trade...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Gümrük İşlemleri ve Mevzuat Rehberi",
            "metaTitleEN": "Customs Procedures and Regulations Guide",
            "metaDescriptionTR": "GTİP kodları, vergiler ve gümrük beyannameleri hakkında detaylı bilgi.",
            "metaDescriptionEN": "Detailed information on HS codes, taxes, and customs declarations.",
            "keywords": ["gümrük", "gtip", "ihracat", "ithalat"]
        }
    },
    {
        "slug": "mikro-ihracat-nasil-yapilir",
        "category": "rehber",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_micro_export_1767914314442.png",
        "titleTR": "Mikro İhracat Nasıl Yapılır? ETGB Rehberi",
        "titleEN": "How to do Micro Export? ETGB Guide",
        "excerptTR": "Bireysel ve küçük işletmeler için yurtdışına kolay satış yapma yöntemi.",
        "excerptEN": "Easy method for individuals and small businesses to sell abroad.",
        "contentTR": "## ETGB Nedir?\nMikro ihracat, 300 kg ve 15.000 Euro limitlerine kadar olan gönderileri kapsar...",
        "contentEN": "## What is ETGB?\nMicro export covers shipments up to 300 kg and 15,000 Euro limits...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Mikro İhracat Rehberi | ETGB Nedir?",
            "metaTitleEN": "Micro Export Guide | What is ETGB?",
            "metaDescriptionTR": "KOBİ'ler için mikro ihracat avantajları ve başvuru süreçleri.",
            "metaDescriptionEN": "Benefits of micro export and application processes for SMEs.",
            "keywords": ["mikro ihracat", "etgb", "yurtdışı satış"]
        }
    },
    {
        "slug": "e-ticaret-lojistik-stratejileri",
        "category": "e-ticaret",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_ecommerce_logistics_1767914326819.png",
        "titleTR": "E-ticaret Lojistik Stratejileri 2024",
        "titleEN": "E-commerce Logistics Strategies 2024",
        "excerptTR": "Online satışlarda başarı yakalamak için lojistik altyapınızı güçlendirin.",
        "excerptEN": "Strengthen your logistics infrastructure for success in online sales.",
        "contentTR": "## Lojistik ve Müşteri Deneyimi\nE-ticarette müşteri memnuniyeti doğru kargo yönetimiyle başlar...",
        "contentEN": "## Logistics and Customer Experience\nCustomer satisfaction in e-commerce starts with correct shipping management...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "E-ticaret Lojistik Yönetimi ve Stratejileri",
            "metaTitleEN": "E-commerce Logistics Management and Strategies",
            "metaDescriptionTR": "E-ticaret siteleri için depo ve kargo yönetim ipuçları.",
            "metaDescriptionEN": "Warehouse and shipping management tips for e-commerce sites.",
            "keywords": ["e-ticaret lojistik", "kargo yönetimi"]
        }
    },
    {
        "slug": "kargo-maliyetlerini-azaltma",
        "category": "lojistik",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_cost_reduction_1767914340412.png",
        "titleTR": "Kargo Maliyetlerini Azaltma Yolları",
        "titleEN": "Ways to Reduce Shipping Costs",
        "excerptTR": "İşletmenizin kargo giderlerini minimize etmek için pratik öneriler.",
        "excerptEN": "Practical suggestions to minimize your business's shipping expenses.",
        "contentTR": "## Kar Marjınızı Artırın\nKargo maliyetleri ürün başına karınızı doğrudan etkiler. Desi optimizasyonu çok önemlidir...",
        "contentEN": "## Increase Your Profit Margin\nShipping costs directly affect your profit per product. Desi optimization is very important...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Kargo Giderlerini Azaltma Teknikleri",
            "metaTitleEN": "Shipping Expense Reduction Techniques",
            "metaDescriptionTR": "İşletmeler için kargo maliyetlerini düşüren 5 ana strateji.",
            "metaDescriptionEN": "5 main strategies that reduce shipping costs for businesses.",
            "keywords": ["kargo maliyeti", "maliyet azaltma"]
        }
    },
    {
        "slug": "uluslararasi-kargo-sigortasi",
        "category": "yurtdisi-kargo",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_cargo_insurance_1767914354349.png",
        "titleTR": "Uluslararası Kargo Sigortası Neden Önemli?",
        "titleEN": "Why International Cargo Insurance is Important?",
        "excerptTR": "Gönderilerinizi güvence altına almanın yolları ve sigorta kapsamları.",
        "excerptEN": "Ways to secure your shipments and insurance coverage.",
        "contentTR": "## Riski Yönetin\nUluslararası taşımacılıkta hasar ve kayıp riskine karşı sigorta en güvenli yoldur...",
        "contentEN": "## Manage the Risk\nInsurance is the safest way against the risk of damage and loss in international transportation...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Kargo Sigortası ve Güvence Rehberi",
            "metaTitleEN": "Cargo Insurance and Assurance Guide",
            "metaDescriptionTR": "Yurtdışı gönderilerde kargo sigortası yaptırmanın avantajları.",
            "metaDescriptionEN": "Advantages of having cargo insurance in international shipments.",
            "keywords": ["kargo sigortası", "nakliyat sigortası"]
        }
    },
    {
        "slug": "kargo-takip-sistemleri",
        "category": "lojistik",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_tracking_systems_1767914368114.png",
        "titleTR": "Modern Kargo Takip Sistemleri ve Teknolojileri",
        "titleEN": "Modern Cargo Tracking Systems and Technologies",
        "excerptTR": "Gerçek zamanlı kargo takibi ile şeffaf bir lojistik süreci oluşturun.",
        "excerptEN": "Create a transparent logistics process with real-time cargo tracking.",
        "contentTR": "## Şeffaflık ve Güven\nMüşteriler artık kargolarının nerede olduğunu her an bilmek istiyor...",
        "contentEN": "## Transparency and Trust\nCustomers now want to know where their cargo is at any moment...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Kargo Takip Teknolojileri ve Müşteri Memnuniyeti",
            "metaTitleEN": "Cargo Tracking Technologies and Customer Satisfaction",
            "metaDescriptionTR": "Lojistikte dijital takip sistemlerinin önemi ve kullanımı.",
            "metaDescriptionEN": "Importance and use of digital tracking systems in logistics.",
            "keywords": ["kargo takip", "lojistik teknoloji"]
        }
    },
    {
        "slug": "paketleme-ipuclari",
        "category": "rehber",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_packaging_tips_1767914397593.png",
        "titleTR": "Profesyonel Paketleme İpuçları: Hasarsız Teslimat",
        "titleEN": "Professional Packaging Tips: Damage-Free Delivery",
        "excerptTR": "Doğru paketleme teknikleri ile kargo hasarlarının önüne geçin.",
        "excerptEN": "Prevent cargo damage with correct packaging techniques.",
        "contentTR": "## Sağlam Paketleme Sanatı\nUluslararası gönderilerde birden fazla aktarma noktası olduğu için sağlam paketleme şarttır...",
        "contentEN": "## The Art of Solid Packaging\nSolid packaging is essential in international shipments because there are multiple transfer points...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Hasarsız Kargo için Paketleme Rehberi",
            "metaTitleEN": "Packaging Guide for Damage-Free Cargo",
            "metaDescriptionTR": "Kırılacak eşya ve hassas ürünler için paketleme yöntemleri.",
            "metaDescriptionEN": "Packaging methods for fragile items and sensitive products.",
            "keywords": ["paketleme", "kargo hasarı", "güvenli gönderim"]
        }
    },
    {
        "slug": "yurtici-kargo-avantajlari",
        "category": "yurtici-kargo",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_domestic_shipping_1767914411857.png",
        "titleTR": "Yurtiçi Kargo Avantajları: Hızlı ve Ekonomik Çözümler",
        "titleEN": "Domestic Shipping Advantages: Fast and Economic Solutions",
        "excerptTR": "Yerel pazarda rekabet etmek için en iyi yurtiçi kargo stratejileri.",
        "excerptEN": "Best domestic shipping strategies to compete in the local market.",
        "contentTR": "## Türkiye Genelinde Hızlı Teslimat\nYurtiçi kargoda hız ve maliyet dengesini en iyi şekilde kurmalısınız...",
        "contentEN": "## Fast Delivery Throughout Turkey\nYou should establish the balance of speed and cost in the best way in domestic shipping...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Yurtiçi Kargo Lojistik Çözümleri",
            "metaTitleEN": "Domestic Shipping Logistics Solutions",
            "metaDescriptionTR": "Türkiye içi kargo gönderimlerinde maliyet avantajları.",
            "metaDescriptionEN": "Cost advantages in domestic shipping within Turkey.",
            "keywords": ["yurtiçi kargo", "hızlı teslimat Turkey"]
        }
    },
    {
        "slug": "shopify-kargo-entegrasyonu",
        "category": "e-ticaret",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_shopify_integration_1767914425889.png",
        "titleTR": "Shopify Kargo Entegrasyonu ve Otomasyon",
        "titleEN": "Shopify Shipping Integration and Automation",
        "excerptTR": "Shopify mağazanızda kargo süreçlerini otomatikleştirin, zaman kazanın.",
        "excerptEN": "Automate shipping processes in your Shopify store, save time.",
        "contentTR": "## API ile Kolay Lojistik\nShopify üzerinden kargo etiketi oluşturma ve takip süreçlerini otomatize edebilirsiniz...",
        "contentEN": "## Easy Logistics with API\nYou can automate the processes of creating shipping labels and tracking via Shopify...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Shopify Kargo Yönetimi ve Entegrasyonu",
            "metaTitleEN": "Shopify Shipping Management and Integration",
            "metaDescriptionTR": "Shopify mağazaları için kargo uygulamaları ve ayar rehberi.",
            "metaDescriptionEN": "Shipping apps and settings guide for Shopify stores.",
            "keywords": ["shopify", "kargo entegrasyonu", "api"]
        }
    },
    {
        "slug": "woocommerce-kargo-ayarlari",
        "category": "e-ticaret",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_woocommerce_shipping_1767914440031.png",
        "titleTR": "WooCommerce Kargo Ayarları ve Bölgeler",
        "titleEN": "WooCommerce Shipping Settings and Zones",
        "excerptTR": "WordPress sitemizde kargo bölgeleri ve fiyatlandırma nasıl olmalı?",
        "excerptEN": "How should shipping zones and pricing be on our WordPress site?",
        "contentTR": "## Detaylı WooCommerce Lojistiği\nKargo bölgeleri oluşturarak her ülkeye farklı fiyatlar tanımlayabilirsiniz...",
        "contentEN": "## Detailed WooCommerce Logistics\nYou can define different prices for each country by creating shipping zones...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "WooCommerce Kargo Yapılandırma Rehberi",
            "metaTitleEN": "WooCommerce Shipping Configuration Guide",
            "metaDescriptionTR": "WooCommerce kargo bölgeleri ve sabit fiyat ayarlama ipuçları.",
            "metaDescriptionEN": "WooCommerce shipping zones and flat rate setting tips.",
            "keywords": ["woocommerce", "wordpress kargo"]
        }
    },
    {
        "slug": "desi-hesaplama-rehberi",
        "category": "rehber",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_desi_calculation_1767914452487.png",
        "titleTR": "Desi Hesaplama Rehberi: Kargo Ücretlerini Anlayın",
        "titleEN": "Desi Calculation Guide: Understand Shipping Rates",
        "excerptTR": "Hacimsel ağırlık hesaplama yöntemleri ve kargo faturasını düşürme.",
        "excerptEN": "Volumetric weight calculation methods and reducing the shipping bill.",
        "contentTR": "## Desi Nedir ve Nasıl Hesaplanır?\nEn x boy x yükseklik / 5000 formülü ile desi hesaplanır...",
        "contentEN": "## What is Desi and How is it Calculated?\nDesi is calculated with the formula width x length x height / 5000...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Kargo Desi ve Hacimsel Ağırlık Hesaplama",
            "metaTitleEN": "Cargo Desi and Volumetric Weight Calculation",
            "metaDescriptionTR": "Yurtdışı kargolarda desi hesaplamanın önemi ve pratik araçlar.",
            "metaDescriptionEN": "The importance of calculating desi in international cargo and practical tools.",
            "keywords": ["desi hesaplama", "kargo ücreti"]
        }
    },
    {
        "slug": "kargo-sozlesmeleri",
        "category": "lojistik",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_cargo_contracts_1767914830429.png",
        "titleTR": "Kargo Sözleşmeleri ve Hukuki Haklarınız",
        "titleEN": "Cargo Contracts and Your Legal Rights",
        "excerptTR": "Lojistik firmalarıyla yapacağınız sözleşmelerde dikkat etmeniz gerekenler.",
        "excerptEN": "Things you should pay attention to in contracts you'll make with logistics companies.",
        "contentTR": "## Sözleşme Detayları\nKaybolan gönderilerde sorumluluk ve sigorta klozlarını mutlaka okuyun...",
        "contentEN": "## Contract Details\nAlways read responsibility and insurance clauses in lost shipments...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Lojistik Sözleşmeleri ve Taşıma Hukuku",
            "metaTitleEN": "Logistics Contracts and Transportation Law",
            "metaDescriptionTR": "Kargo sözleşmelerinde gizli maddeler ve yasal haklar.",
            "metaDescriptionEN": "Hidden clauses and legal rights in cargo contracts.",
            "keywords": ["kargo sözleşmesi", "hukuk"]
        }
    },
    {
        "slug": "iade-degisim-surecleri",
        "category": "e-ticaret",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_return_processes_1767914845412.png",
        "titleTR": "Uluslararası İade ve Değişim Süreçleri",
        "titleEN": "International Return and Exchange Processes",
        "excerptTR": "Yurtdışından gelen iadeleri maliyetsiz yönetme stratejisi.",
        "excerptEN": "Strategy to manage returns from abroad cost-effectively.",
        "contentTR": "## Ters Lojistik Yönetimi\nİade süreci müşteri sadakatini artırmanın bir fırsatı olabilir...",
        "contentEN": "## Reverse Logistics Management\nThe return process can be an opportunity to increase customer loyalty...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Yurtdışı İade Yönetimi ve Çözümleri",
            "metaTitleEN": "International Return Management and Solutions",
            "metaDescriptionTR": "E-ticaret ihracatında iade maliyetlerini düşürme yolları.",
            "metaDescriptionEN": "Ways to reduce return costs in e-commerce export.",
            "keywords": ["iade", "ters lojistik"]
        }
    },
    {
        "slug": "hizli-teslimat-stratejileri",
        "category": "lojistik",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_fast_delivery_1767914859168.png",
        "titleTR": "Dünya Çapında Hızlı Teslimat Stratejileri",
        "titleEN": "Global Fast Delivery Strategies",
        "excerptTR": "24-48 saatte dünya genelinde teslimat yapabilmenin sırları.",
        "excerptEN": "Secrets of being able to deliver globally in 24-48 hours.",
        "contentTR": "## Global Ekspres Ağı\nDoğru hava kargo ortakları ile tüm dünyaya ertesi gün teslimat mümkün...",
        "contentEN": "## Global Express Network\nNext-day delivery to the whole world is possible with the right air cargo partners...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Hızlı Kargo ve Global Ekspres Hizmetleri",
            "metaTitleEN": "Fast Cargo and Global Express Services",
            "metaDescriptionTR": "Yurtdışına hızlı kargo gönderiminin işinize kattığı değerler.",
            "metaDescriptionEN": "Values that fast cargo shipping abroad adds to your business.",
            "keywords": ["hızlı kargo", "global teslimat"]
        }
    },
    {
        "slug": "surdurulebilir-lojistik",
        "category": "lojistik",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_sustainable_logistics_1767914872689.png",
        "titleTR": "Sürdürülebilir Lojistik: Yeşil Taşımacılık",
        "titleEN": "Sustainable Logistics: Green Transportation",
        "excerptTR": "Karbon ayak izini düşüren çevreci kargo çözümleri.",
        "excerptEN": "Eco-friendly shipping solutions that reduce carbon footprint.",
        "contentTR": "## Gelecek Yeşil Lojistikte\nElektrikli araçlar ve geri dönüştürülebilir paketleme ile sürdürülebilirlik...",
        "contentEN": "## The Future is in Green Logistics\nSustainability with electric vehicles and recyclable packaging...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Çevreci Kargo ve Sürdürülebilirlik",
            "metaTitleEN": "Eco-Friendly Cargo and Sustainability",
            "metaDescriptionTR": "Lojistikte çevre dostu uygulamalar ve karbon nötr gönderim.",
            "metaDescriptionEN": "Environmentally friendly practices in logistics and carbon neutral shipping.",
            "keywords": ["yeşil lojistik", "sürdürülebilirlik"]
        }
    },
    {
        "slug": "dropshipping-kargo-rehberi",
        "category": "e-ticaret",
        "featuredImage": "/Users/mac/.gemini/antigravity/brain/d25751d6-ed23-4f2b-a094-68346b972b40/blog_dropshipping_shipping_1767914886960.png",
        "titleTR": "Dropshipping Kargo Rehberi: Direkt Gönderim",
        "titleEN": "Dropshipping Shipping Guide: Direct Shipping",
        "excerptTR": "Dropshipping yaparken kargo sürelerini ve maliyetleri yönetme.",
        "excerptEN": "Managing shipping times and costs when doing dropshipping.",
        "contentTR": "## Tedarikçiden Müşteriye Lojistik\nDropshipping modelinde kargo takibi ve gümrük işlemleri en kritik konudur...",
        "contentEN": "## Logistics from Supplier to Customer\nCargo tracking and customs procedures are the most critical issue in the dropshipping model...",
        "isPublished": true,
        "author": "adoreGo",
        "seo": {
            "metaTitleTR": "Dropshipping Lojistik ve Kargo Yönetimi",
            "metaTitleEN": "Dropshipping Logistics and Shipping Management",
            "metaDescriptionTR": "Global dropshipping kargo stratejileri ve hızlı tedarikçiler.",
            "metaDescriptionEN": "Global dropshipping shipping strategies and fast suppliers.",
            "keywords": ["dropshipping", "kargo"]
        }
    }
];

AppDataSource.initialize()
    .then(async (dataSource) => {
        console.log('📦 Veritabanına bağlanıldı');
        const contentRepository = dataSource.getRepository(Content);

        // Blog verilerini ID ile paketle (id ekleyerek)
        const blogsWithId = blogs.map((b, index) => ({
            ...b,
            id: (Date.now() + index).toString(),
            publishedAt: new Date().toISOString()
        }));

        // TR Save
        await contentRepository.save({
            key: 'blogs',
            language: 'tr',
            data: blogsWithId
        });
        console.log('✅ TR Blog yazıları kaydedildi');

        // EN Save (Aynı ID'leri kullanarak)
        await contentRepository.save({
            key: 'blogs',
            language: 'en',
            data: blogsWithId
        });
        console.log('✅ EN Blog yazıları kaydedildi');

        console.log('🎉 Seed işlemi başarıyla tamamlandı!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('❌ Hata:', error);
        process.exit(1);
    });

// Blog Seed Script - Otomatik blog yazıları oluşturur
// Kullanım: node seedBlogs.js

const axios = require('axios');

const API_BASE_URL = 'http://localhost:3001';

// Admin token'ı buraya ekleyin (admin panelinden login olduktan sonra localStorage'dan alın)
const ADMIN_TOKEN = 'YOUR_ADMIN_TOKEN_HERE';

const blogs = [
    {
        titleTR: 'Yurtdışı Kargo Gönderimi: Kapsamlı Rehber 2024',
        titleEN: 'International Shipping Guide: Complete Guide 2024',
        slug: 'yurtdisi-kargo-rehberi',
        excerptTR: 'Yurtdışına kargo göndermek isteyenler için A\'dan Z\'ye kapsamlı rehber. Gümrük işlemleri, fiyatlandırma ve ipuçları.',
        excerptEN: 'Complete A to Z guide for international shipping. Customs procedures, pricing, and tips.',
        contentTR: `Yurtdışına kargo göndermek, doğru bilgi ve hazırlıkla çok daha kolay hale gelir. Bu rehberde, uluslararası kargo gönderiminin tüm aşamalarını detaylı olarak inceleyeceğiz.

## Yurtdışı Kargo Nedir?

Yurtdışı kargo, ürün veya belgelerin bir ülkeden başka bir ülkeye taşınması işlemidir. E-ticaret satıcıları, bireysel gönderenler ve işletmeler için kritik bir lojistik hizmettir.

## Gümrük İşlemleri

Uluslararası gönderilerde gümrük işlemleri zorunludur. Gerekli belgeler:
- Fatura (Invoice)
- Gönderim Beyannamesi
- Ürün Sertifikaları (gerekirse)
- Kimlik Fotokopisi

## Fiyatlandırma Faktörleri

Yurtdışı kargo fiyatları şu faktörlere bağlıdır:
1. Ağırlık ve Hacim (Desi)
2. Varış Ülkesi
3. Teslimat Hızı (Ekonomik/Express)
4. Ürün Türü
5. Gümrük Vergileri

## İpuçları

- Paketlemeye özen gösterin
- Doğru gümrük kodunu kullanın
- Sigorta yaptırmayı düşünün
- Yasaklı ürünleri kontrol edin`,
        contentEN: `International shipping becomes much easier with the right information and preparation. In this guide, we'll examine all stages of international cargo shipping in detail.

## What is International Shipping?

International shipping is the process of transporting products or documents from one country to another. It's a critical logistics service for e-commerce sellers, individual senders, and businesses.

## Customs Procedures

Customs procedures are mandatory for international shipments. Required documents:
- Invoice
- Shipping Declaration
- Product Certificates (if required)
- ID Copy

## Pricing Factors

International shipping prices depend on:
1. Weight and Volume (Desi)
2. Destination Country
3. Delivery Speed (Economy/Express)
4. Product Type
5. Customs Duties

## Tips

- Pay attention to packaging
- Use correct customs code
- Consider insurance
- Check prohibited items`,
        featuredImage: '',
        category: 'yurtdisi-kargo',
        tags: [],
        author: 'adoreGo',
        isPublished: true,
        seo: {
            metaTitleTR: 'Yurtdışı Kargo Rehberi 2024 | Gümrük ve Fiyatlandırma',
            metaTitleEN: 'International Shipping Guide 2024 | Customs and Pricing',
            metaDescriptionTR: 'Yurtdışı kargo gönderimi için kapsamlı rehber. Gümrük işlemleri, fiyatlandırma, gerekli belgeler ve ipuçları.',
            metaDescriptionEN: 'Complete guide for international shipping. Customs procedures, pricing, required documents and tips.',
            keywords: ['yurtdışı kargo', 'uluslararası kargo', 'gümrük işlemleri', 'kargo fiyatları']
        }
    },
    {
        titleTR: 'Etsy Satıcıları için En İyi Kargo Çözümleri',
        titleEN: 'Best Shipping Solutions for Etsy Sellers',
        slug: 'etsy-saticilar-kargo-cozumleri',
        excerptTR: 'Etsy\'de satış yapıyorsanız, doğru kargo çözümü işinizi büyütür. Maliyetleri düşürün, müşteri memnuniyetini artırın.',
        excerptEN: 'If you\'re selling on Etsy, the right shipping solution grows your business. Reduce costs, increase customer satisfaction.',
        contentTR: `Etsy platformunda başarılı olmak için ürün kalitesi kadar lojistik de önemlidir. Doğru kargo çözümü, maliyetlerinizi düşürür ve müşteri memnuniyetini artırır.

## Etsy Satıcıları için Kargo Zorlukları

- Uluslararası gönderimler
- Değişken ürün boyutları
- Rekabetçi kargo fiyatları
- Hızlı teslimat beklentisi

## Çözüm Önerileri

### 1. Toplu Kargo Anlaşmaları
Düzenli gönderim yapıyorsanız, toplu anlaşmalarla %30'a varan indirimler elde edebilirsiniz.

### 2. Hibrit Kargo Modeli
Yurtiçi siparişler için ekonomik, yurtdışı için express kargo kullanın.

### 3. Otomatik Etiket Yazdırma
Zamandan tasarruf edin, hataları azaltın.

## Maliyet Optimizasyonu

- Hafif paketleme malzemeleri kullanın
- Desi hesaplamasına dikkat edin
- Bölgesel kargo firmalarını değerlendirin`,
        contentEN: `To succeed on the Etsy platform, logistics is as important as product quality. The right shipping solution reduces your costs and increases customer satisfaction.

## Shipping Challenges for Etsy Sellers

- International shipments
- Variable product sizes
- Competitive shipping prices
- Fast delivery expectations

## Solution Recommendations

### 1. Bulk Shipping Agreements
If you ship regularly, you can get discounts up to 30% with bulk agreements.

### 2. Hybrid Shipping Model
Use economy for domestic orders, express for international.

### 3. Automatic Label Printing
Save time, reduce errors.

## Cost Optimization

- Use lightweight packaging materials
- Pay attention to desi calculation
- Evaluate regional carriers`,
        featuredImage: '',
        category: 'e-ticaret',
        tags: [],
        author: 'adoreGo',
        isPublished: true,
        seo: {
            metaTitleTR: 'Etsy Satıcıları için Kargo Rehberi | Maliyet Optimizasyonu',
            metaTitleEN: 'Shipping Guide for Etsy Sellers | Cost Optimization',
            metaDescriptionTR: 'Etsy\'de satış yapanlar için kargo çözümleri. Maliyetleri düşürün, teslimat hızını artırın.',
            metaDescriptionEN: 'Shipping solutions for Etsy sellers. Reduce costs, increase delivery speed.',
            keywords: ['etsy kargo', 'etsy satıcı', 'e-ticaret lojistik', 'kargo maliyeti']
        }
    },
    {
        titleTR: 'Amazon FBA için Kargo Optimizasyonu: 10 Altın İpucu',
        titleEN: 'Shipping Optimization for Amazon FBA: 10 Golden Tips',
        slug: 'amazon-fba-kargo-ipuclari',
        excerptTR: 'Amazon FBA satıcıları için kargo maliyetlerini düşürecek ve verimliliği artıracak pratik ipuçları.',
        excerptEN: 'Practical tips to reduce shipping costs and increase efficiency for Amazon FBA sellers.',
        contentTR: `Amazon FBA (Fulfillment by Amazon) kullanıyorsanız, depoya gönderim maliyetlerinizi optimize etmek kritik önem taşır.

## FBA Kargo Gereksinimleri

Amazon'un sıkı paketleme ve etiketleme standartları vardır:
- Barkod gereksinimleri
- Paket boyut sınırları
- Ürün hazırlık kuralları

## 10 Altın İpucu

### 1. Konsolidasyon Yapın
Birden fazla ürünü tek gönderiyle birleştirin.

### 2. Palet Kullanımı
Büyük hacimler için palet gönderimi %40 daha ekonomiktir.

### 3. Doğru Depo Seçimi
Ürünlerinizi en yakın Amazon deposuna gönderin.

### 4. Mevsimsel Planlama
Yoğun sezonlardan önce stok gönderin.

### 5. LTL vs FTL
Gönderim hacminize göre doğru taşıma yöntemini seçin.`,
        contentEN: `If you're using Amazon FBA (Fulfillment by Amazon), optimizing your warehouse shipping costs is critically important.

## FBA Shipping Requirements

Amazon has strict packaging and labeling standards:
- Barcode requirements
- Package size limits
- Product prep rules

## 10 Golden Tips

### 1. Consolidate
Combine multiple products in one shipment.

### 2. Use Pallets
Pallet shipping is 40% more economical for large volumes.

### 3. Choose Right Warehouse
Send your products to the nearest Amazon warehouse.

### 4. Seasonal Planning
Send stock before peak seasons.

### 5. LTL vs FTL
Choose the right shipping method based on your volume.`,
        featuredImage: '',
        category: 'e-ticaret',
        tags: [],
        author: 'adoreGo',
        isPublished: true,
        seo: {
            metaTitleTR: 'Amazon FBA Kargo Rehberi | 10 Maliyet Düşürme İpucu',
            metaTitleEN: 'Amazon FBA Shipping Guide | 10 Cost Reduction Tips',
            metaDescriptionTR: 'Amazon FBA satıcıları için kargo optimizasyonu. Depo gönderim maliyetlerini düşürün.',
            metaDescriptionEN: 'Shipping optimization for Amazon FBA sellers. Reduce warehouse shipping costs.',
            keywords: ['amazon fba', 'fba kargo', 'amazon lojistik', 'e-ticaret kargo']
        }
    },
    {
        titleTR: 'Ekonomik Kargo mı Express Kargo mu? Hangisini Seçmelisiniz?',
        titleEN: 'Economy Shipping vs Express Shipping? Which Should You Choose?',
        slug: 'ekonomik-kargo-express-kargo-farki',
        excerptTR: 'Ekonomik ve express kargo arasındaki farklar, avantajlar ve hangi durumda hangisini kullanmanız gerektiği.',
        excerptEN: 'Differences between economy and express shipping, advantages and which one to use in which situation.',
        contentTR: `Kargo gönderirken en önemli kararlardan biri, ekonomik mi yoksa express kargo mu kullanacağınızdır.

## Ekonomik Kargo

### Avantajları
- %50-70 daha uygun fiyat
- Büyük hacimler için ideal
- Düzenli gönderimler için uygun

### Dezavantajları
- 5-15 gün teslimat süresi
- Sınırlı takip imkanı
- Daha az güvenli

## Express Kargo

### Avantajları
- 1-3 gün teslimat
- Kapsamlı takip sistemi
- Yüksek güvenlik
- Sigorta dahil

### Dezavantajları
- 2-3 kat daha pahalı
- Ağırlık sınırlamaları`,
        contentEN: `One of the most important decisions when shipping is whether to use economy or express shipping.

## Economy Shipping

### Advantages
- 50-70% cheaper price
- Ideal for large volumes
- Suitable for regular shipments

### Disadvantages
- 5-15 days delivery time
- Limited tracking
- Less secure

## Express Shipping

### Advantages
- 1-3 days delivery
- Comprehensive tracking system
- High security
- Insurance included

### Disadvantages
- 2-3 times more expensive
- Weight limitations`,
        featuredImage: '',
        category: 'lojistik',
        tags: [],
        author: 'adoreGo',
        isPublished: true,
        seo: {
            metaTitleTR: 'Ekonomik vs Express Kargo | Hangisi Daha İyi?',
            metaTitleEN: 'Economy vs Express Shipping | Which is Better?',
            metaDescriptionTR: 'Ekonomik ve express kargo karşılaştırması. Fiyat, hız, güvenlik faktörleri.',
            metaDescriptionEN: 'Economy vs express shipping comparison. Price, speed, security factors.',
            keywords: ['ekonomik kargo', 'express kargo', 'kargo karşılaştırma', 'hızlı kargo']
        }
    },
    {
        titleTR: 'Gümrük İşlemleri: Bilmeniz Gereken Her Şey',
        titleEN: 'Customs Procedures: Everything You Need to Know',
        slug: 'gumruk-islemleri-rehberi',
        excerptTR: 'Uluslararası kargo gönderilerinde gümrük işlemleri, gerekli belgeler ve vergi hesaplamaları hakkında detaylı rehber.',
        excerptEN: 'Detailed guide on customs procedures, required documents and tax calculations for international shipments.',
        contentTR: `Gümrük işlemleri, uluslararası ticaretin en kritik aşamalarından biridir. Doğru bilgi ve belgelerle süreç çok daha kolay hale gelir.

## Gümrük Nedir?

Gümrük, ülkeler arası mal hareketlerini kontrol eden ve vergilendiren devlet kurumudur.

## Gerekli Belgeler

### Zorunlu Belgeler
1. **Fatura (Invoice)**
   - Ürün açıklaması
   - Birim fiyat
   - Toplam değer

2. **Paket Listesi**
   - Ürün sayısı
   - Ağırlık bilgileri

3. **Gümrük Beyannamesi**
   - GTİP kodu
   - Menşe ülke

## Gümrük Vergileri

### Vergi Türleri
1. **Gümrük Vergisi** - %0-30
2. **KDV** - %20
3. **ÖTV** - Lüks ürünler için`,
        contentEN: `Customs procedures are one of the most critical stages of international trade. With the right information and documents, the process becomes much easier.

## What is Customs?

Customs is the government institution that controls and taxes the movement of goods between countries.

## Required Documents

### Mandatory Documents
1. **Invoice**
   - Product description
   - Unit price
   - Total value

2. **Packing List**
   - Number of products
   - Weight information

3. **Customs Declaration**
   - HS code
   - Country of origin

## Customs Duties

### Types of Taxes
1. **Customs Duty** - 0-30%
2. **VAT** - 20%
3. **SCT** - For luxury products`,
        featuredImage: '',
        category: 'rehber',
        tags: [],
        author: 'adoreGo',
        isPublished: true,
        seo: {
            metaTitleTR: 'Gümrük İşlemleri Rehberi | Belgeler ve Vergiler',
            metaTitleEN: 'Customs Procedures Guide | Documents and Taxes',
            metaDescriptionTR: 'Gümrük işlemleri için kapsamlı rehber. Gerekli belgeler, GTİP kodu, vergi hesaplamaları.',
            metaDescriptionEN: 'Comprehensive guide for customs procedures. Required documents, HS code, tax calculations.',
            keywords: ['gümrük işlemleri', 'gtip kodu', 'gümrük vergisi', 'ithalat']
        }
    }
];

async function seedBlogs() {
    console.log('🌱 Blog seed işlemi başlıyor...\n');

    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];

        try {
            console.log(`📝 ${i + 1}/${blogs.length} - "${blog.titleTR}" oluşturuluyor...`);

            const response = await axios.post(
                `${API_BASE_URL}/content/blog`,
                {
                    ...blog,
                    publishedAt: new Date().toISOString()
                },
                {
                    headers: {
                        'Authorization': `Bearer ${ADMIN_TOKEN}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log(`✅ Başarılı: ${blog.slug}\n`);
        } catch (error) {
            console.error(`❌ Hata: ${blog.titleTR}`);
            console.error(error.response?.data || error.message);
            console.log('');
        }
    }

    console.log('🎉 Blog seed işlemi tamamlandı!');
    console.log(`📊 Toplam: ${blogs.length} blog yazısı`);
}

// Script'i çalıştır
if (require.main === module) {
    if (ADMIN_TOKEN === 'YOUR_ADMIN_TOKEN_HERE') {
        console.error('❌ Hata: Lütfen ADMIN_TOKEN değişkenini güncelleyin!');
        console.log('\n📝 Token almak için:');
        console.log('1. Admin paneline giriş yapın (http://localhost:5173/admin)');
        console.log('2. Browser console\'u açın (F12)');
        console.log('3. localStorage.getItem("admin_token") komutunu çalıştırın');
        console.log('4. Çıkan token\'ı bu dosyadaki ADMIN_TOKEN değişkenine yapıştırın\n');
        process.exit(1);
    }

    seedBlogs();
}

module.exports = { blogs, seedBlogs };

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './content.entity';

const DEFAULT_CONTACT_MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.294717533184!2d32.82214850442983!3d39.76911265077443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345e33d97fc47%3A0xd4b2a2f7ce3c8e2b!2sAdorel!5e1!3m2!1sen!2str!4v1774722441289!5m2!1sen!2str';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) { }

  private async getContent(key: string, lang: string = 'tr') {
    const content = await this.contentRepository.findOne({ where: { key, language: lang } });
    return content ? content.data : (key.includes('features') || key.includes('partners') || key.includes('faq') ? [] : {});
  }

  private async saveContent(key: string, data: any, lang: string = 'tr') {
    let content = await this.contentRepository.findOne({ where: { key, language: lang } });

    if (!content) {
      content = this.contentRepository.create({ key, language: lang, data });
    } else {
      content.data = data;
    }

    return await this.contentRepository.save(content);
  }

  // Navbar
  async getNavbar(lang: string = 'tr') {
    return this.getContent('navbar', lang);
  }

  async updateNavbar(data: any, lang: string = 'tr') {
    return this.saveContent('navbar', data, lang);
  }

  // Hero
  async getHero(lang: string = 'tr') {
    return this.getContent('hero', lang);
  }

  async updateHero(data: any, lang: string = 'tr') {
    return this.saveContent('hero', data, lang);
  }

  // Features
  async getFeatures(lang: string = 'tr') {
    return this.getContent('features', lang);
  }

  async updateFeatures(data: any[], lang: string = 'tr') {
    return this.saveContent('features', data, lang);
  }

  // Features Header
  async getFeaturesHeader(lang: string = 'tr') {
    return this.getContent('featuresHeader', lang);
  }

  async updateFeaturesHeader(data: any, lang: string = 'tr') {
    return this.saveContent('featuresHeader', data, lang);
  }

  // Partners
  async getPartners(lang: string = 'tr') {
    return this.getContent('partners', lang);
  }

  async updatePartners(data: any, lang: string = 'tr') {
    return this.saveContent('partners', data, lang);
  }

  // FAQ
  async getFaq(lang: string = 'tr') {
    return this.getContent('faq', lang);
  }

  async updateFaq(data: any[], lang: string = 'tr') {
    return this.saveContent('faq', data, lang);
  }

  // FAQ Header
  async getFaqHeader(lang: string = 'tr') {
    return this.getContent('faqHeader', lang);
  }

  async updateFaqHeader(data: any, lang: string = 'tr') {
    return this.saveContent('faqHeader', data, lang);
  }

  // HowItWorks
  async getHowItWorks(lang: string = 'tr') {
    const data = await this.getContent('howItWorks', lang) || { steps: [], buttons: [] };
    // Sıralı şekilde döndür
    if (data.steps && Array.isArray(data.steps)) {
      data.steps = data.steps.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
    }
    if (data.buttons && Array.isArray(data.buttons)) {
      data.buttons = data.buttons.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
    }
    return data;
  }

  async updateHowItWorks(data: any, lang: string = 'tr') {
    return this.saveContent('howItWorks', data, lang);
  }

  // CTA
  async getCta(lang: string = 'tr') {
    return this.getContent('cta', lang);
  }

  async updateCta(data: any, lang: string = 'tr') {
    return this.saveContent('cta', data, lang);
  }

  // Solutions
  async getSolutions(lang: string = 'tr') {
    return this.getContent('solutions', lang);
  }

  async updateSolutions(data: any, lang: string = 'tr') {
    return this.saveContent('solutions', data, lang);
  }

  // Target Audience
  async getTargetAudience(lang: string = 'tr') {
    return this.getContent('targetAudience', lang);
  }

  async updateTargetAudience(data: any, lang: string = 'tr') {
    return this.saveContent('targetAudience', data, lang);
  }

  // Use Cases
  async getUseCases(lang: string = 'tr') {
    return this.getContent('useCases', lang);
  }

  async updateUseCases(data: any, lang: string = 'tr') {
    return this.saveContent('useCases', data, lang);
  }

  async getAbout(lang: string = 'tr') {
    return this.getContent('about', lang);
  }

  async updateAbout(data: any, lang: string = 'tr') {
    return this.saveContent('about', data, lang);
  }

  async getInternational(lang: string = 'tr') {
    return this.getContent('international', lang);
  }

  async updateInternational(data: any, lang: string = 'tr') {
    return this.saveContent('international', data, lang);
  }

  async getDomestic(lang: string = 'tr') {
    return this.getContent('domestic', lang);
  }

  async updateDomestic(data: any, lang: string = 'tr') {
    return this.saveContent('domestic', data, lang);
  }

  async getHomeCta(lang: string = 'tr') {
    return this.getContent('homeCta', lang);
  }

  async updateHomeCta(data: any, lang: string = 'tr') {
    return this.saveContent('homeCta', data, lang);
  }

  // Popular Destinations
  async getPopularDestinations(lang: string = 'tr') {
    const data = await this.getContent('popularDestinations', lang);
    
    // Eğer veri yoksa veya boşsa, default değerleri döndür
    if (!data || Object.keys(data).length === 0 || !data.destinations || data.destinations.length === 0) {
      if (lang === 'tr') {
        return {
          badge: 'POPÜLER ÜLKELER',
          title: 'Dünyaya Bizimle Ulaşın.',
          destinations: [
            {
              image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070",
              name: "Almanya",
              price: "12.50",
              currency: "€",
              tag: "Express Servis",
              priceLabel: "Başlangıç"
            },
            {
              image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2070",
              name: "ABD",
              price: "24.90",
              currency: "€",
              tag: "Ekonomik",
              priceLabel: "Başlangıç"
            },
            {
              image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070",
              name: "İngiltere",
              price: "18.00",
              currency: "€",
              tag: "Sık Gönderilen",
              priceLabel: "Başlangıç"
            },
            {
              image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2070",
              name: "Hollanda",
              price: "11.20",
              currency: "€",
              tag: "Kolay Gümrük",
              priceLabel: "Başlangıç"
            }
          ]
        };
      } else {
        return {
          badge: 'POPULAR COUNTRIES',
          title: 'Reach the World with Us.',
          destinations: [
            {
              image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070",
              name: "Germany",
              price: "12.50",
              currency: "€",
              tag: "Express Service",
              priceLabel: "Starting from"
            },
            {
              image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2070",
              name: "USA",
              price: "24.90",
              currency: "€",
              tag: "Economical",
              priceLabel: "Starting from"
            },
            {
              image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070",
              name: "UK",
              price: "18.00",
              currency: "€",
              tag: "Frequently Sent",
              priceLabel: "Starting from"
            },
            {
              image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2070",
              name: "Netherlands",
              price: "11.20",
              currency: "€",
              tag: "Easy Customs",
              priceLabel: "Starting from"
            }
          ]
        };
      }
    }
    
    return data;
  }

  async updatePopularDestinations(data: any, lang: string = 'tr') {
    return this.saveContent('popularDestinations', data, lang);
  }

  // Footer
  async getFooter(lang: string = 'tr') {
    return this.getContent('footer', lang);
  }

  async updateFooter(data: any, lang: string = 'tr') {
    return this.saveContent('footer', data, lang);
  }

  // Pricing
  async getPricing(lang: string = 'tr') {
    return this.getContent('pricing', lang);
  }

  async updatePricing(data: any, lang: string = 'tr') {
    return this.saveContent('pricing', data, lang);
  }

  // How To Send
  async getHowToSend(lang: string = 'tr') {
    return this.getContent('howtosend', lang);
  }

  async updateHowToSend(data: any, lang: string = 'tr') {
    return this.saveContent('howtosend', data, lang);
  }

  // Tracking
  async getTracking(lang: string = 'tr') {
    const data = await this.getContent('tracking', lang);
    
    // Eğer veri yoksa veya boşsa, default değerleri döndür
    if (!data || Object.keys(data).length === 0) {
      if (lang === 'tr') {
        return {
          pageTitle: 'Gönderi Takibi',
          breadcrumb: 'Gönderi Takibi',
          formTitle: 'Takip Numarası',
          formPlaceholder: 'Örn: ALG123456789TR',
          buttonText: 'Gönderimi Takip Et',
          buttonLoadingText: 'Sorgulanıyor...',
          infoTitle: 'Bilgi',
          infoText: 'Takip numaranızı faturanızda veya size gönderilen e-postada bulabilirsiniz. Sorun yaşıyorsanız müşteri hizmetlerimizle iletişime geçebilirsiniz.'
        };
      } else {
        return {
          pageTitle: 'Shipment Tracking',
          breadcrumb: 'Tracking',
          formTitle: 'Tracking Number',
          formPlaceholder: 'e.g: ALG123456789TR',
          buttonText: 'Track Shipment',
          buttonLoadingText: 'Searching...',
          infoTitle: 'Information',
          infoText: 'You can find your tracking number on your invoice or in the email sent to you. If you have any problems, you can contact our customer service.'
        };
      }
    }
    
    return data;
  }

  async updateTracking(data: any, lang: string = 'tr') {
    return this.saveContent('tracking', data, lang);
  }

  // Contact
  async getContact(lang: string = 'tr') {
    const data = await this.getContent('contact', lang);
    
    // Eğer veri yoksa veya boşsa, default değerleri döndür
    if (!data || Object.keys(data).length === 0) {
      if (lang === 'tr') {
        return {
          pageTitle: 'İletişim',
          breadcrumb: 'İletişim',
          sendMessageTitle: 'Bize mesaj gönderin',
          sendMessageDesc: 'Aşağıdaki formu doldurarak bizimle hızlıca iletişime geçebilirsiniz. Uzman ekibimiz en kısa sürede size geri dönüş yapacaktır.',
          contactInfoTitle: 'İletişim bilgileri',
          formNameLabel: 'Adınız soyadınız',
          formEmailLabel: 'E-posta adresiniz',
          formSubjectLabel: 'Konu',
          formMessageLabel: 'Mesajınız',
          formButton: 'Gönder',
          addressLabel: 'Adres',
          addressValue: 'İstanbul, Türkiye',
          phoneLabel: 'Telefon',
          phoneValue: '+90 (212) 123 45 67',
          emailLabel: 'E-posta',
          emailValue: 'info@adorelgo.com',
          workingHoursLabel: 'Çalışma saatleri',
          workingHoursValue: 'Pazartesi - Cuma: 09:00 - 18:00',
          quickSupportTitle: 'Hızlı destek hattı',
          quickSupportDesc: 'Her türlü sorunuz için WhatsApp üzerinden bize anında ulaşabilirsiniz.',
          whatsappNumber: '+905551234567',
          mapUrl: DEFAULT_CONTACT_MAP_URL
        };
      } else {
        return {
          pageTitle: 'Contact',
          breadcrumb: 'Contact',
          sendMessageTitle: 'Send Us a Message',
          sendMessageDesc: 'Fill out the form below to get in touch with us quickly. Our expert team will get back to you as soon as possible.',
          contactInfoTitle: 'Contact information',
          formNameLabel: 'Your name',
          formEmailLabel: 'Your email',
          formSubjectLabel: 'Subject',
          formMessageLabel: 'Your message',
          formButton: 'Send',
          addressLabel: 'Address',
          addressValue: 'Istanbul, Turkey',
          phoneLabel: 'Phone',
          phoneValue: '+90 (212) 123 45 67',
          emailLabel: 'Email',
          emailValue: 'info@adorelgo.com',
          workingHoursLabel: 'Working hours',
          workingHoursValue: 'Monday - Friday: 09:00 - 18:00',
          quickSupportTitle: 'Quick support',
          quickSupportDesc: 'You can reach us instantly via WhatsApp for any questions.',
          whatsappNumber: '+905551234567',
          mapUrl: DEFAULT_CONTACT_MAP_URL
        };
      }
    }
    
    return data;
  }

  async updateContact(data: any, lang: string = 'tr') {
    return this.saveContent('contact', data, lang);
  }

  // SEO
  async getSeo(page: string = 'home', lang: string = 'tr') {
    return this.getContent(`seo_${page}`, lang);
  }

  async updateSeo(page: string, data: any, lang: string = 'tr') {
    return this.saveContent(`seo_${page}`, data, lang);
  }

  async getAllSeo(lang: string = 'tr') {
    // Bu metod biraz tricky çünkü SEO verileri ayrı row'larda tutuluyor
    // Like sorgusu ile tüm seo_* verilerini çekebiliriz
    const allSeo = await this.contentRepository.createQueryBuilder('content')
      .where('content.key LIKE :key', { key: 'seo_%' })
      .andWhere('content.language = :lang', { lang })
      .getMany();

    const result = {};
    allSeo.forEach(item => {
      const page = item.key.replace('seo_', '');
      result[page] = item.data;
    });
    return result;
  }

  // Site Settings
  async getSiteSettings(category?: string, lang: string = 'tr') {
    if (category) {
      return this.getContent(`siteSettings_${category}`, lang);
    }

    // Tüm ayarları getir
    const allSettings = await this.contentRepository.createQueryBuilder('content')
      .where('content.key LIKE :key', { key: 'siteSettings_%' })
      .andWhere('content.language = :lang', { lang })
      .getMany();

    const result = {};
    allSettings.forEach(item => {
      const cat = item.key.replace('siteSettings_', '');
      result[cat] = item.data;
    });
    return result;
  }

  async updateSiteSettings(category: string, data: any, lang: string = 'tr') {
    return this.saveContent(`siteSettings_${category}`, data, lang);
  }

  // Tüm içeriği getir
  async getAllContent(lang: string = 'tr') {
    const allContent = await this.contentRepository.find({ where: { language: lang } });
    const result = {};

    allContent.forEach(item => {
      if (item.key.startsWith('seo_')) {
        if (!result['seo']) result['seo'] = {};
        result['seo'][item.key.replace('seo_', '')] = item.data;
      } else if (item.key.startsWith('siteSettings_')) {
        // siteSettings yapısını json'daki gibi döndürmek için üst yapıyı oluşturmaya gerek yok
        // çünkü frontend muhtemelen bunu beklemiyor, ama orijinal yapıyı korumaya çalışalım
        // Orijinal yapı: { siteSettings: { tr: { ... } } } değil, 
        // getAllContent -> content[lang] döndürüyordu.
        // Yani result içinde navbar, hero vs. var.
        // siteSettings normalde content[lang] içinde değil, ayrı bir root key idi.
        // Ancak getAllContent sadece content[lang] döndürüyordu.
        // O yüzden siteSettings buraya dahil EDİLMEMELİ, çünkü orijinal kodda:
        // return content[lang] || {};
        // ve content yapısı: { tr: { ... }, siteSettings: { ... } }
        // Yani siteSettings getAllContent içinde gelmiyordu!
      } else {
        result[item.key] = item.data;
      }
    });
    return result;
  }
  // Blog methods
  async getBlogs(lang: string = 'tr') {
    const blogs = await this.getContent('blogs', lang);
    return Array.isArray(blogs) ? blogs : [];
  }

  async getBlog(slug: string, lang: string = 'tr') {
    const blogs = await this.getBlogs(lang);
    return blogs.find((blog: any) => blog.slug === slug) || null;
  }

  async getBlogByIdentifier(identifier: string, lang: string = 'tr') {
    const blogs = await this.getBlogs(lang);
    // identifier slug veya id olabilir
    return blogs.find((blog: any) => blog.slug === identifier || blog.id === identifier) || null;
  }

  async createBlog(blogData: any) {
    // Her iki dil için de blog oluştur
    const blogsTR = await this.getBlogs('tr');
    const blogsEN = await this.getBlogs('en');

    // ID oluştur
    const id = Date.now().toString();
    const newBlog = { ...blogData, id };

    // TR versiyonu
    blogsTR.push(newBlog);
    await this.saveContent('blogs', blogsTR, 'tr');

    // EN versiyonu
    blogsEN.push(newBlog);
    await this.saveContent('blogs', blogsEN, 'en');

    return true;
  }

  async updateBlog(id: string, blogData: any) {
    // Her iki dil için de güncelle
    const blogsTR = await this.getBlogs('tr');
    const blogsEN = await this.getBlogs('en');

    const indexTR = blogsTR.findIndex((blog: any) => blog.id === id);
    const indexEN = blogsEN.findIndex((blog: any) => blog.id === id);

    if (indexTR !== -1) {
      blogsTR[indexTR] = { ...blogsTR[indexTR], ...blogData, id };
      await this.saveContent('blogs', blogsTR, 'tr');
    }

    if (indexEN !== -1) {
      blogsEN[indexEN] = { ...blogsEN[indexEN], ...blogData, id };
      await this.saveContent('blogs', blogsEN, 'en');
    }

    return indexTR !== -1 || indexEN !== -1;
  }

  async deleteBlog(id: string) {
    // Her iki dilden de sil
    const blogsTR = await this.getBlogs('tr');
    const blogsEN = await this.getBlogs('en');

    const filteredTR = blogsTR.filter((blog: any) => blog.id !== id);
    const filteredEN = blogsEN.filter((blog: any) => blog.id !== id);

    await this.saveContent('blogs', filteredTR, 'tr');
    await this.saveContent('blogs', filteredEN, 'en');

    return true;
  }

  // Content Page methods
  async listContentPages(lang: string = 'tr') {
    const all = await this.contentRepository.find({ where: { language: lang } });
    return all
      .filter(c => c.key.startsWith('page_'))
      .map(c => ({
        slug: c.key.replace('page_', ''),
        title: c.data?.title || c.key.replace('page_', ''),
        description: c.data?.description || '',
      }));
  }

  async createContentPage(slug: string, data: any, lang: string = 'tr') {
    return this.saveContent(`page_${slug}`, data, lang);
  }

  async deleteContentPage(slug: string, lang: string = 'tr') {
    const content = await this.contentRepository.findOne({ where: { key: `page_${slug}`, language: lang } });
    if (content) {
      await this.contentRepository.remove(content);
      return true;
    }
    return false;
  }

  async getContentPage(slug: string, lang: string = 'tr') {
    return this.getContent(`page_${slug}`, lang);
  }

  async updateContentPage(slug: string, data: any, lang: string = 'tr') {
    // Sayfa verisini kaydet
    const pageResult = await this.saveContent(`page_${slug}`, data, lang);
    
    // Eğer data içinde seo varsa, ayrıca seo endpoint'ine de kaydet
    if (data.seo) {
      await this.saveContent(`seo_${slug}`, data.seo, lang);
    }
    
    return pageResult;
  }

  // Newsletter methods
  async subscribeNewsletter(email: string) {
    try {
      const subscribers = await this.getNewsletterSubscribers();

      // Email zaten kayıtlı mı kontrol et
      if (subscribers.some((sub: any) => sub.email === email)) {
        return false;
      }

      const newSubscriber = {
        email,
        subscribedAt: new Date().toISOString(),
        active: true
      };

      subscribers.push(newSubscriber);
      await this.saveContent('newsletter_subscribers', subscribers, 'tr');
      return true;
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      return false;
    }
  }

  async getNewsletterSubscribers() {
    const data = await this.getContent('newsletter_subscribers', 'tr');
    // Eğer data array değilse veya yoksa boş array döndür
    return Array.isArray(data) ? data : [];
  }

  // Contact form submissions
  async submitContactForm(formData: any) {
    try {
      const messages = await this.getContactMessages();
      
      messages.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        read: false,
        id: Date.now().toString()
      });

      await this.saveContent('contact_messages', messages, 'tr');
      return true;
    } catch (error) {
      console.error('Contact form submission error:', error);
      return false;
    }
  }

  async getContactMessages() {
    const data = await this.getContent('contact_messages', 'tr');
    return Array.isArray(data) ? data : [];
  }

  async markMessageAsRead(messageId: string) {
    try {
      const messages = await this.getContactMessages();
      const messageIndex = messages.findIndex((msg: any) => msg.id === messageId);
      
      if (messageIndex !== -1) {
        messages[messageIndex].read = true;
        await this.saveContent('contact_messages', messages, 'tr');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Mark message as read error:', error);
      return false;
    }
  }
}

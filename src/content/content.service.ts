import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}

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

  async updatePartners(data: any[], lang: string = 'tr') {
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

  // Popular Destinations
  async getPopularDestinations(lang: string = 'tr') {
    return this.getContent('popularDestinations', lang);
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
}

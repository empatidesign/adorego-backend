import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ContentService {
  private readonly contentPath = path.join(__dirname, '../../data/content.json');

  private readContent() {
    try {
      const data = fs.readFileSync(this.contentPath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Content okuma hatası:', error);
      return {};
    }
  }

  private writeContent(content: any) {
    try {
      fs.writeFileSync(this.contentPath, JSON.stringify(content, null, 2), 'utf-8');
      return true;
    } catch (error) {
      console.error('Content yazma hatası:', error);
      return false;
    }
  }

  // Navbar
  getNavbar(lang: string = 'tr') {
    const content = this.readContent();
    return content[lang]?.navbar || {};
  }

  updateNavbar(data: any, lang: string = 'tr') {
    const content = this.readContent();
    if (!content[lang]) content[lang] = {};
    content[lang].navbar = data;
    return this.writeContent(content);
  }

  // Hero
  getHero(lang: string = 'tr') {
    const content = this.readContent();
    return content[lang]?.hero || {};
  }

  updateHero(data: any, lang: string = 'tr') {
    const content = this.readContent();
    if (!content[lang]) content[lang] = {};
    content[lang].hero = data;
    return this.writeContent(content);
  }

  // Features
  getFeatures(lang: string = 'tr') {
    const content = this.readContent();
    return content[lang]?.features || [];
  }

  updateFeatures(data: any[], lang: string = 'tr') {
    const content = this.readContent();
    if (!content[lang]) content[lang] = {};
    content[lang].features = data;
    return this.writeContent(content);
  }

  // Partners
  getPartners(lang: string = 'tr') {
    const content = this.readContent();
    return content[lang]?.partners || [];
  }

  updatePartners(data: any[], lang: string = 'tr') {
    const content = this.readContent();
    if (!content[lang]) content[lang] = {};
    content[lang].partners = data;
    return this.writeContent(content);
  }

  // FAQ
  getFaq(lang: string = 'tr') {
    const content = this.readContent();
    return content[lang]?.faq || [];
  }

  updateFaq(data: any[], lang: string = 'tr') {
    const content = this.readContent();
    if (!content[lang]) content[lang] = {};
    content[lang].faq = data;
    return this.writeContent(content);
  }

  // HowItWorks
  getHowItWorks(lang: string = 'tr') {
    const content = this.readContent();
    const data = content[lang]?.howItWorks || { steps: [], buttons: [] };
    // Sıralı şekilde döndür
    if (data.steps) {
      data.steps = data.steps.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
    }
    if (data.buttons) {
      data.buttons = data.buttons.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
    }
    return data;
  }

  updateHowItWorks(data: any, lang: string = 'tr') {
    const content = this.readContent();
    if (!content[lang]) content[lang] = {};
    content[lang].howItWorks = data;
    return this.writeContent(content);
  }

  // CTA
  getCta(lang: string = 'tr') {
    const content = this.readContent();
    return content[lang]?.cta || {};
  }

  updateCta(data: any, lang: string = 'tr') {
    const content = this.readContent();
    if (!content[lang]) content[lang] = {};
    content[lang].cta = data;
    return this.writeContent(content);
  }

  // Solutions
  getSolutions(lang: string = 'tr') {
    const content = this.readContent();
    return content[lang]?.solutions || {};
  }

  updateSolutions(data: any, lang: string = 'tr') {
    const content = this.readContent();
    if (!content[lang]) content[lang] = {};
    content[lang].solutions = data;
    return this.writeContent(content);
  }

  // SEO
  getSeo(page: string = 'home', lang: string = 'tr') {
    const content = this.readContent();
    return content[lang]?.seo?.[page] || {};
  }

  updateSeo(page: string, data: any, lang: string = 'tr') {
    const content = this.readContent();
    if (!content[lang]) content[lang] = {};
    if (!content[lang].seo) content[lang].seo = {};
    content[lang].seo[page] = data;
    return this.writeContent(content);
  }

  getAllSeo(lang: string = 'tr') {
    const content = this.readContent();
    return content[lang]?.seo || {};
  }

  // Site Settings
  getSiteSettings(category?: string, lang: string = 'tr') {
    const content = this.readContent();
    const settings = content.siteSettings?.[lang] || {};
    return category ? settings[category] || {} : settings;
  }

  updateSiteSettings(category: string, data: any, lang: string = 'tr') {
    const content = this.readContent();
    if (!content.siteSettings) content.siteSettings = {};
    if (!content.siteSettings[lang]) content.siteSettings[lang] = {};
    content.siteSettings[lang][category] = data;
    return this.writeContent(content);
  }

  // Tüm içeriği getir
  getAllContent(lang: string = 'tr') {
    const content = this.readContent();
    return content[lang] || {};
  }
}


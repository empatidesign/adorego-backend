import { Controller, Get, Put, Body, UseGuards, Query, Param } from '@nestjs/common';
import { ContentService } from './content.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  // Public endpoints - Ana site için
  @Get('navbar')
  getNavbar(@Query('lang') lang: string = 'tr') {
    return this.contentService.getNavbar(lang);
  }

  @Get('hero')
  getHero(@Query('lang') lang: string = 'tr') {
    return this.contentService.getHero(lang);
  }

  @Get('features')
  getFeatures(@Query('lang') lang: string = 'tr') {
    return this.contentService.getFeatures(lang);
  }

  @Get('partners')
  getPartners(@Query('lang') lang: string = 'tr') {
    return this.contentService.getPartners(lang);
  }

  @Get('faq')
  getFaq(@Query('lang') lang: string = 'tr') {
    return this.contentService.getFaq(lang);
  }

  @Get('howitworks')
  getHowItWorks(@Query('lang') lang: string = 'tr') {
    return this.contentService.getHowItWorks(lang);
  }

  @Get('cta')
  getCta(@Query('lang') lang: string = 'tr') {
    return this.contentService.getCta(lang);
  }

  @Get('solutions')
  getSolutions(@Query('lang') lang: string = 'tr') {
    return this.contentService.getSolutions(lang);
  }

  @Get('seo/:page')
  getSeo(@Param('page') page: string, @Query('lang') lang: string = 'tr') {
    return this.contentService.getSeo(page, lang);
  }

  @Get('seo')
  getAllSeo(@Query('lang') lang: string = 'tr') {
    return this.contentService.getAllSeo(lang);
  }

  @Get('settings/:category')
  getSiteSettings(@Param('category') category: string, @Query('lang') lang: string = 'tr') {
    return this.contentService.getSiteSettings(category, lang);
  }

  @Get('settings')
  getAllSettings(@Query('lang') lang: string = 'tr') {
    return this.contentService.getSiteSettings(undefined, lang);
  }

  @Get('all')
  getAllContent(@Query('lang') lang: string = 'tr') {
    return this.contentService.getAllContent(lang);
  }

  // Protected endpoints - Admin paneli için
  @Put('navbar')
  @UseGuards(JwtAuthGuard)
  updateNavbar(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateNavbar(data, lang);
    return { success, message: success ? 'Navbar güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('hero')
  @UseGuards(JwtAuthGuard)
  updateHero(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateHero(data, lang);
    return { success, message: success ? 'Hero güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('features')
  @UseGuards(JwtAuthGuard)
  updateFeatures(@Body() body: { data: any[]; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateFeatures(data, lang);
    return { success, message: success ? 'Features güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('partners')
  @UseGuards(JwtAuthGuard)
  updatePartners(@Body() body: { data: any[]; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updatePartners(data, lang);
    return { success, message: success ? 'Partners güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('faq')
  @UseGuards(JwtAuthGuard)
  updateFaq(@Body() body: { data: any[]; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateFaq(data, lang);
    return { success, message: success ? 'FAQ güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('howitworks')
  @UseGuards(JwtAuthGuard)
  updateHowItWorks(@Body() body: { data: any[]; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateHowItWorks(data, lang);
    return { success, message: success ? 'How It Works güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('cta')
  @UseGuards(JwtAuthGuard)
  updateCta(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateCta(data, lang);
    return { success, message: success ? 'CTA Banner güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('solutions')
  @UseGuards(JwtAuthGuard)
  updateSolutions(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateSolutions(data, lang);
    return { success, message: success ? 'Solutions güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('seo/:page')
  @UseGuards(JwtAuthGuard)
  updateSeo(@Param('page') page: string, @Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateSeo(page, data, lang);
    return { success, message: success ? 'SEO ayarları güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('settings/:category')
  @UseGuards(JwtAuthGuard)
  updateSiteSettings(@Param('category') category: string, @Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateSiteSettings(category, data, lang);
    return { success, message: success ? 'Site ayarları güncellendi' : 'Güncelleme başarısız' };
  }
}


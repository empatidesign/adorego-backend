import { Controller, Get, Put, Body, UseGuards, Query, Param } from '@nestjs/common';
import { ContentService } from './content.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../users/user.entity';

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

  @Get('features-header')
  getFeaturesHeader(@Query('lang') lang: string = 'tr') {
    return this.contentService.getFeaturesHeader(lang);
  }

  @Get('partners')
  getPartners(@Query('lang') lang: string = 'tr') {
    return this.contentService.getPartners(lang);
  }

  @Get('faq')
  getFaq(@Query('lang') lang: string = 'tr') {
    return this.contentService.getFaq(lang);
  }

  @Get('faq-header')
  getFaqHeader(@Query('lang') lang: string = 'tr') {
    return this.contentService.getFaqHeader(lang);
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

  @Get('target-audience')
  getTargetAudience(@Query('lang') lang: string = 'tr') {
    return this.contentService.getTargetAudience(lang);
  }

  @Get('popular-destinations')
  getPopularDestinations(@Query('lang') lang: string = 'tr') {
    return this.contentService.getPopularDestinations(lang);
  }

  @Get('footer')
  getFooter(@Query('lang') lang: string = 'tr') {
    return this.contentService.getFooter(lang);
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
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateNavbar(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateNavbar(data, lang);
    return { success, message: success ? 'Navbar güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('hero')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateHero(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateHero(data, lang);
    return { success, message: success ? 'Hero güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('features')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateFeatures(@Body() body: { data: any[]; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateFeatures(data, lang);
    return { success, message: success ? 'Features güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('features-header')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateFeaturesHeader(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateFeaturesHeader(data, lang);
    return { success, message: success ? 'Features başlık güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('partners')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updatePartners(@Body() body: { data: any[]; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updatePartners(data, lang);
    return { success, message: success ? 'Partners güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('faq')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateFaq(@Body() body: { data: any[]; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateFaq(data, lang);
    return { success, message: success ? 'FAQ güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('faq-header')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateFaqHeader(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateFaqHeader(data, lang);
    return { success, message: success ? 'FAQ başlık güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('howitworks')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateHowItWorks(@Body() body: { data: any[]; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateHowItWorks(data, lang);
    return { success, message: success ? 'How It Works güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('cta')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateCta(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateCta(data, lang);
    return { success, message: success ? 'CTA Banner güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('solutions')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateSolutions(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateSolutions(data, lang);
    return { success, message: success ? 'Solutions güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('target-audience')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateTargetAudience(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateTargetAudience(data, lang);
    return { success, message: success ? 'Target Audience güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('popular-destinations')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updatePopularDestinations(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updatePopularDestinations(data, lang);
    return { success, message: success ? 'Popular Destinations güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('footer')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateFooter(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateFooter(data, lang);
    return { success, message: success ? 'Footer güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('seo/:page')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateSeo(@Param('page') page: string, @Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateSeo(page, data, lang);
    return { success, message: success ? 'SEO ayarları güncellendi' : 'Güncelleme başarısız' };
  }

  @Put('settings/:category')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateSiteSettings(@Param('category') category: string, @Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateSiteSettings(category, data, lang);
    return { success, message: success ? 'Site ayarları güncellendi' : 'Güncelleme başarısız' };
  }
}


import { Controller, Get, Put, Post, Delete, Body, UseGuards, Query, Param } from '@nestjs/common';
import { ContentService } from './content.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../users/user.entity';
import { NewsletterSubscribeDto } from './newsletter.dto';
import { ContactFormDto } from './contact-form.dto';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) { }

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

  @Get('pricing')
  getPricing(@Query('lang') lang: string = 'tr') {
    return this.contentService.getPricing(lang);
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

  @Get('page/:slug')
  getContentPage(@Param('slug') slug: string, @Query('lang') lang: string = 'tr') {
    return this.contentService.getContentPage(slug, lang);
  }

  @Put('page/:slug')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateContentPage(@Param('slug') slug: string, @Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateContentPage(slug, data, lang);
    return { success, message: success ? 'Sayfa güncellendi' : 'Güncelleme başarısız' };
  }
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

  @Put('pricing')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updatePricing(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updatePricing(data, lang);
    return { success, message: success ? 'Fiyat listesi güncellendi' : 'Güncelleme başarısız' };
  }

  @Get('tracking')
  getTracking(@Query('lang') lang: string = 'tr') {
    return this.contentService.getTracking(lang);
  }

  @Put('tracking')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateTracking(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateTracking(data, lang);
    return { success, message: success ? 'Gönderi takibi güncellendi' : 'Güncelleme başarısız' };
  }

  @Get('contact')
  getContact(@Query('lang') lang: string = 'tr') {
    return this.contentService.getContact(lang);
  }

  @Put('contact')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateContact(@Body() body: { data: any; lang: string }) {
    const { data, lang = 'tr' } = body;
    const success = this.contentService.updateContact(data, lang);
    return { success, message: success ? 'İletişim sayfası güncellendi' : 'Güncelleme başarısız' };
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

  // Blog endpoints
  @Get('blogs')
  getBlogs(@Query('lang') lang: string = 'tr') {
    return this.contentService.getBlogs(lang);
  }

  @Get('blog/:identifier')
  getBlog(@Param('identifier') identifier: string, @Query('lang') lang: string = 'tr') {
    // identifier slug veya id olabilir
    return this.contentService.getBlogByIdentifier(identifier, lang);
  }

  @Post('blog')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  createBlog(@Body() body: any) {
    const success = this.contentService.createBlog(body);
    return { success, message: success ? 'Blog oluşturuldu' : 'Oluşturma başarısız' };
  }

  @Put('blog/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateBlog(@Param('id') id: string, @Body() body: any) {
    const success = this.contentService.updateBlog(id, body);
    return { success, message: success ? 'Blog güncellendi' : 'Güncelleme başarısız' };
  }

  @Delete('blog/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  deleteBlog(@Param('id') id: string) {
    const success = this.contentService.deleteBlog(id);
    return { success, message: success ? 'Blog silindi' : 'Silme başarısız' };
  }

  // Newsletter subscription
  @Post('newsletter/subscribe')
  subscribeNewsletter(@Body() body: NewsletterSubscribeDto) {
    const success = this.contentService.subscribeNewsletter(body.email);
    return { success, message: success ? 'Bültene başarıyla abone oldunuz' : 'Abonelik başarısız' };
  }

  @Get('newsletter/subscribers')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  getNewsletterSubscribers() {
    return this.contentService.getNewsletterSubscribers();
  }

  // Contact form submission
  @Post('contact/submit')
  submitContactForm(@Body() body: ContactFormDto) {
    const success = this.contentService.submitContactForm(body);
    return { success, message: success ? 'Mesajınız başarıyla gönderildi' : 'Gönderim başarısız' };
  }

  @Get('contact/messages')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  getContactMessages() {
    return this.contentService.getContactMessages();
  }

  @Put('contact/messages/:id/read')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  markMessageAsRead(@Param('id') id: string) {
    const success = this.contentService.markMessageAsRead(id);
    return { success, message: success ? 'Mesaj okundu olarak işaretlendi' : 'İşaretleme başarısız' };
  }
}

--
-- PostgreSQL database dump
--

\restrict lH7Mik4SvvKRUtESjhVTmXFZPQGAUCqroZgmh5ioFj8fW3GIto4sJL4zdn390G1

-- Dumped from database version 15.15
-- Dumped by pg_dump version 15.15

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: content; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.content (
    id integer NOT NULL,
    key character varying NOT NULL,
    language character varying DEFAULT 'tr'::character varying NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.content OWNER TO postgres;

--
-- Name: content_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.content_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.content_id_seq OWNER TO postgres;

--
-- Name: content_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.content_id_seq OWNED BY public.content.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    role character varying DEFAULT 'user'::character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: content id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content ALTER COLUMN id SET DEFAULT nextval('public.content_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: content; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.content (id, key, language, data, "createdAt", "updatedAt") FROM stdin;
1	navbar	tr	{"logo": "http://localhost:3001/api/upload/images/image-1766961805008-980226528.png", "brandName": "adoreGo", "menuItems": [{"id": "1", "link": "#yurtdisi", "type": "link", "label": "Yurtdışı Kargo", "order": 0}, {"id": "2", "link": "#yurtici", "type": "link", "label": "Yurtiçi Kargo", "order": 1}, {"id": "3", "link": "#fiyat-hesapla", "type": "link", "label": "Fiyat Hesapla", "order": 2}, {"id": "4", "link": "#takip", "type": "link", "label": "Gönderi Takibi", "order": 3}], "ctaButtons": [{"id": "1", "icon": "fa-user-shield", "link": "/admin", "label": "PANEL", "order": 0, "style": "outline"}, {"id": "2", "link": "#", "label": "ÜYE OL", "order": 1, "style": "primary"}]}	2026-01-06 05:11:54.345276	2026-01-06 05:11:54.345276
4	features	tr	[{"id": "1", "icon": "fa-rocket", "color": "bg-gradient-to-br from-blue-500 to-blue-600", "order": 0, "title": "Hızlı Entegrasyon", "description": "Pazaryeri mağazalarınızı dakikalar içinde bağlayın, gönderilerinizi otomatik yönetin."}, {"id": "2", "icon": "fa-shield-halved", "color": "bg-gradient-to-br from-green-500 to-green-600", "order": 1, "title": "Tam Güvence", "description": "adoreGo ile tüm paketleriniz sigortalı ve uçtan uca takip sistemimizle koruma altında."}, {"id": "3", "icon": "fa-map-location-dot", "color": "bg-gradient-to-br from-purple-500 to-purple-600", "order": 2, "title": "Global Takip", "description": "Dünyanın neresinde olursa olsun kargonuzu canlı harita üzerinden takip edin."}, {"id": "4", "icon": "fa-hand-holding-dollar", "color": "bg-gradient-to-br from-orange-500 to-orange-600", "order": 3, "title": "Rekabetçi Fiyat", "description": "Hacminiz ne olursa olsun, en uygun birim fiyat garantisi ile lojistik maliyetlerinizi düşürün."}]	2026-01-06 05:11:54.360071	2026-01-06 05:11:54.360071
5	partners	tr	[{"id": "1", "logo": "", "name": "DHL", "color": "bg-gradient-to-br from-yellow-400 to-red-500", "order": 0}, {"id": "2", "logo": "", "name": "FedEx", "color": "bg-gradient-to-br from-purple-500 to-orange-500", "order": 1}, {"id": "3", "logo": "", "name": "UPS", "color": "bg-gradient-to-br from-yellow-600 to-yellow-700", "order": 2}, {"id": "4", "logo": "", "name": "TNT", "color": "bg-gradient-to-br from-orange-500 to-red-600", "order": 3}]	2026-01-06 05:11:54.363294	2026-01-06 05:11:54.363294
6	faq	tr	[{"id": "1", "order": 0, "answer": "Kargo ücretleri ağırlık, hacim ve gönderim ülkesine göre değişmektedir. Fiyat hesaplama aracımızı kullanarak anında fiyat teklifi alabilirsiniz.", "question": "Kargo ücreti nasıl hesaplanır?"}, {"id": "2", "order": 1, "answer": "Teslimat süreleri ülkeye ve seçilen kargo servisine göre 2-7 iş günü arasında değişmektedir.", "question": "Teslimat süresi ne kadar?"}, {"id": "3", "order": 2, "answer": "Evet, tüm gönderi paketleriniz otomatik olarak sigortalanmaktadır. Ek sigorta da tercih edebilirsiniz.", "question": "Paketlerim sigortalı mı?"}, {"id": "4", "order": 3, "answer": "220'den fazla ülkeye kargo gönderimi yapabiliyoruz. Detaylı liste için popüler destinasyonlar bölümünü inceleyebilirsiniz.", "question": "Hangi ülkelere gönderim yapabiliyorum?"}]	2026-01-06 05:11:54.365945	2026-01-06 05:11:54.365945
7	cta	tr	{"title": "Yurtdışına Açılmanın En Kolay Yolu.", "subtitle": "Hemen kayıt olun, ilk gönderinizde adoreGo farkını yaşayın.", "buttonLink": "#", "buttonText": "ÜCRETSİZ KAYIT", "backgroundImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"}	2026-01-06 05:11:54.368672	2026-01-06 05:11:54.368672
8	solutions	tr	{"badge": "ÖZEL ÇÖZÜMLER", "title": "İhtiyacına Göre", "services": [{"id": "1", "desc": "Yurtdışına ürün satışı yapıyorsan, kargonu mikro ihracata uygun gönder. Büyük firma olman gerekmez, küçük adetli satışlar yapılabilir.", "icon": "fa-box-open", "color": "bg-blue-500", "order": 0, "title": "Mikro İhracat Satış Amaçlı Gönderimler", "bgColor": "bg-blue-50"}, {"id": "2", "desc": "Desisi yüksek gönderilerde kapıda nakit & kart tahsilat. Kargo ücretini alıcı ödemeli gönderebilirsin.", "icon": "fa-truck-loading", "color": "bg-purple-500", "order": 1, "title": "Büyük Desi + Alıcı Ödemeli", "bgColor": "bg-purple-50"}, {"id": "3", "desc": "Kargo ücreti satıcıdan değil, teslimatta alıcıdan tahsil edilir. Alıcı nakit veya kredi kartı ile ödeyebilir.", "icon": "fa-hand-holding-dollar", "color": "bg-green-500", "order": 2, "title": "Alıcı Ödemeli Kargo (Yurtiçi)", "bgColor": "bg-green-50"}, {"id": "4", "desc": "Yurtdışındaki adresinden Türkiye'deki adrese kargo gönderebilirsin. Kapıdan alım, kapıya teslim.", "icon": "fa-plane-arrival", "color": "bg-orange-500", "order": 3, "title": "Yurtdışından Türkiye'ye Kargo", "bgColor": "bg-orange-50"}], "buttonLink": "#kayit", "buttonText": "HEMEN BAŞLA", "shippingOptions": [{"id": "1", "icon": "fa-coins", "color": "bg-green-500", "order": 0, "title": "Ekonomik Kargo", "features": ["En uygun fiyat", "5-7 iş günü teslimat", "Güvenli taşıma"], "subtitle": "Fiyat Öncelikliyse", "description": "Maliyetinizi düşürün. Zaman esnekliğiniz varsa en uygun fiyatlarla standart teslimat süresi ile gönderin."}, {"id": "2", "icon": "fa-bolt", "color": "bg-yellow-500", "order": 1, "title": "Express Kargo", "features": ["Hızlı teslimat", "2-3 iş günü", "Öncelikli işlem"], "subtitle": "Hız Öncelikliyse", "description": "Acil gönderimleriniz için hızlı teslimat. 2-3 iş günü içinde adrese teslim garantisi."}, {"id": "3", "icon": "fa-store", "color": "bg-blue-500", "order": 2, "title": "Mikro İhracat", "features": ["Gümrük kolaylığı", "Ticari fatura", "Düşük vergi oranı"], "subtitle": "Satış Amaçlıysa", "description": "E-ticaret satışlarınız için özel çözüm. Gümrük işlemleri dahil, ticari gönderi avantajları."}], "highlightedTitle": "Akıllı Gönderim."}	2026-01-06 05:11:54.37147	2026-01-06 05:11:54.37147
29	siteSettings_company	en	{"fullName": "adoreGo Lojistik A.Ş.", "taxNumber": "1234567890", "taxOffice": "Kadıköy", "foundedYear": "2020", "mersisNumber": "0123456789012345", "tradeRegisterNumber": "123456"}	2026-01-06 05:11:54.412347	2026-01-06 05:11:54.412347
9	seo	tr	{"home": {"title": "adoreGo - Yurtdışı Kargo ve Lojistik Çözümleri | En Uygun Fiyat", "author": "adoreGo", "robots": "index, follow", "ogImage": "https://adorego.com/og-image.jpg", "ogTitle": "adoreGo - Yurtdışı Kargo ve Lojistik Çözümleri", "keywords": "yurtdışı kargo, uluslararası kargo, mikro ihracat, e-ticaret lojistik, global kargo, adoreGo, express kargo, ekonomik kargo", "language": "tr", "canonical": "https://adorego.com", "description": "E-ticaret siteleriniz için yurtdışı kargo, mikro ihracat ve global lojistik çözümleri. 220+ ülkeye hızlı teslimat, sabit fiyat garantisi. Ücretsiz üye olun!", "twitterCard": "summary_large_image", "twitterImage": "https://adorego.com/og-image.jpg", "twitterTitle": "adoreGo - Yurtdışı Kargo ve Lojistik Çözümleri", "ogDescription": "220+ ülkeye hızlı ve güvenli kargo gönderimi. E-ticaret siteleriniz için kapıdan alım, mikro ihracat ve global lojistik çözümleri.", "twitterDescription": "220+ ülkeye hızlı ve güvenli kargo gönderimi. Sabit fiyat garantisi ile lojistik maliyetlerinizi düşürün."}}	2026-01-06 05:11:54.375131	2026-01-06 05:11:54.375131
10	siteSettings	tr	{"schema": {"url": "https://adorego.com", "logo": "https://adorego.com/logo.png", "name": "adoreGo", "@type": "Organization", "sameAs": ["https://facebook.com/adorego", "https://twitter.com/adorego", "https://instagram.com/adorego", "https://linkedin.com/company/adorego"], "address": {"@type": "PostalAddress", "addressCountry": "TR", "addressLocality": "İstanbul"}, "@context": "https://schema.org", "description": "Global lojistik ve yurtdışı kargo çözümleri", "contactPoint": {"@type": "ContactPoint", "email": "info@adorego.com", "telephone": "+90-212-123-45-67", "contactType": "Customer Service", "availableLanguage": ["Turkish", "English"]}}, "company": {"fullName": "adoreGo Lojistik A.Ş.", "taxNumber": "1234567890", "taxOffice": "Kadıköy", "foundedYear": "2020", "mersisNumber": "0123456789012345", "tradeRegisterNumber": "123456"}, "contact": {"email": "info@adorego.com", "phone": "+90 (212) 123 45 67", "address": "İstanbul, Türkiye", "whatsapp": "+90 (532) 123 45 67", "workingHours": "Pazartesi - Cuma: 09:00 - 18:00"}, "general": {"siteUrl": "https://adorego.com", "currency": "TRY", "language": "tr", "siteName": "adoreGo", "timezone": "Europe/Istanbul", "siteTitle": "adoreGo - Global Lojistik Çözümleri", "adminEmail": "admin@adorego.com", "supportEmail": "destek@adorego.com"}, "socialMedia": {"tiktok": "", "twitter": "https://twitter.com/adorego", "youtube": "https://youtube.com/@adorego", "facebook": "https://facebook.com/adorego", "linkedin": "https://linkedin.com/company/adorego", "instagram": "https://instagram.com/adorego", "pinterest": ""}}	2026-01-06 05:11:54.378684	2026-01-06 05:11:54.378684
11	navbar	en	{"logo": "http://localhost:3001/api/upload/images/image-1766961805008-980226528.png", "brandName": "adoreGo", "menuItems": [{"id": "1", "link": "#yurtdisi", "type": "link", "label": "International Shipping", "order": 0}, {"id": "2", "link": "#yurtici", "type": "link", "label": "Domestic Shipping", "order": 1}, {"id": "3", "link": "#fiyat-hesapla", "type": "link", "label": "Calculate Price", "order": 2}, {"id": "4", "link": "#takip", "type": "link", "label": "Track Shipment", "order": 3}], "ctaButtons": [{"id": "1", "icon": "fa-user-shield", "link": "/admin", "label": "PANEL", "order": 0, "style": "outline"}, {"id": "2", "link": "#", "label": "SIGN UP", "order": 1, "style": "primary"}]}	2026-01-06 05:11:54.382129	2026-01-06 05:11:54.382129
12	hero	en	{"image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", "stats": [{"icon": "fa-globe-africa", "label": "GLOBAL NETWORK", "value": "220+"}, {"icon": "fa-award", "label": "INDUSTRY EXPERIENCE", "value": "35 Years"}], "title": "Profit\\nAbroad.\\nBest Shipping Rates Here.", "badges": [{"icon": "fa-check", "text": "NO APPLICATION REQUIRED", "color": "blue"}, {"icon": "fa-check", "text": "FIXED PRICE GUARANTEE", "color": "green"}], "buttons": [{"icon": "fa-user-plus", "text": "Free Sign Up", "style": "success"}], "subtitle": "Door-to-door pickup, micro export, and fast delivery solutions for e-commerce sites shipping internationally with adoreGo."}	2026-01-06 05:11:54.385058	2026-01-06 05:11:54.385058
13	howItWorks	en	{"badge": "PROCESS", "steps": [{"id": "1", "icon": "fa-search-dollar", "color": "bg-blue-500", "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=400&fit=crop", "order": 0, "title": "Get the Best Price Instantly", "description": "Enter your destination country and package details. The system shows you the best price instantly."}, {"id": "2", "icon": "fa-shipping-fast", "color": "bg-[#4DB848]", "image": "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=400&fit=crop", "order": 1, "title": "We Choose the Carrier for You", "description": "You don't have to choose a shipping company. The most suitable option for your shipment is automatically determined."}, {"id": "3", "icon": "fa-door-open", "color": "bg-[#102477]", "image": "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=400&h=400&fit=crop", "order": 2, "title": "Door-to-Door Delivery", "description": "Your shipment is picked up from your address and delivered to the recipient's door. Track the entire process from a single panel."}], "title": "International Shipping", "buttons": [{"id": "1", "icon": "", "link": "#price", "text": "Get Price", "order": 0, "style": "primary"}, {"id": "2", "icon": "fa-arrow-right", "link": "#", "text": "How to Send?", "order": 1, "style": "secondary"}], "titleHighlight": "How It Works?"}	2026-01-06 05:11:54.38794	2026-01-06 05:11:54.38794
14	features	en	[{"id": "1", "icon": "fa-rocket", "color": "bg-gradient-to-br from-blue-500 to-blue-600", "order": 0, "title": "Fast Integration", "description": "Connect your marketplace stores in minutes and manage your shipments automatically."}, {"id": "2", "icon": "fa-shield-halved", "color": "bg-gradient-to-br from-green-500 to-green-600", "order": 1, "title": "Full Protection", "description": "All your packages are insured with adoreGo and protected by our end-to-end tracking system."}, {"id": "3", "icon": "fa-map-location-dot", "color": "bg-gradient-to-br from-purple-500 to-purple-600", "order": 2, "title": "Global Tracking", "description": "Track your shipment on a live map, wherever it is in the world."}, {"id": "4", "icon": "fa-hand-holding-dollar", "color": "bg-gradient-to-br from-orange-500 to-orange-600", "order": 3, "title": "Competitive Pricing", "description": "Reduce your logistics costs with the best unit price guarantee, regardless of your volume."}]	2026-01-06 05:11:54.390414	2026-01-06 05:11:54.390414
15	partners	en	[{"id": "1", "logo": "", "name": "DHL", "color": "bg-gradient-to-br from-yellow-400 to-red-500", "order": 0}, {"id": "2", "logo": "", "name": "FedEx", "color": "bg-gradient-to-br from-purple-500 to-orange-500", "order": 1}, {"id": "3", "logo": "", "name": "UPS", "color": "bg-gradient-to-br from-yellow-600 to-yellow-700", "order": 2}, {"id": "4", "logo": "", "name": "TNT", "color": "bg-gradient-to-br from-orange-500 to-red-600", "order": 3}]	2026-01-06 05:11:54.391882	2026-01-06 05:11:54.391882
30	siteSettings_schema	en	{"foundingDate": "2020-01-01", "organizationType": "Corporation", "numberOfEmployees": "50-200"}	2026-01-06 05:11:54.413357	2026-01-06 05:11:54.413357
16	faq	en	[{"id": "1", "order": 0, "answer": "Shipping costs vary depending on weight, volume, and destination country. You can get an instant quote using our price calculator.", "question": "How is the shipping cost calculated?"}, {"id": "2", "order": 1, "answer": "Delivery times vary between 2-7 business days depending on the country and selected shipping service.", "question": "How long is the delivery time?"}, {"id": "3", "order": 2, "answer": "Yes, all your shipping packages are automatically insured. You can also opt for additional insurance.", "question": "Are my packages insured?"}, {"id": "4", "order": 3, "answer": "We can ship to over 220 countries. Please check the popular destinations section for a detailed list.", "question": "Which countries can I ship to?"}]	2026-01-06 05:11:54.393394	2026-01-06 05:11:54.393394
17	cta	en	{"title": "The Easiest Way to Go International.", "subtitle": "Sign up now and experience the adoreGo difference with your first shipment.", "buttonLink": "#", "buttonText": "FREE SIGN UP", "backgroundImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"}	2026-01-06 05:11:54.395272	2026-01-06 05:11:54.395272
18	solutions	en	{"badge": "SPECIAL SOLUTIONS", "title": "Smart Shipping", "services": [{"id": "1", "desc": "If you're selling products abroad, send your cargo suitable for micro export. You don't need to be a large company, small quantity sales are possible.", "icon": "fa-box-open", "color": "bg-blue-500", "order": 0, "title": "Micro Export for Sales Purposes", "bgColor": "bg-blue-50"}, {"id": "2", "desc": "Cash & card collection at the door for high volume shipments. You can send the cargo with receiver payment.", "icon": "fa-truck-loading", "color": "bg-purple-500", "order": 1, "title": "Large Volume + Receiver Payment", "bgColor": "bg-purple-50"}, {"id": "3", "desc": "Cargo fee is collected from the receiver on delivery, not from the sender. Receiver can pay by cash or credit card.", "icon": "fa-hand-holding-dollar", "color": "bg-green-500", "order": 2, "title": "Receiver Payment Cargo (Domestic)", "bgColor": "bg-green-50"}, {"id": "4", "desc": "You can send cargo from your address abroad to an address in Turkey. Door-to-door pickup and delivery.", "icon": "fa-plane-arrival", "color": "bg-orange-500", "order": 3, "title": "From Abroad to Turkey Cargo", "bgColor": "bg-orange-50"}], "buttonLink": "#register", "buttonText": "GET STARTED", "shippingOptions": [{"id": "1", "icon": "fa-coins", "color": "bg-green-500", "order": 0, "title": "Economy Shipping", "features": ["Best price", "5-7 business days delivery", "Safe transport"], "subtitle": "If Price is Priority", "description": "Reduce your costs. If you have time flexibility, ship with the most affordable prices and standard delivery time."}, {"id": "2", "icon": "fa-bolt", "color": "bg-yellow-500", "order": 1, "title": "Express Shipping", "features": ["Fast delivery", "2-3 business days", "Priority processing"], "subtitle": "If Speed is Priority", "description": "Fast delivery for your urgent shipments. Guaranteed address delivery within 2-3 business days."}, {"id": "3", "icon": "fa-store", "color": "bg-blue-500", "order": 2, "title": "Micro Export", "features": ["Customs facilitation", "Commercial invoice", "Low tax rate"], "subtitle": "If For Sales Purpose", "description": "Special solution for your e-commerce sales. Customs procedures included, commercial shipment advantages."}], "highlightedTitle": "Based on Your Needs."}	2026-01-06 05:11:54.397189	2026-01-06 05:11:54.397189
19	seo	en	{"home": {"title": "adoreGo - International Shipping & Logistics Solutions | Best Rates", "author": "adoreGo", "robots": "index, follow", "ogImage": "https://adorego.com/og-image.jpg", "ogTitle": "adoreGo - International Shipping & Logistics Solutions", "keywords": "international shipping, global cargo, micro export, e-commerce logistics, express shipping, adoreGo, worldwide delivery, freight forwarding", "language": "en", "canonical": "https://adorego.com/en", "description": "Global shipping, micro export and logistics solutions for e-commerce. Fast delivery to 220+ countries with fixed price guarantee. Sign up for free!", "twitterCard": "summary_large_image", "twitterImage": "https://adorego.com/og-image.jpg", "twitterTitle": "adoreGo - International Shipping & Logistics Solutions", "ogDescription": "Fast and secure shipping to 220+ countries. Door-to-door pickup, micro export and global logistics solutions for your e-commerce business.", "twitterDescription": "Fast and secure shipping to 220+ countries. Reduce your logistics costs with fixed price guarantee."}}	2026-01-06 05:11:54.4028	2026-01-06 05:11:54.4028
20	siteSettings	en	{"schema": {"url": "https://adorego.com", "logo": "https://adorego.com/logo.png", "name": "adoreGo", "@type": "Organization", "sameAs": ["https://facebook.com/adorego", "https://twitter.com/adorego", "https://instagram.com/adorego", "https://linkedin.com/company/adorego"], "address": {"@type": "PostalAddress", "addressCountry": "TR", "addressLocality": "Istanbul"}, "@context": "https://schema.org", "description": "Global logistics and international shipping solutions", "contactPoint": {"@type": "ContactPoint", "email": "info@adorego.com", "telephone": "+90-212-123-45-67", "contactType": "Customer Service", "availableLanguage": ["Turkish", "English"]}}, "company": {"fullName": "adoreGo Logistics Inc.", "taxNumber": "1234567890", "taxOffice": "Kadıköy", "foundedYear": "2020", "mersisNumber": "0123456789012345", "tradeRegisterNumber": "123456"}, "contact": {"email": "info@adorego.com", "phone": "+90 (212) 123 45 67", "address": "Istanbul, Turkey", "whatsapp": "+90 (532) 123 45 67", "workingHours": "Monday - Friday: 09:00 AM - 06:00 PM"}, "general": {"siteUrl": "https://adorego.com", "currency": "USD", "language": "en", "siteName": "adoreGo", "timezone": "Europe/Istanbul", "siteTitle": "adoreGo - Global Logistics Solutions", "adminEmail": "admin@adorego.com", "supportEmail": "support@adorego.com"}, "socialMedia": {"tiktok": "", "twitter": "https://twitter.com/adorego", "youtube": "https://youtube.com/@adorego", "facebook": "https://facebook.com/adorego", "linkedin": "https://linkedin.com/company/adorego", "instagram": "https://instagram.com/adorego", "pinterest": ""}}	2026-01-06 05:11:54.404351	2026-01-06 05:11:54.404351
21	siteSettings_general	tr	{"siteUrl": "https://adorego.com", "siteName": "adoreGo", "siteTitle": "adoreGo - Yurtdışı Kargo ve Global Lojistik Çözümleri", "adminEmail": "admin@adorego.com", "supportEmail": "destek@adorego.com"}	2026-01-06 05:11:54.405486	2026-01-06 05:11:54.405486
22	siteSettings_contact	tr	{"email": "info@adorego.com", "phone": "+90 (212) 123 45 67", "address": "İstanbul, Türkiye", "whatsapp": "+90 (532) 123 45 67", "workingHours": "Pazartesi - Cuma: 09:00 - 18:00"}	2026-01-06 05:11:54.406334	2026-01-06 05:11:54.406334
23	siteSettings_socialMedia	tr	{"tiktok": "https://tiktok.com/@adorego", "twitter": "https://twitter.com/adorego", "youtube": "https://youtube.com/@adorego", "facebook": "https://facebook.com/adorego", "linkedin": "https://linkedin.com/company/adorego", "instagram": "https://instagram.com/adorego", "pinterest": "https://pinterest.com/adorego"}	2026-01-06 05:11:54.40723	2026-01-06 05:11:54.40723
24	siteSettings_company	tr	{"fullName": "adoreGo Lojistik A.Ş.", "taxNumber": "1234567890", "taxOffice": "Kadıköy", "foundedYear": "2020", "mersisNumber": "0123456789012345", "tradeRegisterNumber": "123456"}	2026-01-06 05:11:54.408112	2026-01-06 05:11:54.408112
25	siteSettings_schema	tr	{"foundingDate": "2020-01-01", "organizationType": "Corporation", "numberOfEmployees": "50-200"}	2026-01-06 05:11:54.408929	2026-01-06 05:11:54.408929
26	siteSettings_general	en	{"siteUrl": "https://adorego.com", "siteName": "adoreGo", "siteTitle": "adoreGo - International Shipping and Global Logistics Solutions", "adminEmail": "admin@adorego.com", "supportEmail": "support@adorego.com"}	2026-01-06 05:11:54.409825	2026-01-06 05:11:54.409825
27	siteSettings_contact	en	{"email": "info@adorego.com", "phone": "+90 (212) 123 45 67", "address": "Istanbul, Turkey", "whatsapp": "+90 (532) 123 45 67", "workingHours": "Monday - Friday: 09:00 AM - 06:00 PM"}	2026-01-06 05:11:54.410658	2026-01-06 05:11:54.410658
28	siteSettings_socialMedia	en	{"tiktok": "https://tiktok.com/@adorego", "twitter": "https://twitter.com/adorego", "youtube": "https://youtube.com/@adorego", "facebook": "https://facebook.com/adorego", "linkedin": "https://linkedin.com/company/adorego", "instagram": "https://instagram.com/adorego", "pinterest": "https://pinterest.com/adorego"}	2026-01-06 05:11:54.411487	2026-01-06 05:11:54.411487
3	howItWorks	tr	{"badge": "SÜREÇ", "steps": [{"id": "1", "icon": "fa-search-dollar", "color": "bg-blue-500", "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=400&fit=crop", "order": 0, "title": "En Uygun Fiyatı Anında Görürsün", "description": "Göndereceğin ülkeyi ve paketin bilgilerini girersin. Sistem sana en uygun fiyatı anında gösterir."}, {"id": "2", "icon": "fa-shipping-fast", "color": "bg-[#4DB848]", "image": "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=400&fit=crop", "order": 1, "title": "Biz Senin İçin Kargoyu Seçeriz", "description": "Kargo firması seçmek zorunda kalmazsın. Gönderine en uygun seçenek otomatik belirlenir."}, {"id": "3", "icon": "fa-door-open", "color": "bg-[#102477]", "image": "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=400&h=400&fit=crop", "order": 2, "title": "Kapından alıp, kapıya teslim ederiz", "description": "Gönderin adresinden alınır, alıcının kapısına teslim edilir. Tüm süreç tek panelden takip edilir."}], "title": "Yurtdışı Kargo", "buttons": [{"id": "1", "icon": "", "link": "#fiyat", "text": "Fiyatı Gör", "order": 0, "style": "primary"}, {"id": "2", "icon": "fa-arrow-right", "link": "#", "text": "Nasıl Gönderirim?", "order": 1, "style": "secondary"}], "titleHighlight": "Nasıl Çalışır?"}	2026-01-06 05:11:54.356711	2026-01-06 05:25:38.118358
2	hero	tr	{"image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", "stats": [{"icon": "fa-globe-africa", "label": "GLOBAL ÜLKE AĞI", "value": "220+"}, {"icon": "fa-award", "label": "SEKTÖREL TECRÜBE", "value": "35 Yıl"}], "title": "KazançYurtdışında.En Uygun Kargo Bizde.", "badges": [{"icon": "fa-check", "text": "BAŞVURU GEREKMEZ", "color": "blue"}, {"icon": "fa-check", "text": "SABİT FİYAT GARANTİSİ", "color": "green"}], "buttons": [{"icon": "fa-user-plus", "text": "Ücretsiz Üye Ol", "style": "success"}], "subtitle": "Yurtdışına kargo gönderimi yapan e-ticaret siteleri için kapıdan alım, mikro ihracat ve hızlı teslimat çözümleri adoreGo'da."}	2026-01-06 05:11:54.353198	2026-01-06 05:30:53.936477
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, username, password, "createdAt", "updatedAt", role) FROM stdin;
3	user	$2a$12$o71Z2wXD7u4S88DSNRxw8u95Vcn1MTQNR/uCe3fy088HKaxD3gfLy	2026-01-06 05:16:48.515273	2026-01-06 05:16:48.515273	user
1	admin	$2a$12$o71Z2wXD7u4S88DSNRxw8u95Vcn1MTQNR/uCe3fy088HKaxD3gfLy	2026-01-06 05:16:48.515273	2026-01-06 05:16:48.515273	admin
\.


--
-- Name: content_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.content_id_seq', 30, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 3, true);


--
-- Name: content PK_6a2083913f3647b44f205204e36; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content
    ADD CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: user UQ_78a916df40e02a9deb1c4b75edb; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);


--
-- PostgreSQL database dump complete
--

\unrestrict lH7Mik4SvvKRUtESjhVTmXFZPQGAUCqroZgmh5ioFj8fW3GIto4sJL4zdn390G1


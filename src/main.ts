import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Static files (uploads klasörü)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });
  
  // Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // DTO'da olmayan alanları temizle
    forbidNonWhitelisted: true, // DTO'da olmayan alan varsa hata fırlat
    transform: true, // Payload'ı DTO class'ına dönüştür
    disableErrorMessages: false, // Hata mesajlarını göster (prod'da kapatılabilir)
  }));
  
  // CORS ayarları
  const corsOrigins = process.env.CORS_ORIGIN 
    ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim())
    : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'];
  
  app.enableCors({
    origin: (origin, callback) => {
      // Origin yoksa (Postman gibi) veya izin verilen listede ise kabul et
      if (!origin || corsOrigins.includes(origin) || corsOrigins.includes('*')) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy tarafından engellenmiş'));
      }
    },
    credentials: true,
  });

  // Global prefix
  app.setGlobalPrefix('api');

  const port = process.env.PORT || 3001;
  await app.listen(port);
  
  console.log(`🚀 Backend çalışıyor: http://localhost:${port}`);
  console.log(`📚 API: http://localhost:${port}/api`);
}

bootstrap();


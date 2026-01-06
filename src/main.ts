import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
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
    : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000', 'http://192.168.2.211:3000'];
  
  app.enableCors({
    origin: corsOrigins,
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


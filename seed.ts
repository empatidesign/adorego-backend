import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { seedData } from './seed-data';
import { Content } from './src/content/content.entity';
import { User } from './src/users/user.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5435,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password123',
  database: process.env.DB_DATABASE || 'adorego',
  entities: [Content, User],
  synchronize: false,
});

AppDataSource.initialize()
  .then(async (dataSource) => {
    console.log('📦 Veritabanına bağlanıldı');
    console.log('🌱 Seed data ekleniyor...');
    
    const contentRepository = dataSource.getRepository(Content);
    
    // Mevcut içeriği kontrol et ve tekrarları temizle
    const existingContent = await contentRepository.find();
    if (existingContent.length > 0) {
      console.log(`⚠️  Mevcut ${existingContent.length} içerik bulundu.`);
      
      // Aynı key ve language için birden fazla kayıt varsa en son olanı tut, diğerlerini sil
      const contentMap = new Map<string, Content>();
      for (const content of existingContent) {
        const key = `${content.key}_${content.language}`;
        if (!contentMap.has(key) || contentMap.get(key)!.id < content.id) {
          // Eğer zaten varsa eski kaydı sil
          if (contentMap.has(key)) {
            await contentRepository.remove(contentMap.get(key)!);
          }
          contentMap.set(key, content);
        } else {
          // Bu kayıt daha eski, sil
          await contentRepository.remove(content);
        }
      }
      console.log(`✅ Tekrarlayan kayıtlar temizlendi.`);
    }
    
    await seedData(dataSource);
    
    console.log('✅ Seed işlemi tamamlandı!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Seed işlemi başarısız:', error);
    process.exit(1);
  });

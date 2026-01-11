import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Content } from './src/content/content.entity';
import * as fs from 'fs';
import * as path from 'path';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5435', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password123',
    database: process.env.DB_DATABASE || 'adorego',
    entities: [Content],
    synchronize: false,
});

async function fixBlogImages() {
    try {
        await AppDataSource.initialize();
        console.log('📦 Veritabanına bağlanıldı');

        const contentRepository = AppDataSource.getRepository(Content);
        const uploadDir = path.join(process.cwd(), 'uploads');

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
            console.log('📁 uploads klasörü oluşturuldu');
        }

        const langs = ['tr', 'en'];
        for (const lang of langs) {
            const blogsRecord = await contentRepository.findOne({ where: { key: 'blogs', language: lang } });
            if (!blogsRecord || !Array.isArray(blogsRecord.data)) {
                console.log(`ℹ️ ${lang} için blog kaydı bulunamadı`);
                continue;
            }

            const blogs = blogsRecord.data;
            let updatedCount = 0;

            for (const blog of blogs) {
                if (blog.featuredImage && blog.featuredImage.startsWith('/Users/')) {
                    const sourcePath = blog.featuredImage;
                    const fileName = path.basename(sourcePath);
                    const targetPath = path.join(uploadDir, fileName);

                    try {
                        if (fs.existsSync(sourcePath)) {
                            fs.copyFileSync(sourcePath, targetPath);
                            blog.featuredImage = `/api/upload/images/${fileName}`;
                            updatedCount++;
                            console.log(`✅ Kopyalandı: ${fileName}`);
                        } else {
                            console.warn(`⚠️ Dosya bulunamadı: ${sourcePath}`);
                        }
                    } catch (err) {
                        console.error(`❌ Hata (${fileName}):`, err);
                    }
                }
            }

            if (updatedCount > 0) {
                blogsRecord.data = blogs;
                await contentRepository.save(blogsRecord);
                console.log(`🚀 ${lang} için ${updatedCount} blog görsel yolu güncellendi`);
            }
        }

        console.log('🎉 İşlem tamamlandı!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Kritik Hata:', error);
        process.exit(1);
    }
}

fixBlogImages();

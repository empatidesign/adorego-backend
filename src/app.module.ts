import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { ContentModule } from './content/content.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'adorego-super-secret-key-2024',
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '24h' },
    }),
    AuthModule,
    ContentModule,
    UploadModule,
  ],
})
export class AppModule {}


import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { ContentModule } from './content/content.module';
import { UploadModule } from './upload/upload.module';
import { UsersModule } from './users/users.module';
import { Content } from './content/content.entity';
import { User } from './users/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5433,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password123',
      database: process.env.DB_DATABASE || 'adorego',
      entities: [Content, User],
      synchronize: true, // Not recommended for production
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'adorego-super-secret-key-2024',
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '24h' },
    }),
    AuthModule,
    UsersModule,
    ContentModule,
    UploadModule,
  ],
})
export class AppModule {}


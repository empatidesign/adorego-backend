import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
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
    // Global rate limiter: max 100 istek / 60 saniye (login endpoint'i ayrıca kısıtlı)
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5435,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE || 'adorego',
      entities: [Content, User],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '24h' },
    }),
    AuthModule,
    UsersModule,
    ContentModule,
    UploadModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}


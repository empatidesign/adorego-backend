import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    // JwtModule global olarak app.module.ts'de tek yerden yönetiliyor
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  // UsersService AuthController'da inject edildiği için UsersModule import edilmeli (zaten var)
  exports: [AuthService],
})
export class AuthModule {}


import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  // Basit admin kullanıcısı (gerçek uygulamada veritabanından gelir)
  private readonly adminUser = {
    username: process.env.ADMIN_USERNAME || 'admin',
    // Şifre: admin123 (hash'lenmiş hali)
    passwordHash: '$2b$10$XqZ8J7ZqZ8J7ZqZ8J7ZqZO.qZ8J7ZqZ8J7ZqZ8J7ZqZ8J7ZqZ8J7Z',
  };

  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    if (username !== this.adminUser.username) {
      return null;
    }

    // Basit karşılaştırma (geliştirme için)
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (password === adminPassword) {
      const { passwordHash, ...result } = this.adminUser;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.username };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        username: user.username,
      },
    };
  }

  async verifyToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      return null;
    }
  }
}


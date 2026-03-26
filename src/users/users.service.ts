import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserRole } from './user.entity';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    // Admin seed işlemi kaldırıldı - güvenlik gereği
    // await this.seedAdminUser();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async changePassword(username: string, currentPassword: string, newPassword: string): Promise<boolean> {
    const user = await this.findOne(username);
    if (!user) return false;
    const valid = await bcrypt.compare(currentPassword, user.password);
    if (!valid) return false;
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(newPassword, salt);
    await this.usersRepository.save(user);
    return true;
  }

  async create(user: Partial<User>): Promise<User> {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    // Eğer rol belirtilmemişse varsayılan olarak USER atanır (Entity'de tanımlı)
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  // private async seedAdminUser() {
  //   const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  //   const adminUser = await this.findOne(adminUsername);
  //
  //   if (!adminUser) {
  //     console.log('Admin kullanıcısı bulunamadı, oluşturuluyor...');
  //     const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  //     await this.create({
  //       username: adminUsername,
  //       password: adminPassword,
  //       role: UserRole.ADMIN,
  //     });
  //     console.log('Admin kullanıcısı oluşturuldu.');
  //   }
  // }
}

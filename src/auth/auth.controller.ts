import { Controller, Post, Body, UnauthorizedException, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LoginDto } from './login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const { username, password } = body;
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Kullanıcı adı veya şifre hatalı');
    }
    return this.authService.login(user);
  }

  @Post('change-password')
  @UseGuards(JwtAuthGuard)
  async changePassword(
    @Request() req: any,
    @Body() body: { currentPassword: string; newPassword: string },
  ) {
    const { currentPassword, newPassword } = body;
    if (!newPassword || newPassword.length < 6) {
      throw new UnauthorizedException('Yeni şifre en az 6 karakter olmalıdır');
    }
    const success = await this.usersService.changePassword(req.user.username, currentPassword, newPassword);
    if (!success) {
      throw new UnauthorizedException('Mevcut şifre hatalı');
    }
    return { success: true };
  }
}


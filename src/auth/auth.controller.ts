import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    
    const user = await this.authService.validateUser(username, password);
    
    if (!user) {
      throw new UnauthorizedException('Kullanıcı adı veya şifre hatalı');
    }

    return this.authService.login(user);
  }
}


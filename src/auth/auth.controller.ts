import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/authenticate.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async authenticate(@Body() createAuthDto: AuthDto) {
    const result = await this.authService.authenticate(createAuthDto);

    return {
      status_login: true,
      User: {
        id: result?.id,
        username: result?.username,
        role: result?.role,
      },
      Token: result?.token,
    };
  }
}

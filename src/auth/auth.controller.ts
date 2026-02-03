import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/authenticate.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  authenticate(@Body() createAuthDto: AuthDto) {
    return this.authService.authenticate(createAuthDto);
  }
}

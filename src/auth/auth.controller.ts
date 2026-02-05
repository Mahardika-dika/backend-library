import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/authenticate.dto';
import { Public } from './decorators/public.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Authenticate')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'This API is for authenticate users' })
  @Public()
  @Post('login')
  async authenticate(@Body() createAuthDto: AuthDto) {
    return await this.authService.authenticate(createAuthDto);
  }
}

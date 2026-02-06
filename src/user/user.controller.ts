import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/role.decorator';

@ApiTags('Users')
@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'This API is for creating user account' })
  @Public()
  @Post('createuser')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'This API is for showing all users data' })
  @Roles('ADMIN')
  @Get('findAllUser')
  async findAll() {
    return await this.userService.findAll();
  }

  @ApiOperation({ summary: 'This API is for showing specific users' })
  @Roles('ADMIN')
  @Get('specificUser/:id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id);
  }

  @ApiOperation({ summary: 'This API is for updating users data' })
  @Public()
  @Patch('updateUser/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: 'This API is for deleting user data' })
  @Roles('ADMIN')
  @Delete('deleteUser/:id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}

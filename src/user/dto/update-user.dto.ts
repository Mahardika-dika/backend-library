import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { $Enums } from '@prisma/client';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsEnum($Enums.UserRole)
  role?: $Enums.UserRole;

  @IsOptional()
  @IsString()
  memberId?: number;
}

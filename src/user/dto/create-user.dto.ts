import { $Enums } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  role: $Enums.UserRole;

  @IsNotEmpty()
  @IsString()
  memberId?: number;
}

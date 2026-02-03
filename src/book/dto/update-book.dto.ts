import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsString()
  year?: number;
}

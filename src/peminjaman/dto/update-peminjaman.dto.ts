import { PartialType } from '@nestjs/mapped-types';
import { CreatePeminjamanDto } from './create-peminjaman.dto';
import { IsOptional, IsNumber, Min } from 'class-validator';

export class UpdatePeminjamanDto extends PartialType(CreatePeminjamanDto) {
  @IsOptional()
  @IsNumber()
  @Min(1)
  book_id!: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  member_id!: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  borrow_id!: number;
}

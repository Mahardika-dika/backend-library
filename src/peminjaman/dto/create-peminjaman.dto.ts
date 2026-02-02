import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreatePeminjamanDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  book_id: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  member_id: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  borrow_id: number;
}

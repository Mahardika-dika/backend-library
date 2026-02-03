import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { UpdatePeminjamanDto } from './dto/update-peminjaman.dto';

@Controller('peminjaman')
export class PeminjamanController {
  constructor(private readonly peminjamanService: PeminjamanService) {}

  @Post('borrow')
  borrow(@Body() createPeminjamanDto: CreatePeminjamanDto) {
    return this.peminjamanService.borrow(createPeminjamanDto);
  }

  @Get('borrowInfo')
  borrowHistory() {
    return this.peminjamanService.borrowHistory();
  }

  @Get('borrowSpecificInfo/:id')
  borrowHistorySpecific(@Param('id') id: string) {
    return this.peminjamanService.borrowHistorySpecific(+id);
  }

  @Patch('borrowUpdate/:id')
  updateBorrow(
    @Param('id') id: string,
    @Body() updatePeminjamanDto: UpdatePeminjamanDto,
  ) {
    return this.peminjamanService.updateBorrow(+id, updatePeminjamanDto);
  }
  @Post('returnBook')
  returnBook(@Body() createPeminjamanDto: CreatePeminjamanDto) {
    return this.peminjamanService.returnBook(createPeminjamanDto);
  }

  @Get('returnBookInfo')
  returnBookHistory() {
    return this.peminjamanService.returnBookHistory();
  }

  @Get('returnBookSpecificInfo/:id')
  returnBookHistorySpecific(@Param('id') id: string) {
    return this.peminjamanService.returnBookHistorySpecific(+id);
  }

  @Patch('returnBookUpdate/:id')
  updateReturnBook(
    @Param('id') id: string,
    @Body() updatePeminjamanDto: UpdatePeminjamanDto,
  ) {
    return this.peminjamanService.updateReturnBook(+id, updatePeminjamanDto);
  }
}

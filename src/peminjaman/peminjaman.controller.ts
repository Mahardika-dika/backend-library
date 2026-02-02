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

  @Get('borrow')
  borrowHistory() {
    return this.peminjamanService.borrowHistory();
  }

  @Get('borrow/:id')
  borrowHistorySpecific(@Param('id') id: string) {
    return this.peminjamanService.borrowHistorySpecific(+id);
  }

  @Patch('borrow/:id')
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

  @Get('returnBook')
  returnBookHistory() {
    return this.peminjamanService.returnBookHistory();
  }

  @Get('returnBook/:id')
  returnBookHistorySpecific(@Param('id') id: string) {
    return this.peminjamanService.returnBookHistorySpecific(+id);
  }

  @Patch('returnBook/:id')
  updateReturnBook(
    @Param('id') id: string,
    @Body() updatePeminjamanDto: UpdatePeminjamanDto,
  ) {
    return this.peminjamanService.updateReturnBook(+id, updatePeminjamanDto);
  }
}

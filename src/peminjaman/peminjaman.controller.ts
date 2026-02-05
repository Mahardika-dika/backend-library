import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { UpdatePeminjamanDto } from './dto/update-peminjaman.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Public } from 'src/auth/decorators/public.decorator';

@ApiTags('Borrow & Returning')
@ApiBearerAuth()
@Controller('peminjaman')
export class PeminjamanController {
  constructor(private readonly peminjamanService: PeminjamanService) {}

  @ApiOperation({ summary: 'This API is for borrowing a book' })
  @Roles('ADMIN')
  @Post('borrow')
  borrow(@Body() createPeminjamanDto: CreatePeminjamanDto) {
    return this.peminjamanService.borrow(createPeminjamanDto);
  }

  @ApiOperation({ summary: 'This API is for showwing all borrow info' })
  @Public()
  @Get('borrowInfo')
  borrowHistory() {
    return this.peminjamanService.borrowHistory();
  }

  @ApiOperation({ summary: 'This API is for showing all specific borrow info' })
  @Public()
  @Get('borrowSpecificInfo/:id')
  borrowHistorySpecific(@Param('id') id: string) {
    return this.peminjamanService.borrowHistorySpecific(+id);
  }

  @ApiOperation({ summary: 'This API is for updating borrow data' })
  @Roles('ADMIN')
  @Patch('borrowUpdate/:id')
  updateBorrow(
    @Param('id') id: string,
    @Body() updatePeminjamanDto: UpdatePeminjamanDto,
  ) {
    return this.peminjamanService.updateBorrow(+id, updatePeminjamanDto);
  }

  @ApiOperation({ summary: 'This API is for returning book' })
  @Roles('ADMIN')
  @Post('returnBook')
  returnBook(@Body() createPeminjamanDto: CreatePeminjamanDto) {
    return this.peminjamanService.returnBook(createPeminjamanDto);
  }

  @ApiOperation({ summary: 'This API is for showing returned book history' })
  @Public()
  @Get('returnBookInfo')
  returnBookHistory() {
    return this.peminjamanService.returnBookHistory();
  }

  @ApiOperation({
    summary: 'This API is for showing specific returned book history',
  })
  @Public()
  @Get('returnBookSpecificInfo/:id')
  returnBookHistorySpecific(@Param('id') id: string) {
    return this.peminjamanService.returnBookHistorySpecific(+id);
  }

  @ApiOperation({ summary: 'This API is for updating returned book data' })
  @Roles('ADMIN')
  @Patch('returnBookUpdate/:id')
  updateReturnBook(
    @Param('id') id: string,
    @Body() updatePeminjamanDto: UpdatePeminjamanDto,
  ) {
    return this.peminjamanService.updateReturnBook(+id, updatePeminjamanDto);
  }
}

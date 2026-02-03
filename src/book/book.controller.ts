import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('createBook')
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.bookService.create(createBookDto);
  }

  @Get('bookInfo')
  async findAll() {
    return await this.bookService.findAll();
  }

  @Get('specificBookInfo/:id')
  async findOne(@Param('id') id: string) {
    return await this.bookService.findOne(+id);
  }

  @Patch('updateBook/:id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return await this.bookService.update(+id, updateBookDto);
  }

  @Delete('removeBook/:id')
  async remove(@Param('id') id: string) {
    return await this.bookService.remove(+id);
  }
}

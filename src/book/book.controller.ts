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
import { Roles } from 'src/auth/decorators/role.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Book')
@ApiBearerAuth()
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @ApiOperation({ summary: 'This API is for creating book data' })
  @Roles('ADMIN')
  @Post('createBook')
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.bookService.create(createBookDto);
  }

  @ApiOperation({ summary: 'This API is for showing all book data' })
  @Roles('ADMIN')
  @Get('bookInfo')
  async findAll() {
    return await this.bookService.findAll();
  }

  @ApiOperation({ summary: 'This API is for showing specific book data' })
  @Roles('ADMIN')
  @Get('specificBookInfo/:id')
  async findOne(@Param('id') id: string) {
    return await this.bookService.findOne(+id);
  }

  @ApiOperation({ summary: 'This API is for updating book data' })
  @Roles('ADMIN')
  @Patch('updateBook/:id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return await this.bookService.update(+id, updateBookDto);
  }

  @ApiOperation({ summary: 'This API is for delete book data' })
  @Roles('ADMIN')
  @Delete('removeBook/:id')
  async remove(@Param('id') id: string) {
    return await this.bookService.remove(+id);
  }
}

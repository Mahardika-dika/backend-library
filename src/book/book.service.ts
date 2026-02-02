import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBookDto: CreateBookDto) {
    try {
      return await this.prisma.book.create({ data: createBookDto });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.book.findMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.book.findFirst({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      return await this.prisma.book.update({
        where: { id },
        data: updateBookDto,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.book.delete({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }
}

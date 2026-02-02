import { Injectable } from '@nestjs/common';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { UpdatePeminjamanDto } from './dto/update-peminjaman.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PeminjamanService {
  constructor(private readonly prisma: PrismaService) {}

  async borrow(createPeminjamanDto: CreatePeminjamanDto) {
    try {
      return await this.prisma.borrowBook.create({
        data: {
          book_id: createPeminjamanDto.book_id,
          member_id: createPeminjamanDto.member_id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async borrowHistory() {
    try {
      return await this.prisma.borrowBook.findMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async borrowHistorySpecific(id: number) {
    try {
      return await this.prisma.borrowBook.findFirst({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async updateBorrow(id: number, updatePeminjamanDto: UpdatePeminjamanDto) {
    try {
      return await this.prisma.borrowBook.update({
        where: { id },
        data: {
          book_id: updatePeminjamanDto.book_id,
          member_id: updatePeminjamanDto.member_id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  async returnBook(createPeminjamanDto: CreatePeminjamanDto) {
    try {
      return await this.prisma.returnBook.create({
        data: {
          borrow_id: createPeminjamanDto.borrow_id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async returnBookHistory() {
    try {
      return await this.prisma.returnBook.findMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async returnBookHistorySpecific(id: number) {
    try {
      return await this.prisma.returnBook.findFirst({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async updateReturnBook(id: number, updatePeminjamanDto: UpdatePeminjamanDto) {
    try {
      return await this.prisma.returnBook.update({
        where: { id },
        data: {
          borrow_id: updatePeminjamanDto.borrow_id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

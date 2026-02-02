import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MemberService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMemberDto: CreateMemberDto) {
    try {
      const add = await this.prisma.member.create({ data: createMemberDto });

      if (!add) {
        throw new HttpException(
          { message: "Can't add member, try again later" },
          HttpStatus.BAD_REQUEST,
        );
      }
      return add;
    } catch (error) {
      if (error instanceof HttpException) {
        return error;
      }
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.member.findMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.member.findFirst({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    try {
      return await this.prisma.member.update({
        where: { id },
        data: updateMemberDto,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.member.delete({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }
}

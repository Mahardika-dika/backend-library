import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const hashed = await this.bcrypt.hashPassword(createUserDto.password);
    try {
      return await this.prisma.user.create({
        data: { ...createUserDto, password: hashed },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    return await this.prisma.user.findFirst({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hashed = await this.bcrypt.hashPassword(updateUserDto.password);
    try {
      return await this.prisma.user.update({
        where: { id },
        data: { ...updateUserDto, password: hashed },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }
}

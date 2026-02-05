import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/authenticate.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptService,
    private readonly jwt: JwtService,
  ) {}

  async authenticate(createAuthDto: AuthDto) {
    try {
      const find = await this.prisma.user.findUnique({
        where: { username: createAuthDto.username },
      });

      if (!find) {
        throw new HttpException(
          {
            message: "Can't find that username, try again later!",
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      const compare = await this.bcrypt.comparePassword(
        createAuthDto.password,
        find.password,
      );

      if (!compare) {
        throw new HttpException(
          { message: 'Wrong password, try again later' },
          HttpStatus.BAD_REQUEST,
        );
      }

      const payload = {
        id: find.id,
        username: find.username,
        role: find.role,
      };
      console.log(process.env.SECRET_KEY);
      const token = await this.jwt.signAsync(payload);

      return {
        id: payload.id,
        username: payload.username,
        role: payload.role,
        token,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        return error;
      } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new HttpException(
              {
                message: "Can't find that data, try again later",
              },
              HttpStatus.BAD_REQUEST,
            );

          default:
            throw new HttpException(
              { message: 'Database error!' },
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
      }
      console.log(error);
    }
  }
}

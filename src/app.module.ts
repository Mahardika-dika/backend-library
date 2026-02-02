import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MemberModule } from './member/member.module';
import { PeminjamanModule } from './peminjaman/peminjaman.module';
import { PrismaModule } from './prisma/prisma.module';
import { BcryptModule } from './bcrypt/bcrypt.module';

@Module({
  imports: [
    BookModule,
    AuthModule,
    UserModule,
    MemberModule,
    PeminjamanModule,
    PrismaModule,
    BcryptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

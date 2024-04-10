import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserDao } from './user.dao';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
@Module({
  providers: [UserService, UserDao, ConfigService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}

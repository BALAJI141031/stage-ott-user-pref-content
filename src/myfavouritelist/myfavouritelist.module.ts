import { Module } from '@nestjs/common';
import { MyfavouritelistController } from './myfavouritelist.controller';
import { MyfavouritelistService } from './myfavouritelist.service';
import { MyFavouriteListDao } from './myfavouritelist.dao';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { UserDao } from 'src/user/user.dao';
@Module({
  controllers: [MyfavouritelistController],
  providers: [
    MyfavouritelistService,
    MyFavouriteListDao,
    PrismaService,
    ConfigService,
    UserDao,
  ],
})
export class MyfavouritelistModule {}

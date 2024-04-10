import { Module } from '@nestjs/common';
import { MyfavouritelistController } from './myfavouritelist.controller';
import { MyfavouritelistService } from './myfavouritelist.service';
import { MyFavouriteListDao } from './myfavouritelist.dao';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
@Module({
  controllers: [MyfavouritelistController],
  providers: [
    MyfavouritelistService,
    MyFavouriteListDao,
    PrismaService,
    ConfigService,
  ],
})
export class MyfavouritelistModule {}

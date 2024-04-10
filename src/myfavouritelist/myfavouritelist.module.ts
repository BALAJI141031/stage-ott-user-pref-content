import { Module } from '@nestjs/common';
import { MyfavouritelistController } from './myfavouritelist.controller';
import { MyfavouritelistService } from './myfavouritelist.service';
import { MyFavouriteListDao } from './myfavouritelist.dao';

@Module({
  controllers: [MyfavouritelistController],
  providers: [MyfavouritelistService, MyFavouriteListDao],
})
export class MyfavouritelistModule {}

import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { MyfavouritelistService } from './myfavouritelist.service';

@Controller('myfavouritelist')
export class MyfavouritelistController {
  constructor(
    private readonly myfavouritelistSerivce: MyfavouritelistService,
  ) {}
  @Get()
  async getFavouriteList(
    @Query('pageNo') pageNo: number,
    @Query('pageSize') pageSize: number,
    @Query('userId') userId: string,
  ) {
    return this.myfavouritelistSerivce.getFavouriteList(
      userId,
      pageNo,
      pageSize,
    );
  }

  @Post()
  async addToFavouriteList(
    @Query('email') email: string,
    @Body() payload: { likedContent: string[] },
  ) {
    return await this.myfavouritelistSerivce.addToFavouriteList(
      email,
      payload.likedContent,
    );
  }

  @Delete()
  async DeleteFromMyFavouriteList(
    @Query('email') email: string,
    @Body() payload: { notIntersetedContent: string[] },
  ) {
    return await this.myfavouritelistSerivce.DeleteFromMyFavouriteList(
      email,
      payload.notIntersetedContent,
    );
  }
}

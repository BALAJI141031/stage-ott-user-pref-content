import { Catch, Injectable } from '@nestjs/common';
import { MyFavouriteListDao } from './myfavouritelist.dao';

@Injectable()
export class MyfavouritelistService {
  constructor(private readonly myFavouriteListDao: MyFavouriteListDao) {}
  async getFavouriteList(userId: string, pageNo: number, pageSize: number) {
    try {
      return await this.myFavouriteListDao.get(userId, pageNo, pageSize);
    } catch (error) {}
  }
  async addToFavouriteList(email: string, likedContent: string[]) {
    try {
    } catch (error) {}
  }

  async DeleteFromMyFavouriteList(
    email: string,
    notIntersetedContent: string[],
  ) {
    try {
    } catch (error) {}
  }
}

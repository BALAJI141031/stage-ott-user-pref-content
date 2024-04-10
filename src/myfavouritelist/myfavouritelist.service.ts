import { BadRequestException, Catch, Injectable } from '@nestjs/common';
import { MyFavouriteListDao } from './myfavouritelist.dao';
import { UserDao } from 'src/user/user.dao';

@Injectable()
export class MyfavouritelistService {
  constructor(
    private readonly myFavouriteListDao: MyFavouriteListDao,
    private readonly userDao: UserDao,
  ) {}
  async getFavouriteList(userId: string, pageNo: number, pageSize: number) {
    try {
      // commented becuase of time issue
      // const user = await this.userDao.getUser(email);
      // if (!user) {
      //   throw new BadRequestException('Invalid User');
      // }
      return await this.myFavouriteListDao.get(userId, pageNo, pageSize);
    } catch (error) {
      throw error;
    }
  }
  async addToFavouriteList(email: string, likedContent: string[]) {
    try {
      const user = await this.userDao.getUser(email);
      if (!user) {
        throw new BadRequestException('Invalid User');
      }
      const query = likedContent.map((contentId) => ({
        contentId,
        userId: user.id,
      }));
      return await this.myFavouriteListDao.createMany(query);
    } catch (error) {
      throw error;
    }
  }

  async DeleteFromMyFavouriteList(
    email: string,
    notIntersetedContent: string[],
  ) {
    try {
      const user = await this.userDao.getUser(email);
      if (!user) {
        throw new BadRequestException('Invalid User');
      }
      return await this.myFavouriteListDao.deleteMany(
        user.id,
        notIntersetedContent,
      );
    } catch (error) {
      throw error;
    }
  }
}

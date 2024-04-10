import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MyFavouriteListDao {
  constructor(private readonly prismaService: PrismaService) {}
  async get(userId: string, pageNo: number, pageSize: number) {
    const skip = (pageNo - 1) * pageSize;
    return await this.prismaService.likedContent.findMany({
      where: { userId },
      skip,
      take: pageSize,
    });
  }
}

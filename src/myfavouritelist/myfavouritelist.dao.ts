import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MyFavouriteListDao {
  constructor(private readonly prismaService: PrismaService) {}
  async get(userId: string, pageNo: number = 1, pageSize: number = 5) {
    const skip = (pageNo - 1) * pageSize;
    return await this.prismaService.likedContent.findMany({
      where: { userId },
      skip,
      take: pageSize,
      include: { Content: { include: { Movie: true, Tvshow: true } } },
    });
  }

  async createMany(data: Prisma.LikedContentCreateManyInput[]) {
    return await this.prismaService.likedContent.createMany({
      data,
      skipDuplicates: true,
    });
  }

  async deleteMany(userId: string, data: string[]) {
    return await this.prismaService.likedContent.deleteMany({
      where: { contentId: { in: data }, userId },
    });
  }
}

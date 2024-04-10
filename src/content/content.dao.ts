import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentDao {
  constructor(private readonly prismaService: PrismaService) {}
  async createMany(data: Prisma.ContentUncheckedCreateInput) {
    const resp = await this.prismaService.content.create({ data });
  }

  async getMovies() {
    return await this.prismaService.content.findMany({
      where: { type: 'MOVIE' },
      include: { Movie: true },
    });
  }

  async getTvShows() {
    return await this.prismaService.content.findMany({
      where: { type: 'TVSHOW' },
      include: { Tvshow: true },
    });
  }

  async getDirector() {
    return await this.prismaService.professionals.findFirstOrThrow({});
  }
}

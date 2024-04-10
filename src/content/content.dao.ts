import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentDao {
  constructor(private readonly prismaService: PrismaService) {}
  async createMany(data: Prisma.ContentUncheckedCreateInput) {
    const resp = await this.prismaService.content.create({ data });
  }

  async getDirector() {
    return await this.prismaService.professionals.findFirstOrThrow({});
  }
}

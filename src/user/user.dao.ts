import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserDao {
  constructor(private readonly prismaService: PrismaService) {}
  async createMany(data: Prisma.UserCreateManyInput[]) {
    return await this.prismaService.user.createMany({ data });
  }
  async getMany() {
    return await this.prismaService.user.findMany({});
  }
  // professionals creation

  async createManyProfessionals(data: Prisma.ProfessionalsCreateManyInput[]) {
    return await this.prismaService.professionals.createMany({ data });
  }
}

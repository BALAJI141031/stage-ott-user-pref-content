import { Injectable } from '@nestjs/common';
import { UserDao } from './user.dao';
import { faker } from '@faker-js/faker';
import { Prisma } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao) {}
  async adduser() {
    try {
      const users: Prisma.UserCreateManyInput[] = [];
      for (let i = 0; i < 5; i++) {
        users.push({
          email: faker.internet.email(),
          name: faker.person.fullName(),
        });
      }
      await this.userDao.createMany(users);
    } catch (error) {}
  }
  async getUsers() {
    try {
      return await this.userDao.getMany();
    } catch (error) {
      console.log('coming here--------------->');
    }
  }
  async addProfessional() {
    const users: Prisma.ProfessionalsCreateManyInput[] = [];
    for (let i = 0; i < 5; i++) {
      users.push({
        birthDate: '15/10/1999',
        name: faker.person.fullName(),
        industry: 'Bollywood',
      });
    }
    await this.userDao.createManyProfessionals(users);
  }
}

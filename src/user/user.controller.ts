import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async adduser() {
    return this.userService.adduser();
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  // create professionals
  @Post('professional')
  async addProfessional() {
    return this.userService.addProfessional();
  }
}

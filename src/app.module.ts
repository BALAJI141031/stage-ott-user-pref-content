import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserListModule } from './user-list/user-list.module';
import { UserListDaoService } from './user-list-dao/user-list-dao.service';
import { MyfavouritelistModule } from './myfavouritelist/myfavouritelist.module';
import { UserModule } from './user/user.module';
import { ContentModule } from './content/content.module';

@Module({
  imports: [PrismaModule, UserListModule, MyfavouritelistModule, UserModule, ContentModule],
  controllers: [AppController],
  providers: [AppService, UserListDaoService],
})
export class AppModule {}

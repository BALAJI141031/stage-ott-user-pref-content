import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MyfavouritelistModule } from './myfavouritelist/myfavouritelist.module';
import { UserModule } from './user/user.module';
import { ContentModule } from './content/content.module';

@Module({
  imports: [PrismaModule, MyfavouritelistModule, UserModule, ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

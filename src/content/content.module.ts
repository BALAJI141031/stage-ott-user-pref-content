import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { ContentDao } from './content.dao';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [ContentController],
  providers: [ContentService, ContentDao, PrismaService, ConfigService],
})
export class ContentModule {}

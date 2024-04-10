import { Controller, Post } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}
  @Post('episodes')
  async episodes() {
    return this.contentService.episodes();
  }

  @Post('movies')
  async movies() {
    return this.contentService.movies();
  }
}

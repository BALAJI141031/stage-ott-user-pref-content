import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { contentType } from '@prisma/client';
import { ContentDao } from './content.dao';

@Injectable()
export class ContentService {
  constructor(private readonly contentDao: ContentDao) {}
  async episodes() {
    try {
      for (let i = 0; i < 5; i++) {
        const resp = await this.contentDao.createMany({
          title: faker.music.songName(),
          description: faker.lorem.lines({ min: 1, max: 3 }),
          releaseDate: new Date(),
          type: contentType.TVSHOW,
          Tvshow: {
            create: {
              directorId: (await this.contentDao.getDirector()).id,
              seasonNumber: 1,
              episodeNumber: 10,
            },
          },
        });
        console.log(resp);
      }
    } catch (error) {
      console.log(error, 'error----------->');
    }
  }
  async movies() {
    try {
      for (let i = 0; i < 5; i++) {
        const resp = await this.contentDao.createMany({
          title: faker.music.songName(),
          description: faker.lorem.lines({ min: 1, max: 3 }),
          releaseDate: new Date(),
          type: contentType.MOVIE,
          Movie: {
            create: { directorId: (await this.contentDao.getDirector()).id },
          },
        });
        console.log(resp);
      }
    } catch (error) {
      console.log(error, 'error----------->');
    }
  }
  async getmovies() {
    return await this.contentDao.getMovies();
  }
  async getTvShows() {
    return await this.contentDao.getTvShows();
  }
}

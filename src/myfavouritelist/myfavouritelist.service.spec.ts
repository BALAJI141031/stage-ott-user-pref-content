import { Test, TestingModule } from '@nestjs/testing';
import { MyfavouritelistService } from './myfavouritelist.service';

describe('MyfavouritelistService', () => {
  let service: MyfavouritelistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyfavouritelistService],
    }).compile();

    service = module.get<MyfavouritelistService>(MyfavouritelistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

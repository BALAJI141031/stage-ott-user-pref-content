import { Test, TestingModule } from '@nestjs/testing';
import { MyfavouritelistController } from './myfavouritelist.controller';

describe('MyfavouritelistController', () => {
  let controller: MyfavouritelistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyfavouritelistController],
    }).compile();

    controller = module.get<MyfavouritelistController>(MyfavouritelistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

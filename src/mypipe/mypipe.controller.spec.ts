import { Test, TestingModule } from '@nestjs/testing';
import { MypipeController } from './mypipe.controller';

describe('MypipeController', () => {
  let controller: MypipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MypipeController],
    }).compile();

    controller = module.get<MypipeController>(MypipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

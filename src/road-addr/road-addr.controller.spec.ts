import { Test, TestingModule } from '@nestjs/testing';
import { RoadAddrController } from './road-addr.controller';

describe('RoadAddrController', () => {
  let controller: RoadAddrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoadAddrController],
    }).compile();

    controller = module.get<RoadAddrController>(RoadAddrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

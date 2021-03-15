import { Test, TestingModule } from '@nestjs/testing';
import { RoadAddrService } from './road-addr.service';

describe('RoadAddrService', () => {
  let service: RoadAddrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadAddrService],
    }).compile();

    service = module.get<RoadAddrService>(RoadAddrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

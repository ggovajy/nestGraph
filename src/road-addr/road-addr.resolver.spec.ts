import { Test, TestingModule } from '@nestjs/testing';
import { RoadAddrResolver } from './road-addr.resolver';

describe('RoadAddrResolver', () => {
  let resolver: RoadAddrResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadAddrResolver],
    }).compile();

    resolver = module.get<RoadAddrResolver>(RoadAddrResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

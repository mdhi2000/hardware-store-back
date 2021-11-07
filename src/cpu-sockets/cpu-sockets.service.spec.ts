import { Test, TestingModule } from '@nestjs/testing';
import { CpuSocketsService } from './cpu-sockets.service';

describe('CpuSocketsService', () => {
  let service: CpuSocketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpuSocketsService],
    }).compile();

    service = module.get<CpuSocketsService>(CpuSocketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

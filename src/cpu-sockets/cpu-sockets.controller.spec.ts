import { Test, TestingModule } from '@nestjs/testing';
import { CpuSocketsController } from './cpu-sockets.controller';
import { CpuSocketsService } from './cpu-sockets.service';

describe('CpuSocketsController', () => {
  let controller: CpuSocketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CpuSocketsController],
      providers: [CpuSocketsService],
    }).compile();

    controller = module.get<CpuSocketsController>(CpuSocketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

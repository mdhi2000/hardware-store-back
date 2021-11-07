import { Module } from '@nestjs/common';
import { CpuSocketsService } from './cpu-sockets.service';
import { CpuSocketsController } from './cpu-sockets.controller';

@Module({
  controllers: [CpuSocketsController],
  providers: [CpuSocketsService]
})
export class CpuSocketsModule {}

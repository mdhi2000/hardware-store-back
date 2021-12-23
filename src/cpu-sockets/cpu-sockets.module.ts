import { CpuSocket, CpuSocketSchema } from './schemas/cpu-socket.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CpuSocketsService } from './cpu-sockets.service';
import { CpuSocketsController } from './cpu-sockets.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CpuSocket.name, schema: CpuSocketSchema },
    ]),
  ],
  controllers: [CpuSocketsController],
  providers: [CpuSocketsService],
})
export class CpuSocketsModule {}

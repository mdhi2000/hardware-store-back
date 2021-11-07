import { Injectable } from '@nestjs/common';
import { CreateCpuSocketDto } from './dto/create-cpu-socket.dto';
import { UpdateCpuSocketDto } from './dto/update-cpu-socket.dto';

@Injectable()
export class CpuSocketsService {
  create(createCpuSocketDto: CreateCpuSocketDto) {
    return 'This action adds a new cpuSocket';
  }

  findAll() {
    return `This action returns all cpuSockets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cpuSocket`;
  }

  update(id: number, updateCpuSocketDto: UpdateCpuSocketDto) {
    return `This action updates a #${id} cpuSocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} cpuSocket`;
  }
}

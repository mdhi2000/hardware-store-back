import { CpuSocket, CpuSocketDocument } from './schemas/cpu-socket.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateCpuSocketDto } from './dto/create-cpu-socket.dto';
import { UpdateCpuSocketDto } from './dto/update-cpu-socket.dto';
import { Model } from 'mongoose';

@Injectable()
// TODO: implement
export class CpuSocketsService {
  constructor(
    @InjectModel(CpuSocket.name)
    private cpuSocketModel: Model<CpuSocketDocument>,
  ) {}
  create(createCpuSocketDto: CreateCpuSocketDto) {
    return new this.cpuSocketModel(createCpuSocketDto).save();
  }

  findAll() {
    return this.cpuSocketModel.find();
  }

  findOne(id: string) {
    return this.cpuSocketModel.findById(id);
  }

  update(id: string, updateCpuSocketDto: UpdateCpuSocketDto) {
    return this.cpuSocketModel.findByIdAndUpdate(id, updateCpuSocketDto);
  }

  remove(id: string) {
    return this.cpuSocketModel.findByIdAndDelete(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CpuSocketsService } from './cpu-sockets.service';
import { CreateCpuSocketDto } from './dto/create-cpu-socket.dto';
import { UpdateCpuSocketDto } from './dto/update-cpu-socket.dto';

@ApiTags('not-implemented')
@Controller('cpu-sockets')
export class CpuSocketsController {
  constructor(private readonly cpuSocketsService: CpuSocketsService) {}

  @Post()
  create(@Body() createCpuSocketDto: CreateCpuSocketDto) {
    return this.cpuSocketsService.create(createCpuSocketDto);
  }

  @Get()
  findAll() {
    return this.cpuSocketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cpuSocketsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCpuSocketDto: UpdateCpuSocketDto,
  ) {
    return this.cpuSocketsService.update(+id, updateCpuSocketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cpuSocketsService.remove(+id);
  }
}

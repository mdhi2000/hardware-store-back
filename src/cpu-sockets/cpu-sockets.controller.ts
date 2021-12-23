import { CpuSocket } from './schemas/cpu-socket.schema';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CpuSocketsService } from './cpu-sockets.service';
import { CreateCpuSocketDto } from './dto/create-cpu-socket.dto';
import { UpdateCpuSocketDto } from './dto/update-cpu-socket.dto';

@ApiTags('cpu-sockets')
@Controller('cpu-sockets')
export class CpuSocketsController {
  constructor(private readonly cpuSocketsService: CpuSocketsService) {}

  @Post()
  @ApiCreatedResponse({
    type: CpuSocket,
    description: 'creates a new cpu socket',
  })
  create(@Body() createCpuSocketDto: CreateCpuSocketDto) {
    return this.cpuSocketsService.create(createCpuSocketDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'returns all cpu sockets',
  })
  findAll() {
    return this.cpuSocketsService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the cpu socket',
  })
  @ApiOkResponse({
    description: 'returns a cpu socket by id',
  })
  findOne(@Param('id') id: string) {
    return this.cpuSocketsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the cpu socket',
  })
  @ApiOkResponse({
    description: 'updates a cpu socket by id',
  })
  update(
    @Param('id') id: string,
    @Body() updateCpuSocketDto: UpdateCpuSocketDto,
  ) {
    return this.cpuSocketsService.update(id, updateCpuSocketDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the cpu socket',
  })
  @ApiOkResponse({
    description: 'deletes a cpu socket by id',
  })
  remove(@Param('id') id: string) {
    return this.cpuSocketsService.remove(id);
  }
}

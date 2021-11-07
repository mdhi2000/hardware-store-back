import { PartialType } from '@nestjs/mapped-types';
import { CreateCpuSocketDto } from './create-cpu-socket.dto';

export class UpdateCpuSocketDto extends PartialType(CreateCpuSocketDto) {}

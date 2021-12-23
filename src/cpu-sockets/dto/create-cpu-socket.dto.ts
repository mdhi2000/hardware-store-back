import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateCpuSocketDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

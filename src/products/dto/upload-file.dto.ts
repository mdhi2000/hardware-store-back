import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UploadFileDto {
  @ApiProperty()
  @IsNotEmpty()
  file: any;
}

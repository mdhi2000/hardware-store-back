import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Category } from '../schemas/category.schema';

export class CreateCategoryDto {
  @ApiProperty({
    nullable: true,
    required: false,
    description:
      '_id of parent category, if category has no parents must be set to null or either not sent',
    type: 'string',
  })
  parent: Category;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'Title of the category that user will see',
  })
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'Key that will be used in linking',
  })
  key: string;
}

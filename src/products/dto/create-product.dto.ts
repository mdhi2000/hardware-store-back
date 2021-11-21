import { ApiProperty } from '@nestjs/swagger';
import { Category } from './../../categories/schemas/category.schema';
import { IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'category id of the product',
  })
  category: Category;

  @IsNotEmpty()
  @ApiProperty({
    description: 'name of the product',
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'description of the product',
  })
  description: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'price of the product',
  })
  price: number;

  @ApiProperty({
    required: false,
    description:
      'link to image of the product, can be uploaded to this site using product/uploadImage or from an external endpoint',
  })
  imageUrl: string;
}

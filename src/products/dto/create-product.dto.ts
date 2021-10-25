import { Category } from './../../categories/schemas/category.schema';
import { IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  category: Category;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  price: number;

  imageUrl: string;
}

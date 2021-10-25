import { IsNotEmpty } from 'class-validator';
import { Category } from '../schemas/category.schema';

export class CreateCategoryDto {
  parent: Category;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  key: string;
}

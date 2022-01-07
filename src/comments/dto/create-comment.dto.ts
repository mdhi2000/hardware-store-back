import { User } from './../../users/schemas/user.schema';
import { Product } from './../../products/schemas/product.schema';
import { IsNotEmpty } from 'class-validator';
export class CreateCommentDto {
  @IsNotEmpty()
  product: Product;

  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  text: string;

  points: 0 | 1 | 2 | 3 | 4 | 5 = 0;
}

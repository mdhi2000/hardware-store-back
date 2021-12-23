import { IsNotEmpty } from 'class-validator';
import { Product } from 'src/products/schemas/product.schema';
import { Cart } from './../../cart/schemas/cart.schemas';

export class CreateCartItemDto {
  @IsNotEmpty()
  product: Product;

  cart: Cart = null;

  @IsNotEmpty()
  priceAtTime: number;

  @IsNotEmpty()
  amount: number;
}

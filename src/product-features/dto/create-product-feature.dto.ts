import { IsNotEmpty } from 'class-validator';
import { Product } from 'src/products/schemas/product.schema';
import { ProductFeature } from './../schemas/product-feature.schema';
export class CreateProductFeatureDto {
  parent: ProductFeature;

  @IsNotEmpty()
  product: Product;

  @IsNotEmpty()
  key: string;

  value: string;
}

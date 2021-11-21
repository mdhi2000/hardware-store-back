import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Product } from 'src/products/schemas/product.schema';
import { ProductFeature } from './../schemas/product-feature.schema';
export class CreateProductFeatureDto {
  @ApiProperty({
    required: false,
    nullable: true,
    type: 'string',
    description:
      "parent's _id of this product feature which is another product feature, parents cant have value",
  })
  parent: ProductFeature;

  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: "the product's _id which this feature belongs to",
  })
  product: Product;

  @IsNotEmpty()
  @ApiProperty({
    description: 'the feature title that user can see',
  })
  key: string;

  @ApiProperty({
    description: 'the feature value that user can see',
  })
  value: string;
}

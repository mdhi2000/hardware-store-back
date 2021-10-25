import { ProductSchema } from './../products/schemas/product.schema';
import {
  ProductFeatureSchema,
  ProductFeature,
} from './schemas/product-feature.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProductFeaturesService } from './product-features.service';
import { ProductFeaturesController } from './product-features.controller';
import { Product } from 'src/products/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductFeature.name, schema: ProductFeatureSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  controllers: [ProductFeaturesController],
  providers: [ProductFeaturesService],
})
export class ProductFeaturesModule {}

import {
  ProductFeature,
  ProductFeatureSchema,
} from './../product-features/schemas/product-feature.schema';
import {
  CpuSocket,
  CpuSocketSchema,
} from '../cpu-sockets/schemas/cpu-socket.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './../categories/schemas/category.schema';
import { Category } from 'src/categories/schemas/category.schema';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product, ProductSchema } from './schemas/product.schema';
import { Comments, CommentsSchema } from 'src/comments/schemas/comment.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Comments.name, schema: CommentsSchema },
      { name: Product.name, schema: ProductSchema },
      { name: CpuSocket.name, schema: CpuSocketSchema },
      { name: ProductFeature.name, schema: ProductFeatureSchema },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}

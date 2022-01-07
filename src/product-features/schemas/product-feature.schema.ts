import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';

export type ProductFeatureDocument = ProductFeature & Document;

@Schema({ timestamps: true })
export class ProductFeature extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: ProductFeature.name,
  })
  parent: ProductFeature | null;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Product.name,
    required: true,
  })
  product: Product;

  @Prop({ required: true })
  key: string;

  @Prop()
  value: string;
}

export const ProductFeatureSchema =
  SchemaFactory.createForClass(ProductFeature);

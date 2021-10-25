import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Mongoose, { Document } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';

export type ProductFeatureDocument = ProductFeature & Document;

@Schema({ timestamps: true })
export class ProductFeature extends Document {
  @Prop({
    type: Mongoose.Types.ObjectId,
    ref: ProductFeature.name,
  })
  parent: ProductFeature;

  @Prop({
    type: Mongoose.Types.ObjectId,
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

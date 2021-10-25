import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Mongoose, { Document } from 'mongoose';
import { Category } from 'src/categories/schemas/category.schema';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ type: Mongoose.Types.ObjectId, ref: Category.name, required: true })
  category: Category;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  imageUrl: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

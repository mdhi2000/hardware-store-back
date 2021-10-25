import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Mongoose, { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop({ type: Mongoose.Types.ObjectId, ref: Category.name })
  parent: Category;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true })
  key: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

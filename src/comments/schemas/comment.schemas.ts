import { Product } from './../../products/schemas/product.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type CommentsDocument = Comments & Document;

@Schema({
  timestamps: true,
})
export class Comments extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Product.name,
    required: true,
  })
  product: Product;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  user: User;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  points: 1 | 2 | 3 | 4 | 5;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);

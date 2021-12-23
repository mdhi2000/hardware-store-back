import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CommentsDocument = Comments & Document;

@Schema({
  timestamps: true,
})
export class Comments extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  itemCounts: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);

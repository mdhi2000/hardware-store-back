import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type CartDocument = Cart & Document;

@Schema({
  timestamps: true,
})
export class Cart extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  user: User;

  @Prop({ required: true, default: 0 })
  total: number;

  @Prop({ required: true, default: 0 })
  itemCounts: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop()
  address: string;

  @Prop()
  postalCode: string;

  @Prop({ defaults: false })
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

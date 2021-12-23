import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CpuSocketDocument = CpuSocket & Document;

@Schema({ timestamps: true })
export class CpuSocket extends Document {
  @Prop({ required: true })
  name: string;
}

export const CpuSocketSchema = SchemaFactory.createForClass(CpuSocket);

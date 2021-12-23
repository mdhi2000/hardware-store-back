import { Cart } from 'src/cart/schemas/cart.schemas';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';

export type CartItemDocument = CartItem & Document;

@Schema({ timestamps: true })
export class CartItem extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Product.name,
    required: true,
  })
  product: Product;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Cart.name,
    required: true,
  })
  cart: Cart;

  @Prop({ required: true })
  priceAtTime: number;

  @Prop({ required: true })
  amount: number;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);

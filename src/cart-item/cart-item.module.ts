import { CartSchema } from './../cart/schemas/cart.schemas';
import { Cart } from 'src/cart/schemas/cart.schemas';
import { CartItem, CartItemSchema } from './schemas/cart-item.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemController } from './cart-item.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CartItem.name, schema: CartItemSchema },
      { name: Cart.name, schema: CartSchema },
    ]),
  ],
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule {}

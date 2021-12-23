import { Cart, CartDocument } from 'src/cart/schemas/cart.schemas';
import { CartItem, CartItemDocument } from './schemas/cart-item.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { Model } from 'mongoose';

@Injectable()
export class CartItemService {
  constructor(
    @InjectModel(CartItem.name) private cartItemModel: Model<CartItemDocument>,
  ) {}

  create(createCartItemDto: CreateCartItemDto) {
    return new this.cartItemModel(createCartItemDto).save();
  }

  findAll() {
    return this.cartItemModel.find();
  }

  findOne(id: string) {
    return this.cartItemModel.findById(id);
  }

  update(id: string, updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemModel.findByIdAndUpdate(id, updateCartItemDto);
  }

  remove(id: string) {
    return this.cartItemModel.findByIdAndRemove(id);
  }
}

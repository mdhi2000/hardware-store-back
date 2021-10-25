import { CategoryDocument } from './../categories/schemas/category.schema';
import { Category } from 'src/categories/schemas/category.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return new this.productModel(createProductDto).save();
  }

  findAll() {
    return this.productModel.find();
  }

  async findAllByCategory(categoryId: string) {
    return this.productModel.find({
      category: await this.categoryModel.findById(categoryId),
    });
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto);
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}

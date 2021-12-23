import {
  CpuSocket,
  CpuSocketDocument,
} from '../cpu-sockets/schemas/cpu-socket.schema';
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
    @InjectModel(CpuSocket.name)
    private cpuSocketModel: Model<CpuSocketDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return new this.productModel(createProductDto).save();
  }

  findAll() {
    return this.productModel.find().populate('category').populate('cpuSocket');
  }

  async findAllByCategory(categoryId: string) {
    return this.productModel
      .find({
        category: await this.categoryModel.findById(categoryId),
      })
      .populate('category')
      .populate('cpuSocket');
  }

  async findAllByCategoryKey(categoryKey: string) {
    return this.productModel
      .find({
        category: await this.categoryModel.findOne({ key: categoryKey }),
      })
      .populate('category')
      .populate('cpuSocket');
  }

  async searchInTypeByCpuSocket(categoryKey: string, cpuSocketId: string) {
    return this.productModel
      .find({
        category: await this.categoryModel.findOne({ key: categoryKey }),
        cpuSocket: await this.cpuSocketModel.findById(cpuSocketId),
      })
      .populate('category')
      .populate('cpuSocket');
  }

  findOne(id: string) {
    return this.productModel
      .findById(id)
      .populate('category')
      .populate('cpuSocket');
  }

  searchByName(search: string) {
    return this.productModel
      .find({ name: new RegExp(`/${search}/g`) })
      .populate('category')
      .populate('cpuSocket');
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel
      .findByIdAndUpdate(id, updateProductDto)
      .populate('category')
      .populate('cpuSocket');
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}

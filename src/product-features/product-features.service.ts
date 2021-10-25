import { Product, ProductDocument } from './../products/schemas/product.schema';
import {
  ProductFeature,
  ProductFeatureDocument,
} from './schemas/product-feature.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductFeatureDto } from './dto/create-product-feature.dto';
import { UpdateProductFeatureDto } from './dto/update-product-feature.dto';
import { Model } from 'mongoose';

@Injectable()
export class ProductFeaturesService {
  constructor(
    @InjectModel(ProductFeature.name)
    private productFeatureModel: Model<ProductFeatureDocument>,
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}

  create(createProductFeatureDto: CreateProductFeatureDto) {
    return new this.productFeatureModel(createProductFeatureDto).save();
  }

  findAll() {
    return this.productFeatureModel.find();
  }

  async findByParentId(parentId: string) {
    return this.productFeatureModel.find({
      parent: await this.productFeatureModel.findById(parentId),
    });
  }

  async findByProductId(productId: string) {
    return this.productFeatureModel.find({
      product: await this.productModel.findById(productId),
    });
  }

  findOne(id: string) {
    return this.productFeatureModel.findById(id);
  }

  update(id: string, updateProductFeatureDto: UpdateProductFeatureDto) {
    return this.productFeatureModel.findByIdAndUpdate(
      id,
      updateProductFeatureDto,
    );
  }

  remove(id: string) {
    return this.productFeatureModel.findByIdAndRemove(id);
  }
}

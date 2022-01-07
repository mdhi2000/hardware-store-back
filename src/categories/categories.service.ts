import { Category, CategoryDocument } from './schemas/category.schema';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const categoryExists = await this.categoryModel.exists({
      key: createCategoryDto.key,
    });
    if (categoryExists)
      throw new HttpException('کلید تکراری است', HttpStatus.CONFLICT);
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  findAll() {
    return this.categoryModel.find();
  }

  findAllParents() {
    return this.categoryModel.find({ parent: null });
  }

  async findAllSubCategories(id: string) {
    return this.categoryModel.find({
      parent: await this.categoryModel.findById(id),
    });
  }

  findOne(id: string) {
    return this.categoryModel.findById(id);
  }

  findOneByKey(key: string) {
    return this.categoryModel.findOne({ key }).populate('parent');
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto);
  }

  async remove(id: string) {
    const categoryToBeRemoved = await this.categoryModel.findById(id);
    if (categoryToBeRemoved.parent === null)
      this.categoryModel.remove({ parent: categoryToBeRemoved });
    return categoryToBeRemoved.remove();
  }
}

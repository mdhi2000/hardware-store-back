import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './schemas/category.schema';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Creates a category',
    type: Category,
  })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'returns all categories',
  })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get('parents')
  @ApiOkResponse({
    description:
      'returns all categories which have no parent (root categories)',
  })
  findAllParents() {
    return this.categoriesService.findAllParents();
  }

  @Get(':id/subcategories')
  @ApiParam({
    name: 'id',
    description: 'the id of the category',
  })
  @ApiOkResponse({
    description: 'returns all categories in the given category id',
  })
  findAllSubCategories(@Param('id') id: string) {
    return this.categoriesService.findAllSubCategories(id);
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the category',
  })
  @ApiOkResponse({
    description: 'returns a category by its id',
  })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Get('key/:key')
  @ApiParam({
    name: 'key',
    description: 'the key of the category',
  })
  @ApiOkResponse({
    description: 'returns a category by its key',
  })
  findOneByKey(@Param('key') key: string) {
    return this.categoriesService.findOneByKey(key);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the category',
  })
  @ApiOkResponse({
    description: 'updates a category by its id',
  })
  update(
    @Param('id')
    id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the category',
  })
  @ApiOkResponse({
    description: 'deletes a category by its id',
  })
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}

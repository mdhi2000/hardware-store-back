import { ProductFeature } from './schemas/product-feature.schema';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductFeaturesService } from './product-features.service';
import { CreateProductFeatureDto } from './dto/create-product-feature.dto';
import { UpdateProductFeatureDto } from './dto/update-product-feature.dto';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('product-features')
@Controller('product-features')
export class ProductFeaturesController {
  constructor(
    private readonly productFeaturesService: ProductFeaturesService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    type: ProductFeature,
    description: 'creates a new product feature',
  })
  create(@Body() createProductFeatureDto: CreateProductFeatureDto) {
    return this.productFeaturesService.create(createProductFeatureDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'returns all product features',
  })
  findAll() {
    return this.productFeaturesService.findAll();
  }

  @Get('parent/:parentId')
  @ApiParam({
    name: 'parentId',
    description: 'the parentId of the product feature',
  })
  @ApiOkResponse({
    description: 'returns all product features by parentId',
  })
  findByParentId(@Param('parentId') parentId: string) {
    return this.productFeaturesService.findByParentId(parentId);
  }

  @Get('product/:productId')
  @ApiParam({
    name: 'parentId',
    description: 'the productId of the product feature',
  })
  @ApiOkResponse({
    description: 'returns all product features by productId',
  })
  findByProductId(@Param('productId') productId: string) {
    return this.productFeaturesService.findByProductId(productId);
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the product feature',
  })
  @ApiOkResponse({
    description: 'returns a product features by id',
  })
  findOne(@Param('id') id: string) {
    return this.productFeaturesService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the product feature',
  })
  @ApiOkResponse({
    description: 'updates a product feature by id',
  })
  update(
    @Param('id') id: string,
    @Body() updateProductFeatureDto: UpdateProductFeatureDto,
  ) {
    return this.productFeaturesService.update(id, updateProductFeatureDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the product feature',
  })
  @ApiOkResponse({
    description: 'deletes a product feature by id',
  })
  remove(@Param('id') id: string) {
    return this.productFeaturesService.remove(id);
  }
}

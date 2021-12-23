import { Product } from 'src/products/schemas/product.schema';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
  Req,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { Response } from 'express';
import { diskStorage } from 'multer';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiOkResponse,
  ApiParam,
  ApiBody,
  ApiConsumes,
  ApiQuery,
} from '@nestjs/swagger';
import { UploadFileDto } from './dto/upload-file.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiCreatedResponse({
    type: Product,
    description: 'creates a new product feature',
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'returns all products',
  })
  findAll() {
    return this.productsService.findAll();
  }

  @Get('category/:categoryId')
  @ApiParam({
    name: 'categoryId',
    description: 'the categoryId of the products',
  })
  @ApiOkResponse({
    description: 'returns all products by their categories',
  })
  findAllByCategory(@Param('categoryId') categoryId: string) {
    return this.productsService.findAllByCategory(categoryId);
  }

  @Get('category/key/:categoryKey')
  @ApiParam({
    name: 'categoryKey',
    description: 'the categoryKey of the products',
  })
  @ApiOkResponse({
    description: 'returns all products by their category keys',
  })
  findAllByCategoryKey(@Param('categoryKey') categoryKey: string) {
    return this.productsService.findAllByCategoryKey(categoryKey);
  }

  @Get('category/key/:categoryKey/cpu-socket/:cpuSocketId')
  @ApiParam({
    name: 'categoryKey',
    description: 'the categoryKey of the products',
  })
  @ApiParam({
    name: 'cpuSocketId',
    description: 'the cpu socket id of the products',
  })
  @ApiOkResponse({
    description: 'returns all products by their category keys and cpu sockets',
  })
  searchInTypeByCpuSocket(
    @Param('categoryKey') categoryKey: string,
    @Param('cpuSocketId') cpuSocketId: string,
  ) {
    return this.productsService.searchInTypeByCpuSocket(
      categoryKey,
      cpuSocketId,
    );
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the product',
  })
  @ApiOkResponse({
    description: 'returns a product by id',
  })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Get('/search/name')
  @ApiOkResponse({
    description: 'finds a product by searching in name',
  })
  @ApiQuery({
    name: 'search',
  })
  searchByName(@Query('search') search: string) {
    return this.productsService.searchByName(search);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the product',
  })
  @ApiOkResponse({
    description: 'updates a product by id',
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'the id of the product',
  })
  @ApiOkResponse({
    description: 'deletes a product by id',
  })
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Post('uploadImage')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: function (req, file, cb) {
        if (file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|ico)$/)) {
          return cb(null, true);
        }
        cb(null, false);
      },
      limits: { fileSize: 2 * 1024 * 1024 },
      storage: diskStorage({
        destination: './uploads/productImage',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'image file for product',
    type: UploadFileDto,
  })
  async uploadImage(@UploadedFile() files, @Res() res: Response, @Req() req) {
    if (!files) {
      return res.sendStatus(HttpStatus.NOT_ACCEPTABLE);
    }
    try {
      return res.json({
        id: files.filename,
      });
    } catch (e) {
      throw new Error(e.message || e);
    }
  }
}

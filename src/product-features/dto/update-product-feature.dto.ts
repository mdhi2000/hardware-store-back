import { PartialType } from '@nestjs/mapped-types';
import { CreateProductFeatureDto } from './create-product-feature.dto';

export class UpdateProductFeatureDto extends PartialType(CreateProductFeatureDto) {}

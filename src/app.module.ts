import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductFeaturesModule } from './product-features/product-features.module';
import { ProductTypesModule } from './product-types/product-types.module';
import { CpuSocketsModule } from './cpu-sockets/cpu-sockets.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/hardware-store'),
    ProductsModule,
    CategoriesModule,
    ProductFeaturesModule,
    ProductTypesModule,
    CpuSocketsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

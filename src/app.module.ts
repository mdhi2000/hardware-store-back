import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductFeaturesModule } from './product-features/product-features.module';
import { CpuSocketsModule } from './cpu-sockets/cpu-sockets.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { InvoicesModule } from './invoices/invoices.module';
import { InvoiceItemsModule } from './invoice-items/invoice-items.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/hardware-store'),
    ProductsModule,
    CategoriesModule,
    ProductFeaturesModule,
    CpuSocketsModule,
    UsersModule,
    AuthModule,
    CartModule,
    CartItemModule,
    InvoicesModule,
    InvoiceItemsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

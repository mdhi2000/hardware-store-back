import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Hardware store api')
    .setDescription('The hardware store API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ origin: true, credentials: true });
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(5001, () =>
    console.log('nestjs started on http://localhost:5001'),
  );
}
bootstrap();

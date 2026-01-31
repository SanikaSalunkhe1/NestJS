import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist : true , //removes the properties from dto which is not defined in dto's
    forbidNonWhitelisted : true
  }))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

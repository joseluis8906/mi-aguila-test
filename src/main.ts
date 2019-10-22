import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoClient } from './Contrib/MongoClient';

async function bootstrap() {
  MongoClient.connect();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();

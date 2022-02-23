import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("poc-typescript-nestjs")
    .setDescription("proof of concept")
    .setVersion("v1")
    .addTag("api")
    // .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'authorization')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  writeFileSync('./swagger-spec.json', JSON.stringify(document));

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors();
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const corsOptions = {
    origin: ['http://localhost:4200', 'http://madeingalsen.dev'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  };
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  const options = new DocumentBuilder()
    .setTitle('XELCOM COURSES API')
    // .setDescription('A')
    .setVersion('1.0.0')
    .addTag('BY [ UNCHK | Elite Fusion ]')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();

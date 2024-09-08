import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('The Blog API description')
    .setVersion('1.0')
    .addTag('blog')
    .build();

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('api', app, document)
  const port = 3000
  await app.listen(port, ()=>{
    console.log(`server is now running on port ${port}`)
  });
  
}
bootstrap();

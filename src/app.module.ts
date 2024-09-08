import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
@Module({
  imports: [PrismaModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class AppModule {}

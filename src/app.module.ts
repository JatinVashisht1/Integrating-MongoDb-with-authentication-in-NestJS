import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [
    BlogsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/blognest')
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {

  constructor( @InjectModel(Blog.name) private readonly blogModel: Model<Blog>){}

  create(createBlogDto: CreateBlogDto) {
    const blog = new this.blogModel(createBlogDto)
    return blog.save()
  }

  findAll() {
    return this.blogModel.find({}).exec()
  }

  findOne(id: string) {
    // const blog = this.blogModel.find({_id: id}).exec()
    // if(!blog){
    //   throw new NotFoundException(`The blog with #${id} does not exiest`)
    // }
    // return blog
    return 'find one'
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}

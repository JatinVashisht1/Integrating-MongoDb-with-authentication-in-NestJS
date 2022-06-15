import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IsNumber } from 'class-validator';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class  UsersService {

  constructor(@InjectModel(User.name) private readonly userModel: Model<User> ){}

  async create(createUserDto: CreateUserDto) {

    const alreadyPresentUser = await this.userModel.findOne({username: createUserDto.username}, {username: 1})
    .exec()
    // console.log(`user.service: already present user: ${alreadyPresentUser}`)
    if(!alreadyPresentUser){ 
      const user = new this.userModel(createUserDto)
      return user.save()
    }else{
      throw new ConflictException('username already present')
    }
  }

  findAll() {
    const allUsers = this.userModel.find({}).exec()
    return allUsers
  }

  findOne(username: string) {
    return this.userModel.findOne({username: username}).exec()    
  }

  update(updateUserDto: UpdateUserDto) {
    const updatedUser = this.userModel
    .updateOne({username: updateUserDto.username}, {})
    
  }


  postBlog(createBlogDto: CreateBlogDto){
      return this.userModel.updateOne({username: createBlogDto.username},{
        $push: {blog: createBlogDto.blog}
      })
      .exec()
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  deleteAll(){
    return this.userModel.deleteMany({})
  }
}

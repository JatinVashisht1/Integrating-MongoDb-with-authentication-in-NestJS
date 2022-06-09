import { Type } from "class-transformer";
import { IsArray, IsDefined, IsObject, IsString, Validate, ValidateNested } from "class-validator";

export class blogType{
    @IsString({message: 'title is required and should be of type string'})
    title: string
    @IsString({message: 'content is required and should be of type string'})
    content: string
}

export class CreateBlogDto {

   @IsDefined()
   @IsObject()
   @ValidateNested({message: 'Blog is required'})
   @Type(()=>blogType)
    blog: blogType

    @IsArray({message: 'category is required and should be of type array of string'})
    category: string[]

    @IsString({message: 'username is required and should be of type string'})
    username: string

    @IsString({message: 'password is required and should be of type string'})
    password: string
}

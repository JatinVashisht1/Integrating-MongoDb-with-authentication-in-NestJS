import { Type } from "class-transformer";
import { IsDefined, IsObject, IsString, ValidateNested } from "class-validator";

export class BlogType{
    @IsString({message: 'Title should be of type string'})
    @IsDefined({message: 'Title is neccessary'})
    title: string

    @IsDefined({message: 'Content should be of type string'})
    @IsString({message: 'Content is neccessary'})
    content: string
}
export class CreateBlogDto {
    @IsDefined({message: 'Blog is neccessary'})
    @IsObject({message: 'Blog should be object'})
    @ValidateNested()
    @Type(()=>BlogType)
    blog: BlogType

    @IsDefined({message: 'username is required to post blog'})
    @IsString({message: 'username should be of type string'})
    username: string
}

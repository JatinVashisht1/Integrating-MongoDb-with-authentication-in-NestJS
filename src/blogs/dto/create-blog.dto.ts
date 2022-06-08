import { IsArray, IsString } from "class-validator";

export class CreateBlogDto {
    @IsString({message: 'title is required and must of of type string'})
    title: string

    @IsString({message: 'content is required and should be of type string'})
    content: string

    @IsArray({message: 'category is required and should be of type array of string'})
    category: string[]
}

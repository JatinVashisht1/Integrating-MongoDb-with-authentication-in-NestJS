import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

class blog{
    title: string
    content: string
}

@Schema()
export class Blog extends Document{

    @Prop()
    username: string

    @Prop()
    password: string

    @Prop()
    blog: blog

    @Prop([String])
    category: string[]
}

export const BlogSchema = SchemaFactory.createForClass(Blog)
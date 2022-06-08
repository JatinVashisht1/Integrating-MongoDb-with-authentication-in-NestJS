import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Blog extends Document{
    @Prop()
    title: string
    
    @Prop()
    content: string

    @Prop([String])
    category: string[]
}

export const BlogSchema = SchemaFactory.createForClass(Blog)
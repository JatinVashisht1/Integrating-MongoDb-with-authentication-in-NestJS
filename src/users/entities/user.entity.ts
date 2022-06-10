import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

class blog{
    title: string
    content: string
    category: [string]
}

@Schema()
export class User extends Document{

    @Prop({unique: true})
    username: string

    @Prop()
    password: string

    @Prop({required: true})
    blog: [blog]
}

export const UserSchema = SchemaFactory.createForClass(User)
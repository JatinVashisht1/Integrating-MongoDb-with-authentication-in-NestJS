import { Injectable } from '@nestjs/common';
import { IsString } from 'class-validator';
import { UsersService } from 'src/users/users.service';

export class ResponseUser{
    username: string
    userId: string
}

@Injectable()
export class AuthService {
    constructor (
        private usersService: UsersService
    ){}

    async validate(username: string, password: string): Promise<ResponseUser> {
        const user = await this.usersService.findOne(username)
        if(user && user.password === password){
            const {password, ...result} = user
            const responseUser: ResponseUser = {
                username: user.username,
                userId: user._id
            }
            return responseUser
        }
        return null
    }

    async login(user: ResponseUser){
        return `this route log in ${user.username}`
    }
}
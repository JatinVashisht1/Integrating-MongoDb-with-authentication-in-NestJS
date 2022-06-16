import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "src/users/users.service";
import { AuthService, ResponseUser } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor (private authService: AuthService)
    {
        super()
    }

    // validate method is present almost all passport startegies
    async validate (username: string, password: string): Promise<ResponseUser>{
        const user = this.authService.validate(username, password)
        if(!user){
            throw new UnauthorizedException('you are not registered')
        }
        return user
    }
}

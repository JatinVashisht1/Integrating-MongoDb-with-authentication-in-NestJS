import { IsDefined, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @IsString({message: 'username should be of type string'})
    @IsNotEmpty({message: 'username should not be empty'})
    @IsDefined({message: 'username is necessary'})
    username: string

    @IsString({message: 'password should be of type string'})
    @IsNotEmpty({message: 'password should not be empty'})
    @IsDefined({message: 'password is necessary'})
    password: string
}

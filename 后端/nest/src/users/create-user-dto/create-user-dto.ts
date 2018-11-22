import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()  readonly name: String;
  @IsString()  readonly username: String;
  @IsInt()  readonly age: Number;
}

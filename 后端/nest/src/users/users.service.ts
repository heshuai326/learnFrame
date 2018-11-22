import { CreateUserDto } from './create-user-dto/create-user-dto';
import { User } from './user.interface/user.interface';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(createUserDto);
    return await createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}


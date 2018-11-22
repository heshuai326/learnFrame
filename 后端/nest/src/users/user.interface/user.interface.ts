import { Document } from 'mongoose';

export interface User extends Document  {
    readonly name: String;
    readonly username: String;
    readonly age: Number;
}

/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  role: string;
  age: number;
  password: string;
}

export interface UserModel extends Model<IUser>{
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
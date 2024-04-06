/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface IUser {
  email: string;
  role: "super-admin" | "manager" | "seller";
  password: string;
  needsPasswordChange: boolean;
  status: 'active' | 'blocked';
  isDeleted: boolean;
}

export interface UserModel extends Model<IUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

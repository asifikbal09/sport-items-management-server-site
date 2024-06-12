import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { IManager } from '../manager/manager.interface';
import { IUser } from './user.interface';
import { User } from './user.model';
import mongoose from 'mongoose';
import { Manager } from '../manager/manager.model';
import { ISeller } from '../seller/seller.interface';
import { Seller } from '../seller/seller.model';

/*
!User Interface ..
  email: string;
  role: "super-admin" | "manager" | "seller";
  password: string;
  needsPasswordChange: boolean;
  status: 'active' | 'blocked';
  isDeleted: boolean;

*/

const createUserIntoDB = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

//Create Manager
const createManagerIntoDB = async (password: string, payload: IManager) => {
  const user: Partial<IUser> = {};
  user.email = payload.email;
  user.password = password;
  user.role = 'manager';

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    payload.userId = newUser[0]._id;
    const newManager = await Manager.create([payload], { session });

    if (!newManager.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Manager.');
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

//Create seller
const createSellerIntoDB = async (password: string, payload: ISeller) => {
  const user: Partial<IUser> = {};
  user.email = payload.email;
  user.password = password;
  user.role = 'seller';

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    payload.userId = newUser[0]._id;
    //Starting to create Seller
    const newManager = await Seller.create([payload], { session });

    if (!newManager.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Manager.');
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};
const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  createManagerIntoDB,
  createSellerIntoDB,
};

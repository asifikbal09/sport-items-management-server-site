import { Schema, model } from 'mongoose';

import bcrypt from 'bcrypt';
import config from '../../config';
import { roleEnum, statusEnum } from './user.constant';
import { IUser } from './user.interface';

/*
export interface IUser {
  email: string;
  role: 'super-admin' | 'manager' | 'seller';
  password: string;
  needsPasswordChange: boolean;
  status: 'active' | 'blocked';
  isDeleted: boolean;
}
*/

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: roleEnum,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: statusEnum,
      default: 'active',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<IUser>('user', userSchema);

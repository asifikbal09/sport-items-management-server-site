import { Types } from 'mongoose';

export interface IManager {
  userId: Types.ObjectId;
  name: string;
  password: string;
  email: string;
  contactNo: string;
  branch: string;
  profileImg?: string;
}

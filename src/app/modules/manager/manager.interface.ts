import { Types } from 'mongoose';

export interface IManager {
  userId: Types.ObjectId;
  name: string;
  email: string;
  contactNo: string;
  branch: string;
  profileImg?: string;
}

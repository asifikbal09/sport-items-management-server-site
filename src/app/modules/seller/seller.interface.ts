import { Types } from 'mongoose';

export interface ISeller {
  userId: Types.ObjectId;
  name: string;
  email: string;
  contactNo: string;
  profileImg?: string;
}

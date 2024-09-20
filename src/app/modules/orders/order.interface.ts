import { Types } from 'mongoose';

export type TOrder = {
  productId: Types.ObjectId;
  branch: Types.ObjectId;
  nameOfBuyer: string;
  quantity: number;
  date: Date;
};

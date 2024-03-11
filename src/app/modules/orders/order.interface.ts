import { Types } from 'mongoose';

export type TOrder = {
  productId: Types.ObjectId;
  nameOfBuyer: string;
  quantity: number;
  date: Date;
};

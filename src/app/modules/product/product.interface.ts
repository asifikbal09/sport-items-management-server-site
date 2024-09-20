import { Types } from 'mongoose';

export type TProduct = {
  name: string;
  price: number;
  quantity: number;
  size?: 'small' | 'medium' | 'large';
  branch: Types.ObjectId;
  material: string;
  types: string;
  brand?: string;
  color: string;
  productImg: string;
  condition: 'new' | 'used';
};

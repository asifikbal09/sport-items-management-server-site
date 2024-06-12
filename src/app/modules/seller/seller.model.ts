import { Schema, model } from 'mongoose';
import { ISeller } from './seller.interface';


const sellerSchema = new Schema<ISeller>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },
});

export const Seller = model<ISeller>('seller', sellerSchema);

import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';
import { ConditionsArray, SizeArray } from './product.constant';

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  types: {
    type: String,
    required: true,
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref:"Branch",
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  size: {
    type: String,
    enum: SizeArray,
  },
  color: {
    type: String,
  },
  productImg: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    enum: ConditionsArray,
    required: true,
  },
});

export const Product = model<TProduct>('product', productSchema);

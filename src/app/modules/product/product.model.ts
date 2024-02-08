import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

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
  brand: {
    type: String,
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
  },
  color: {
    type: String,
  },
  condition: {
    type: String,
    enum: ['new', 'used'],
    required: true,
  },
});

export const Product = model<TProduct>('product', productSchema);

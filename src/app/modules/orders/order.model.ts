import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    nameOfBuyer: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Order = model<TOrder>('order', orderSchema);

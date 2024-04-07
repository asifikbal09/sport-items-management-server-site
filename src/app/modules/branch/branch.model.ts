import { Schema, model } from 'mongoose';
import { TBranch } from './branch.interface';

const branchSchema = new Schema<TBranch>(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Branch = model<TBranch>('branch', branchSchema);

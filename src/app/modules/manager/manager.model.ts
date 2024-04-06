import { Schema, model } from 'mongoose';
import { IManager } from './manager.interface';

const managerSchema = new Schema<IManager>({
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
  password: {
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
  branch: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },
});

export const Manager = model<IManager>('manager', managerSchema);

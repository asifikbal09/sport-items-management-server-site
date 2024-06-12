import { z } from 'zod';

const createManagerValidationSchema = z.object({
  body: z.object({
    password:z.string().optional(),
   manager:z.object({
    name: z.string({ required_error: 'Name is required.' }),
    email: z.string({ required_error: 'Email is required.' }),
    contactNo: z.string({ required_error: 'Contact number is required.' }),
    branch: z.string().optional(),
    profileImg: z.string().optional(),
   })
  }),
});

const updateManagerValidationSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    contactNo: z.string().optional(),
    branch: z.string().optional(),
    profileImg: z.string().optional(),
  }),
});

export const ManagerValidations = {
  createManagerValidationSchema,
  updateManagerValidationSchema,
};

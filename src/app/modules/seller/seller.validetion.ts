import { z } from 'zod';

const createSellerValidationSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    seller: z.object({
      name: z.string({ required_error: 'Name is required.' }),
      email: z.string({ required_error: 'Email is required.' }),
      contactNo: z.string({ required_error: 'Contact number is required.' }),
      profileImg: z.string().optional(),
    }),
  }),
});

const updateSellerValidationSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    contactNo: z.string().optional(),
    profileImg: z.string().optional(),
  }),
});

export const SellerValidations = {
  createSellerValidationSchema,
  updateSellerValidationSchema,
};

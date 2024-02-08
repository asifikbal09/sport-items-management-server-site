import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required.' }),
    price: z.number({ required_error: 'Price is required.' }),
    quantity: z.number({ required_error: 'Price is required.' }),
    types: z.string(),
    brand: z.string(),
    size: z.enum(['small', 'medium', 'large']),
    color: z.string(),
    condition: z.enum(['new', 'used']),
  }),
});
const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required.' }),
    price: z.number({ required_error: 'Price is required.' }),
    quantity: z.number({ required_error: 'Price is required.' }),
    types: z.string(),
    brand: z.string(),
    size: z.enum(['small', 'medium', 'large']),
    color: z.string(),
    condition: z.enum(['new', 'used']),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};

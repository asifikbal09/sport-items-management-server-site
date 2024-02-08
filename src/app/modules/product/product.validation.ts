import { z } from 'zod';
import { ConditionsArray, SizeArray } from './product.constant';
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
    size: z.enum(SizeArray as [string, ...[string]]),
    color: z.string(),
    condition: z.enum(ConditionsArray as [string, ...[string]]),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};

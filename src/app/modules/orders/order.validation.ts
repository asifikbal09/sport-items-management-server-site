import { z } from 'zod';

const createOrderValidationSchema = z.object({
  body: z.object({
    productId: z.string(),
    branch:z.string(),
    nameOfBuyer: z.string(),
    quantity: z.number(),
    date: z.date(),
  }),
});

export const OrderValidations = {
  createOrderValidationSchema,
};

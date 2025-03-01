import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required.' }),
    email: z.string({ required_error: 'Email is required.' }),
    role: z.string().optional(),
    age: z.number({ required_error: 'Age is required.' }),
    password: z.string({ required_error: 'Password is required.' }),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
};

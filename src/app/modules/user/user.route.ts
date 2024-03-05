import express from 'express';
import { UserValidations } from './user.validation';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

//will call controller function

router.post(
  '/create-user',
  validateRequest(UserValidations.createUserValidationSchema),
  UserControllers.createUser,
);

router.get('/', UserControllers.getAllUser);

export const UserRoutes = router;

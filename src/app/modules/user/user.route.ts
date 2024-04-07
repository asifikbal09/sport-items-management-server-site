import express from 'express';
import { UserValidations } from './user.validation';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ManagerValidations } from '../manager/manager.validation';

const router = express.Router();

//will call controller function

router.post(
  '/create-user',
  validateRequest(UserValidations.createUserValidationSchema),
  UserControllers.createUser,
);

router.get('/', UserControllers.getAllUser);

router.post(
  '/create-manager',
  validateRequest(ManagerValidations.createManagerValidationSchema),
  UserControllers.createManager,
);

export const UserRoutes = router;

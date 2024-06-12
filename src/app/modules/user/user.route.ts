import express from 'express';
import { UserValidations } from './user.validation';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ManagerValidations } from '../manager/manager.validation';
import { SellerValidations } from '../seller/seller.validetion';

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
router.post(
  '/create-seller',
  validateRequest(SellerValidations.createSellerValidationSchema),
  UserControllers.createSeller,
);

export const UserRoutes = router;

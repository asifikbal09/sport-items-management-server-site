import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BranchValidations } from './branch.validation';
import { BranchControllers } from './branch.controller';

const router = express.Router();

//will call controller function

router.post(
  '/create-branch',
  validateRequest(BranchValidations.createBranchValidationSchema),
  BranchControllers.createBranch,
);

export const BranchRoutes = router;

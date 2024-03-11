import express from 'express';
import { OrderControllers } from './order.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OrderValidations } from './order.validation';


const router = express.Router();

//will call controller function

router.post(
  '/create-order',
  validateRequest(OrderValidations.createOrderValidationSchema),
  OrderControllers.createOrder
);

router.get('/', OrderControllers.getAllOrder);


export const OrderRoutes = router;

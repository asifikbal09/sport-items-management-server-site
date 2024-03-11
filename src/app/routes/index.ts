import { Router } from 'express';
import { ProductRoutes } from '../modules/product/product.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { OrderRoutes } from '../modules/orders/order.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

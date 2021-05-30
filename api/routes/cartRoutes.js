import express from 'express';

import * as CartController from '../controllers/cart';

const cartRoutes = express.Router();

cartRoutes.get('/:userId', CartController.GET.getCartByUserId);

export default cartRoutes;

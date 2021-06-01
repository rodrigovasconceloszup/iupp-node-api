import express from 'express';

import * as CartController from '../controllers/CartController';

const cartRoutes = express.Router();

cartRoutes.get('/:cartId', CartController.getCart);

cartRoutes.post('/', CartController.create);
cartRoutes.post('/addItem/:cartId', CartController.addItem);
cartRoutes.post('/increase/:cartId', CartController.increment);
cartRoutes.post('/decrease/:cartId', CartController.decrement);
cartRoutes.post('/add-shipping/:cartId', CartController.addShipping);



export default cartRoutes;

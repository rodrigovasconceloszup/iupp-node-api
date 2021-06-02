import express from 'express';

import * as CartController from '../controllers/CartController';

const cartRoutes = express.Router();

cartRoutes.get('/:cart_id', CartController.getCart);

cartRoutes.post('/', CartController.create);
cartRoutes.post('/addItem/:cart_id', CartController.addItem);
cartRoutes.post('/increase/:cart_id', CartController.increment);
cartRoutes.post('/decrease/:cart_id', CartController.decrement);
cartRoutes.post('/add-shipping/:cart_id', CartController.addShipping);



export default cartRoutes;

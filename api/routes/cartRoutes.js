import express from 'express';

import * as CartController from '../controllers/CartController';

const cartRoutes = express.Router();

cartRoutes.get('/:cartId', CartController.getCart);

cartRoutes.post('/', CartController.create);
cartRoutes.post('/addItem/:cartId/:itemId', CartController.addItem);
cartRoutes.post('/increment/:cartId/:itemId', CartController.increment);
cartRoutes.post('/decrement/:cartId/:itemId', CartController.decrement);
cartRoutes.post('/add-shipping/:cartId/:cep', CartController.addShipping);



export default cartRoutes;

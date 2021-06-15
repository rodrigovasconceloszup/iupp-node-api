import { Request, Response } from 'express';
import { sendDefaultHttpCreatedResponse, sendDefaultHttpSuccessResponse } from 'utils/httpUtils';

import CartRepository from '../repositories/CartRepository';

const cartRepository = new CartRepository()

export const getCart = async (req: Request, res: Response) => {
  const cart_id = req.params['cart_id'];
  const cart = cartRepository.get(cart_id);
  sendDefaultHttpSuccessResponse(res, cart);
};

export const addItem = async (req: Request, res: Response) => {
  const cart_id = req.params['cart_id'];
  const { productId, quantity = 1 } = req.body;
  const cart = cartRepository.addItemCart({ cart_id, product_id: productId, quantity });
  sendDefaultHttpSuccessResponse(res, cart);
};

export const create = async (req: Request, res: Response) => {
  const cart = cartRepository.create();
  sendDefaultHttpCreatedResponse(res, cart);
};

export const increment = async (req: Request, res: Response) => {
  const cart_id = req.params['cart_id'];
  const { itemCartId } = req.body;
  const cart = cartRepository.incrementItem({ cart_id, item_cart_id: itemCartId });
  sendDefaultHttpSuccessResponse(res, cart);
};

export const decrement = async (req: Request, res: Response) => {
  const cart_id = req.params['cart_id'];
  const { itemCartId } = req.body;
  const cart = cartRepository.decrementItem({ cart_id, item_cart_id: itemCartId });
  sendDefaultHttpSuccessResponse(res, cart);
};

export const addShipping = async (req: Request, res: Response) => {
  const cart_id = req.params['cart_id'];
  const { cep } = req.body;
  const cart = cartRepository.addShipping({ cart_id, cep });
  sendDefaultHttpSuccessResponse(res, cart);
};

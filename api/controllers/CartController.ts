import { Request, Response } from 'express';
import { sendDefaultHttpCreatedResponse, sendDefaultHttpSuccessResponse } from 'utils/httpUtils';

import CartRepository from '../repositories/CartRepository';

const cartRepository = new CartRepository()

export const getCart = async (req: Request, res: Response) => {
  const cartId = req.params['cartId'];
  const cart = cartRepository.get(cartId);
  sendDefaultHttpSuccessResponse(res, cart);
};

export const addItem = async (req: Request, res: Response) => {
  const cartId = req.params['cartId'];
  const { product_id } = req.body;
  const cart = cartRepository.addItemCart({ cart_id: cartId, product_id: product_id });
  sendDefaultHttpSuccessResponse(res, cart);
};

export const create = async (req: Request, res: Response) => {
  const cart = cartRepository.create();
  sendDefaultHttpCreatedResponse(res, cart);
};

export const increment = async (req: Request, res: Response) => {
  const cartId = req.params['cartId'];
  const { item_cart_id } = req.body;
  const cart = cartRepository.incrementItem({ cart_id: cartId, item_cart_id: item_cart_id });
  sendDefaultHttpSuccessResponse(res, cart);
};

export const decrement = async (req: Request, res: Response) => {
  const cartId = req.params['cartId'];
  const { item_cart_id } = req.body;
  const cart = cartRepository.decrementItem({ cart_id: cartId, item_cart_id: item_cart_id });
  sendDefaultHttpSuccessResponse(res, cart);
};

export const addShipping = async (req: Request, res: Response) => {
  const cartId = req.params['cartId'];
  const { cep } = req.body;
  const cart = cartRepository.addShipping({ cart_id: cartId, cep: cep });
  sendDefaultHttpSuccessResponse(res, cart);
};

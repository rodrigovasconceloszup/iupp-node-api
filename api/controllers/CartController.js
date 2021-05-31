import CartRepository from '../repositories/CartRepository';
import { sendDefaultHttpSuccessResponse } from '../utils/httpUtils';

const cartRepository = new CartRepository()

export const getCart = async (req, res) => {
    const cartId = req.params['cartId'];
    const cart = cartRepository.get(cartId);
    sendDefaultHttpSuccessResponse(res, cart);
};

export const addItem = async (req, res) => {
    const cartId = req.params['cartId'];
    const itemId = req.params['itemId'];
    const cart = cartRepository.addItemCart(cartId, itemId);
    sendDefaultHttpSuccessResponse(res, cart);
};

export const create = async (req, res) => {
    const cart = cartRepository.create();
    sendDefaultHttpSuccessResponse(res, cart);
};

export const increment = async (req, res) => {
    const cartId = req.params['cartId'];
    const itemId = req.params['itemId'];
    const cart = cartRepository.incrementItem(cartId, itemId);
    sendDefaultHttpSuccessResponse(res, cart);
};

export const decrement = async (req, res) => {
    const cartId = req.params['cartId'];
    const itemId = req.params['itemId'];
    const cart = cartRepository.decrementItem(cartId, itemId);
    sendDefaultHttpSuccessResponse(res, cart);
};

export const addShipping = async (req, res) => {
    const cartId = req.params['cartId'];
    const cep = req.params['cep'];
    const cart = cartRepository.addShipping(cartId, cep);
    sendDefaultHttpSuccessResponse(res, cart);
};
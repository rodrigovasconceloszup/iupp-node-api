import CartRepository from '../repositories/CartRepository';
import { sendDefaultHttpErrorResponse, sendDefaultHttpSuccessResponse } from '../utils/httpUtils';

const cartRepository = new CartRepository()

export const getCart = async (req, res) => {
    const cartId = req.params['cartId'];
    try {
        const cart = cartRepository.get(cartId);
        sendDefaultHttpSuccessResponse(res, cart);
    } catch (e) {
        console.log(e);
        sendDefaultHttpErrorResponse(req, res, { message: e });
    }
};

export const addItem = async (req, res) => {
    try {
        const cartId = req.params['cartId'];
        const itemId = req.body['itemId'];
        const cart = cartRepository.addItemCart(cartId, itemId);
        sendDefaultHttpSuccessResponse(res, cart);
    } catch (e) {

        sendDefaultHttpErrorResponse(req, res, { message: e });
    }
};

export const create = async (req, res) => {
    const cart = cartRepository.create();
    sendDefaultHttpSuccessResponse(res, cart);
};

export const increment = async (req, res) => {
    try {
        const cartId = req.params['cartId'];
        const itemId = req.params['itemId'];
        const cart = cartRepository.incrementItem(cartId, itemId);
        sendDefaultHttpSuccessResponse(res, cart);
    } catch (e) {
        sendDefaultHttpErrorResponse(req, res, { message: e });
    }
};

export const decrement = async (req, res) => {
    try {
        const cartId = req.params['cartId'];
        const itemId = req.params['itemId'];
        const cart = cartRepository.decrementItem(cartId, itemId);
        sendDefaultHttpSuccessResponse(res, cart);

    } catch (e) {
        sendDefaultHttpErrorResponse(req, res, { message: e });
    }
};

export const addShipping = async (req, res) => {
    try {
        const cartId = req.params['cartId'];
        const cep = req.params['cep'];
        const cart = cartRepository.addShipping(cartId, cep);
        sendDefaultHttpSuccessResponse(res, cart);

    } catch (error) {
        sendDefaultHttpErrorResponse(req, res, { message: e });
    }
};
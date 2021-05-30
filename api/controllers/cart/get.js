import { sendDefaultHttpSuccessResponse } from '../../utils/httpUtils';

export const getCartByUserId = async (req, res) => {
    const userId = req.params['userId'];
    console.log('Getting cart for the user with id', userId);
    sendDefaultHttpSuccessResponse(res, {'cartId': 1});
};

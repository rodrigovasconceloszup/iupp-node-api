import { sendDefaultHttpSuccessResponse } from '../../utils/httpUtils';
import showcaseData from '../../data/showcase/showcase';

export const getShowcaseByUserId = async (req, res) => {
    const userId = req.params['userId'];
    console.log('Getting showcase for the user with id', userId);
    sendDefaultHttpSuccessResponse(res, showcaseData);
};

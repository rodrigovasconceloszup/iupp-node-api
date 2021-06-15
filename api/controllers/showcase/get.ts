import {Request, Response } from 'express';
import { sendDefaultHttpSuccessResponse } from '../../utils/httpUtils';
import showcaseData from '../../data/showcase/showcase';

export const getShowcaseByUserId = async (req: Request, res: Response) => {
    console.log('Getting showcase');
    sendDefaultHttpSuccessResponse(res, showcaseData);
};

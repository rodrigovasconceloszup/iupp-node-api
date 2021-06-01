import { CREATED, OK, BAD_REQUEST, UNAUTHORIZED, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { Request, Response } from 'express';
import AppError from './AppError';

export const sendDefaultHttpSuccessResponse = (res: Response, payload = {}) => {
	return res.status(OK).json(payload);
};

export const sendDefaultHttpUnauthorizedResponse = (res: Response, message: String) => {
	return res.status(UNAUTHORIZED).json({ message: message });
};

export const sendDefaultHttpBadRequestResponse = (res: Response, message: String) => {
	return res.status(BAD_REQUEST).json({ message: message });
};

export const sendDefaultHttpCreatedResponse = (res: Response, payload = {}) => {
	return res.status(CREATED).json(payload);
};

export const sendDefaultHttpErrorResponse = (req: Request, res: Response, error: AppError) => {
	return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
};

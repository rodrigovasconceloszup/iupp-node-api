import { CREATED, OK, BAD_REQUEST, UNAUTHORIZED, INTERNAL_SERVER_ERROR } from 'http-status-codes';

export const sendDefaultHttpSuccessResponse = (res, payload = {}) => {
	return res.status(OK).json(payload);
};

export const sendDefaultHttpUnauthorizedResponse = (res, message) => {
	return res.status(UNAUTHORIZED).json({ message: message });
};

export const sendDefaultHttpBadRequestResponse = (res, message) => {
	return res.status(BAD_REQUEST).json({ message: message });
};

export const sendDefaultHttpCreatedResponse = (res, payload = {}) => {
	return res.status(CREATED).json(payload);
};

export const sendDefaultHttpErrorResponse = (req, res, error) => {
	return res.status(INTERNAL_SERVER_ERROR).json({ status: INTERNAL_SERVER_ERROR, message: error.message });
};
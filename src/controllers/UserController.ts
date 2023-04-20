import { Request, Response } from 'express';

export const UserController = {
	async socket(req: Request, res: Response) {
		res.json({ status: 'REQUEST_STATUS_OK' });
	},
};

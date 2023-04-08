import { Request, Response } from 'express';

export const UserController = {
	getUsers(req: Request, res: Response) {
		res.send('hello mam');
	},
};

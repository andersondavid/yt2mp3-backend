import { Request, Response } from 'express';
import handleUsers from '../utils/handleUsers';

export const UserController = {
	async socket(req: Request, res: Response) {
		const uid = req.params.uid;

		if (handleUsers.checkUser({ uid })) {
			res.json({ status: 'REQUEST_STATUS_OK', userStatus: 'ALREADY_CONN' });
		} else {
			handleUsers.addUser({
				uid,
			});
			res.json({ status: 'REQUEST_STATUS_OK', userStatus: 'NEW_CONN' });
		}
	},
};

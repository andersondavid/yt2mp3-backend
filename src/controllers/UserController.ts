import { Request, Response } from 'express';

import downloadStream from '../services/downloadStream';
import convertToMp3 from '../services/convertToMp3';

export const UserController = {
	async startService(req: Request, res: Response) {
		const url = req.body.url;

		const stream = await downloadStream(url);
		const conveter = await convertToMp3(stream)

		res.json({
			status: 'ok'
		})
	},
};

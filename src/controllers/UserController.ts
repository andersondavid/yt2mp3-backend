import { Request, Response } from 'express';

import downloadStream from '../services/downloadStream';
import convertToMp3 from '../services/convertToMp3';
import socketService from '../services/socketService';

export const UserController = {
	async startService(req: Request, res: Response) {
		const url = req.body.url;

		const stream = await downloadStream(url);
		const conveter = await convertToMp3(stream);

		res.json({
			status: 'ok',
		});
	},

	async socket(req, res: Response) {
		const time = Date.now().toString();

		const { Server, httpServer } = req.io;
		const io = new Server(httpServer, {
			cors: {
				origin: '*',
			}
		})
		//const io = req.io

		socketService(io, time);

		res.json({ msg: 'Conexão do chat iniciada!' });
	},
};

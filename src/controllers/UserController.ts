import { Response } from 'express';
import { Socket } from 'socket.io';
import orchestrator from '../orchestrator/orchestrator';


export const UserController = {
	async socket(req, res: Response) {
		console.log('1 - Resquet recebida')

		const { Server, httpServer } = req.io;
		try {
			const io = new Server(httpServer, { cors: { origin: '*' } });
			io.on('connection', (socket: Socket) => {
				console.log('2 - Usuário conectado', socket.id);

				orchestrator(socket)

				socket.on('disconnect', () => {
					socket.disconnect();
					console.log('Usuário desconectado', socket.id);
				});
			});
		} catch (error) {
			console.error("Socket IO não conectado.")
		}

		res.json({ status: 'Connect OK' });
	},
};

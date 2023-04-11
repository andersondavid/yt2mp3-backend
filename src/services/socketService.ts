import { Socket } from 'socket.io';

function socketService(io: Socket) {

	io.on('connection', (socket: Socket) => {
		console.log(`Instancia iniciada`);
		console.log('Usuário conectado', socket.id);

		socket.on('start_url', (url) => {
			console.log({
				url
			})
		})

		socket.on('disconnect', () => {
			socket.disconnect()
			console.log('Usuário desconectado', socket.id);
		});
	});
}

export default socketService;

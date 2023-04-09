import { Socket } from 'socket.io';

function socketService(io: Socket, time: string) {
	let socketId: string;

	setInterval(() => {
		// 	io.emit('mensagem', 'Olá, postman! ' + id);
		io.to(socketId).emit('msg', {
			time, socketId, msg: 'Mensagem enviada a 3s'
		})
	}, 3000);

	io.on('connection', (socket: Socket) => {
		console.log(`Instancia iniciada ${time}`);
		
		socketId = socket.id;

		console.log('Usuário conectado', {
			time, socketId, msg: 'Usuario conectado'
		});

		socket.on('postmans', (mensagem) => {
			console.log('Nova mensagem:', {
				mensagem: mensagem,
				time,
			});
		});

		socket.on('disconnect', () => {
			socket.disconnect()
			console.log('Usuário desconectado', socketId);
		});
	});
}

export default socketService;

import { Server } from 'socket.io';
import getBasicInfo from './getBasicInfo';
import loadStream from './loadStream';
import convertToMp3 from './convertToMp3';

type ConvertOptionsType = {
	url: string;
	bitrate: number;
};

async function socket(io: Server) {
	try {
		io.on('connection', (socket) => {
			socket.on('start_url', async (options: ConvertOptionsType) => {
				const basicInfo = await getBasicInfo(options);
				socket.emit('send_info', basicInfo);

				const stream = await loadStream(options);
				socket.emit('loading_audio', true);

				// convertToMp3(stream).then((buffer) => {
				// 	console.log('fileConverted', buffer);
				// 	socket.emit('buffer', 'buffer');
				// });

				const buffer = await convertToMp3(stream)
				console.log('fileConverted', buffer)
				
			});
			socket.on('disconnect', () => {
				socket.disconnect();
				console.log('Usuário desconectado', socket.id);
			});
		});
	} catch (error) {
		console.error('Socket IO não conectado.');
	}
}

export default socket;
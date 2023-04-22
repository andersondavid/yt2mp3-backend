import { Server } from 'socket.io';
import getBasicInfo from './getBasicInfo';
import loadStream from './loadStream';
import convertToMp3 from './convertToMp3';
import handleUsers from '../utils/handleUsers';

type ConvertOptionsType = {
	url: string;
	bitrate: number;
};

async function socket(io: Server) {
	try {
		io.on('connection', (socket) => {
			socket.on('start_url', async (options: ConvertOptionsType) => {
				socket.emit('send_id', socket.id);
				handleUsers.addUser({ uid: socket.id });
				const basicInfo = await getBasicInfo(options);
				socket.emit('send_info', basicInfo);

				const stream = await loadStream(options);
				socket.emit('loading_audio', true);

				const buffer = await convertToMp3(stream, options.bitrate);
				socket.emit('buffer', buffer);
				socket.emit('loading_audio', false);
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

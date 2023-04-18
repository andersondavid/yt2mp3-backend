import { Socket } from 'socket.io';

import downloadStream from '../services/downloadStream';
import convertToMp3 from '../services/convertToMp3';
import createFileName from '../libs/createFileName';
import getDataFromYT from '../services/getVideoData';

async function orchestrator(socket: Socket) {
	socket.on('start_url', async (dataUrl) => {
		const options = dataUrl

		console.log('options', options);
		

		const dataFromYt = await getDataFromYT(options);
		console.log(dataFromYt.videoDetails.title);
		
		socket.emit('send_info', dataFromYt);

		const fileName = await createFileName(dataFromYt);
		const stream = downloadStream(options);
		const fileConverted = await convertToMp3(stream, fileName, socket);

		socket.emit('file_converted', fileConverted);
	});
}

export default orchestrator;

import { Stream } from 'stream';
//import { Socket } from 'socket.io';

import ffmpeg from '../libs/ffmpeg';
let buffer;

async function convertToMp3(stream: Stream) {
	try {
		const streamConverted = await ffmpeg(stream)
			.audioBitrate(192)
			.format('mp3')
			.on('start', () => {
				console.log('5 - Conversão iniciada!');
				//socket.emit('loading_audio', true)
			})
			.on('end', () => {
				console.log('6 - Conversão do audio concluido!');
				return 'bom dia';

				//	socket.emit('loading_audio', false)
			})
			.on('error', (err: Error) => {
				console.error('erro aqui na conversao', err);
			});

		const ffstream = streamConverted.pipe();

		const buffers = [];
		ffstream.on('data', function (buf) {
			buffers.push(buf);
		});

		ffstream.on('end', function () {
			const outputBuffer = Buffer.concat(buffers);
			return 'bom dia';
		});
	} catch (error) {
		throw new error(error);
	}
}

export default convertToMp3;

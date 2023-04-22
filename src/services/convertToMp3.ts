import { Stream } from 'stream';

import ffmpeg from '../utils/ffmpeg';

async function convertToMp3(stream: Stream, bitrate: number) {
	const convertPromise = new Promise((resolve, reject) => {
		const streamConverted = ffmpeg(stream)
			.audioBitrate(bitrate)
			.format('mp3')
			.on('start', () => {
				console.log('Conversão iniciada!');
				//socket.emit('loading_audio', true)
			})
			.on('end', () => {
				console.log('Conversão do audio concluido!');
				//	socket.emit('loading_audio', false)
			})
			.on('error', (err: Error) => {
				reject(err)
			});

		const ffstream = streamConverted.pipe();

		const buffers = [];
		ffstream.on('data', function (buf) {
			buffers.push(buf);
		});

		ffstream.on('end', function () {
			const outputBuffer = Buffer.concat(buffers);
			resolve(outputBuffer);
			
		});
	});

	return convertPromise
		.then((outputBuffer) => {
			console.log('Enviando buffer do audio!');
			
			return outputBuffer
		})
		.catch((error) => console.error(error));
}

export default convertToMp3;

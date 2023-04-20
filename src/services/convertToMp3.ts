import { Stream } from 'stream';

import ffmpeg from '../libs/ffmpeg';

async function convertToMp3(stream: Stream) {
	const convertPromise = new Promise((resolve, reject) => {
		const streamConverted = ffmpeg(stream)
			.audioBitrate(192)
			.format('mp3')
			.on('start', () => {
				console.log('5 - Conversão iniciada!');
				//socket.emit('loading_audio', true)
			})
			.on('end', () => {
				console.log('6 - Conversão do audio concluido!');
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
			console.log('RESOLVER', outputBuffer);
			
		});
	});

	return convertPromise
		.then((outputBuffer) => {
			console.log('PROMISSE', outputBuffer);
			return outputBuffer
		})
		.catch((error) => console.error(error));
}

export default convertToMp3;

import { Stream } from 'stream';
import fs from 'fs';

import ffmpeg from '../libs/ffmpeg';

async function convertToMp3(stream: Stream, fileName: string) {
	const fileConverted = `temp/${fileName}.mp3`;

	try {
		const streamConverted = ffmpeg(stream)
			//.save(pathAudioFile + audioFileName)
			.audioBitrate(192)
			.format('mp3')
			.on('start', () => {
				console.log('5 - Conversão iniciada!');
			})
			.on('progress', (progress) => {
				console.log('Processing: ' + JSON.stringify(progress) + '% done');
				process.stdout.write('\x1b[1A');
			})
			.on('end', () => {
				console.log('6 - Conversão do audio concluido!');
			})
			.on('error', (err: Error) => {
				console.error('erro aqui na conversao', err);
			});

		streamConverted.ffprobe((err, data) => {
			console.log('Informações da Stream:', data.streams[0]);
		});

		const ffstream = streamConverted.pipe();

		const buffers = [];
		ffstream.on('data', function (buf) {
			buffers.push(buf);
		});

		ffstream.on('end', async function () {
			const outputBuffer = Buffer.concat(buffers);
			const buffer = Buffer.from(outputBuffer);

			fs.writeFile(fileConverted, buffer, (err) => {
				if (err) throw err;
				console.log('7 - Arquivo criado com sucesso!');
			});
		});

		return fileConverted;
	} catch (error) {
		throw new error(error);
	}
}

export default convertToMp3;

import { Stream } from 'stream';
import ffmpeg from '../libs/ffmpeg';
import fs from 'fs'

async function convertToMp3(stream: Stream) {
	try {
		const streamConverted = ffmpeg(stream)
			//.save(pathAudioFile + audioFileName)
			.audioBitrate(192)
			.format('mp3')
			.on('start', () => {
				console.log('Conversão iniciada!');
			})
			.on('end', () => {
				console.log('Conversão do audio concluido!');
			})
			.on('error', (err) => {
				console.error('erro aqui na conversao', err);
			});

		const ffstream = streamConverted.pipe();

		const buffers = [];
		ffstream.on('data', function (buf) {
			buffers.push(buf);
		});

		ffstream.on('end', async function () {
			const outputBuffer = Buffer.concat(buffers);
			const caminhoArquivo = 'temp/musica.mp3';
			const buffer = Buffer.from(outputBuffer);

			fs.writeFile(caminhoArquivo, buffer, (err) => {
				if (err) throw err;
				console.log('Arquivo criado com sucesso!');
			});
		});		

	} catch (error) {
		throw new error(error);
	}
}

export default convertToMp3;

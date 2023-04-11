import ytdl, { downloadOptions } from 'ytdl-core';

function downloadStream(options: { url: string; bitrate: number }) {
	const streamOptions: downloadOptions = {
		quality: 'highest',
		filter: 'audioonly',
	};

	try {
		const stream = ytdl(options.url, streamOptions);
		console.log('3 - Stream carregada');
		
		return stream
		
	} catch (error) {
		throw new Error(error)
	}
}

export default downloadStream;

import ytdl from 'ytdl-core';

function loadStream(options: { url: string; bitrate: number }) {
	try {
		const stream = ytdl(options.url, {
			quality: 'highest',
			filter: 'audioonly',
		});
		console.log('Stream carregada');
		return stream;
	} catch (error) {
		return error;
	}
}

export default loadStream;

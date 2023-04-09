import ytdl, { downloadOptions } from 'ytdl-core';

async function downloadStream(url: string) {
	const options: downloadOptions = {
		quality: 'highest',
		filter: 'audioonly',
	};

	try {
		const stream = ytdl(url, options);
		return stream
		
	} catch (error) {
		throw new Error(error)
	}
}

export default downloadStream;

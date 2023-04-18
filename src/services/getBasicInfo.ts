import ytdl from 'ytdl-core';

async function getBasicInfo(options: { url: string }) {
	const { url } = options;

	try {
		const videoInfo = await ytdl.getBasicInfo(url);
		console.log('Informções do video carregadas');
		return videoInfo;
	} catch (error) {
		console.error('ERRO: getBasicInfo');
		return error;
	}
}

export default getBasicInfo;

import ytdl from 'ytdl-core';

async function getDataFromYT(url: string) {
	try {
		const videoInfo = await ytdl.getBasicInfo(url);
		return videoInfo
	} catch (error) {
		console.error('ERRO: Get info');
	}
}


export default getDataFromYT;

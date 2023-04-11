import getDataFromYT from './getVideoData';

describe('Get data from YT', () => {
	test('Deve buscar as informções do video pela url', () => {
		getDataFromYT('https://www.youtube.com/watch?v=ZvRlusdjMSs').then(
			(videoTitle) => {
				expect(videoTitle.videoDetails.title).toEqual(
					'Gorillaz - Controllah ft. MC Bin Laden (Official Audio)'
				);
			}
		);
	});
});

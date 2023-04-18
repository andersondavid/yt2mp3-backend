import getBasicInfo from '../getBasicInfo';

describe('Get data from YT', () => {
	test('Deve buscar as informções do video pela url', async () => {
		const info = await getBasicInfo({
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		});
		expect(info.videoDetails.title).toBe(
			'Rick Astley - Never Gonna Give You Up (Official Music Video)'
		);
	});
});

import loadStream from '../loadStream';

describe('loadStream', () => {
	it('should download a video stream from URL', async () => {
		const stream = await loadStream({
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			bitrate: 92,
		});

		expect(stream).toBeDefined();
	});
});

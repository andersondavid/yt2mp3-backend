import convertToMp3 from '../convertToMp3';
import loadStream from '../loadStream';

describe('Convert to MP3', () => {
	it('should convert the input stream to an MP3 file', async () => {
		const stream = await loadStream({
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			bitrate: 92,
		});

		const converted = await convertToMp3(stream);

		expect(converted).toBe(true);
	});
});

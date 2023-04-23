import loadStream from '../loadStream';

jest.mock('ytdl-core');

describe('loadStream function', () => {
	it('should return a stream when ytdl call is successful', () => {
		const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
		const bitrate = 128;
		const mockStream = {};
		const result = loadStream({ url, bitrate });
		expect(result).toBe(mockStream);
	});
});

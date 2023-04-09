import fs from 'fs';
import downloadStream from './downloadStream';

describe('downloadStream', () => {
	const URL = 'https://www.youtube.com/watch?v=c_R_H4DowKA';

	it('should download a video stream from URL', async () => {
		await downloadStream(URL);
		const fileExists = fs.existsSync('temp/video.mp4');
		expect(fileExists).toBeTruthy();
	});

	afterEach(() => {
		fs.unlinkSync('temp/video.mp4');
	});
});

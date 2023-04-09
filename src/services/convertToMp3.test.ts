import { PassThrough } from 'stream';
import fs from 'fs';
import convertToMp3 from './convertToMp3';

describe('Convert to MP3', () => {
	it('should convert the input stream to an MP3 file', async () => {
		const inputStream = new PassThrough();
		const expectedFilename = 'temp/musica.mp3';
		const expectedFileContents = 'test file contents';

		setTimeout(() => {
			inputStream.write(Buffer.from(expectedFileContents));
			inputStream.end();
		}, 100);

		await convertToMp3(inputStream);

		// Check that the file was created
		expect(fs.existsSync(expectedFilename)).toBe(true);
	});
});

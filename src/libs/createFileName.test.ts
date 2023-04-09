import createFileName from "./createFileName";

describe('Name generator', () => {
	const URL = 'https://www.youtube.com/watch?v=c_R_H4DowKA';

	it('Teste how name is created', async () => {
		const name = await createFileName(URL)
		expect(name).toEqual(name)
		
	})
})
import { getGif } from '../../src/helpers/getGifs';

describe('getGif tests', () => {
    test('should return an array of gifs', async () => {
        const gifs = await getGif('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    })
});
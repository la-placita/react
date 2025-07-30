/* eslint-disable no-global-assign */
import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await.js', () => {
    
    test('getImagen debe retornar un URL de imagen', async () => {
        const url = await getImagen();
        expect(url).toBeDefined();
        expect(typeof url).toBe('string');
        expect(url.startsWith('https://')).toBe(true);
    });

    //test('getImagen debe manejar errores', async () => {
        // Simulamos un error en la API
    //    global.fetch = jest.fn(() =>
    //        Promise.reject(new Error('Error en la API'))
    //    );

    //    await expect(getImagen()).rejects.toThrow('Error en la API');
    //});
});
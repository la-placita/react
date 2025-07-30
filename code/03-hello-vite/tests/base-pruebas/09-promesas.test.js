import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Puebas en 09-promesas.js', () => {
    test('getHeroeByIdAsync debe retornar un héroe por ID', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
                done();
            });
    });

    test('getHeroeByIdAsync debe retornar un error si el héroe no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
});
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp.js', () => {    

    test('getHeroeById debe retornar un héroe por ID', () => {
        const hero = getHeroeById(1);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    
    test('getHeroesByOwner debe retornar héroes por dueño', () => {
        const marvelHeroes = getHeroesByOwner('Marvel');
        expect(marvelHeroes.length).toBe(2);
        expect(marvelHeroes).toEqual([
        { id: 2, name: 'Spiderman', owner: 'Marvel' },
        { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
    });
});
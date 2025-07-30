import { retornaArreglo, usState } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr.js', () => {
  test('retornaArreglo debe retornar un arreglo', () => {
    const [ letras, numeros ] = retornaArreglo();
    expect(letras).toBe('ABC');
    expect(numeros).toBe(123);
  });

  test('usState debe retornar un arreglo con un valor y una funcion', () => {
    const [ nombre, setNombre ] = usState( 'Goku' );
    expect(nombre).toBe('Goku');
    expect(typeof setNombre).toBe('function');
  });
});

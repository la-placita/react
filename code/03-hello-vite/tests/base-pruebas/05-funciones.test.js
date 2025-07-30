import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones.js', () => {
  test('getUser debe retornar un objeto', () => {
    const user = getUser();
    expect(user).toEqual({
      uid: 'ABC123',
      username: 'El_Papi1502'
    });
  });

  test('getUsuarioActivo debe retornar un objeto con el nombre pasado como argumento', () => {
    const nombre = 'Fernando';
    const usuarioActivo = getUsuarioActivo(nombre);
    expect(usuarioActivo).toEqual({
      uid: 'ABC567',
      username: nombre
    });
  });
});
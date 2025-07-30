import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar 'Hola Fernando'", () => {
    const nombre = "Fernando";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });

});
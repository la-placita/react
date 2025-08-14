import { useForm } from "../../src/hooks/useForm";
import { act, renderHook } from "@testing-library/react";

describe('pruebas en useForm', () => {
    const initialForm = {
        name: 'Pako Díaz',
        email: 'pakodiaz@serv.com',
        password: '123456'
    };
    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current.formState).toEqual(initialForm);
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.email).toBe(initialForm.email);
        expect(result.current.password).toBe(initialForm.password);
        expect(typeof result.current.onChange).toBe('function');
        expect(typeof result.current.setFormState).toBe('function');
        expect(typeof result.current.resetForm).toBe('function');
    });

    test('debe de cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onChange } = result.current;
        act(() => {
            onChange({ target: { name: 'name', value: 'Pako' } });
        })
        expect(result.current.name).toBe('Pako');
        expect(result.current.formState.name).toBe('Pako');

    })

     test('debe reiniciar el formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onChange, resetForm } = result.current;
        act(() => {
            onChange({ target: { name: 'name', value: 'Pako' } });
        })
        expect(result.current.name).toBe('Pako');
        expect(result.current.formState.name).toBe('Pako');
        act(() => {
            resetForm();
        })
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.email).toBe(initialForm.email);
        expect(result.current.password).toBe(initialForm.password);
    })
});

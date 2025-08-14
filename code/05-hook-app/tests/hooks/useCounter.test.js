import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('pruea en el useCounter', () => {
    test('debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de genearr el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current
        expect(counter).toBe(100); 
    });

    test('debe de incrementar el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => {
            increment();
            increment(2);
        });

        const { counter } = result.current;
        expect(counter).toBe(103);
    });

    test('debe de decrementar el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement(1);
            decrement(2);
        });
        expect(result.current.counter).toBe(97);
    });

    test('debe de reset el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement, increment, reset } = result.current;

        act(() => {
            decrement(1);
            increment(5);
        });

        const { counter } = result.current;
        expect(counter).toBe(104);

        act(() => {
            reset();
        });
        expect(result.current.counter).toBe(100);
    });

    test('debe de reset el defult count', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement, increment, reset } = result.current;

        act(() => {
            decrement(1);
            increment(3);
        });

        const { counter } = result.current;
        expect(counter).toBe(12);

        act(() => {
            reset();
        });
        expect(result.current.counter).toBe(10);
    });
});
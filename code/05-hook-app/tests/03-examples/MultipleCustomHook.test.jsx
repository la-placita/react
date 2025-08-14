import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from '../../src/hooks/useCounter'
import { useEffect } from "react";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Prueba en <MultipleCustomHooks/>',  () => {
    const increment = jest.fn();
    const decrement = jest.fn();
    beforeEach(() => {
        useCounter.mockReturnValue({
            counter:10,
            increment,
            decrement
        });
        useFetch.mockReturnValue({
            data: {
                'id': 1,
                sprites: {
                    back_default: 'back_default.png',
                    front_shiny: 'front_shiny.png',
                    front_default: 'front_default.png',
                    back_shiny: 'front_default.jpg'
                }
            },
            isLoading: false,
            hasError: false
        });
    });
    test('debe de mostrar el componenete por defecto', () => {

        useFetch.mockReturnValue({
           data: null,
           isLoading: true,
           hasError: true
        });
        render(<MultipleCustomHook/>);
        expect(screen.getByText('Loading'));
        const btnAterior = screen.getByRole('button', {name: "Anterior"});
        const nextBtn = screen.getByRole('button', {name: "Siguiente"});
        expect(btnAterior);
        expect(btnAterior).toBeTruthy();
        expect(nextBtn);
        expect(btnAterior).toBeTruthy();
    })

    test('debe de mostrar un pokemon',  () => {
        render(<MultipleCustomHook/>);
        const btn = screen.getByRole('button', {"name": 'Siguiente'});
        fireEvent.click(btn);
        expect(increment).toHaveBeenCalled();
        
        const btnPrev = screen.getByRole('button', {"name": 'Anterior'});
        fireEvent.click(btnPrev);
        expect(decrement).toHaveBeenCalled();
        
        //screen.debug();
    })
});
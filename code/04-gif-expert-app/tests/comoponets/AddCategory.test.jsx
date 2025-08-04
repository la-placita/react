import { render, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
import { screen } from "@testing-library/react";

describe('AddCategory Component', () => {
    test('should change the value of the input', () => {
        render(<AddCategory onNewCategory={() => {}} />);
        
        const input = screen.getByRole('textbox');
        const value = 'Dragon Ball';
        fireEvent.input(input, { target: { value } });
        
        expect(input.value).toBe(value);
    });

    test('should call onNewCategory if the input has a value', () => {
        const inputValue = 'Dragon Ball';
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={onNewCategory} />);
        
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        expect(onNewCategory).toHaveBeenCalledTimes(1);
    });

    test('should not call onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={onNewCategory} />);
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});
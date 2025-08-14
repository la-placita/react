import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('<TodoItem />', () => {

    let onRemoveItem, onToggleItem;

    beforeEach(() => {
        onRemoveItem = jest.fn();
        onToggleItem = jest.fn();
    });

    test('debe de mostrar el Todo Pendiente de completar', () => {
        expect(true).toBe(true);
        const todo = {
            id: 1,
            description: 'Demo Todo',
            done: false
        };
        render(<TodoItem todo={todo} onRemoveItem={onRemoveItem} onToggleItem={onToggleItem} />);
        screen.getByText(todo.description);
        const span = screen.getByText(todo.description);
        expect(span.className).toContain('align-self-center');
        expect(span.className).not.toContain('text-decoration-line-through');
        const button = screen.getByRole('button');
        expect(button.className).toContain('btn-danger');
        fireEvent.click(button);
        fireEvent.click(span);
        expect(onToggleItem).toHaveBeenCalledWith(todo.id);
        expect(onRemoveItem).toHaveBeenCalledWith(todo.id);
    });
});
import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('<TodoItem />', () => {

    let onRemoveItem, onToggleItem;

    beforeEach(() => {
        onRemoveItem = jest.fn();
        onToggleItem = jest.fn();
    });

    test('should display the Todo as Pending', () => {
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

    test('should display the Todo as Completed', () => {
        const todo = {
            id: 2,
            description: 'Completed Todo',
            done: true
        };
        render(<TodoItem todo={todo} onRemoveItem={onRemoveItem} onToggleItem={onToggleItem} />);
        
        screen.getByText(todo.description);
        const span = screen.getByText(todo.description);
        expect(span.className).toContain('text-decoration-line-through');
        
        fireEvent.click(span);
        expect(onToggleItem).toHaveBeenCalledWith(todo.id);
    });
});
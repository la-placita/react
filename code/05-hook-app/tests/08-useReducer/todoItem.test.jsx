import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('debe de mostrar el Todo Pendiente de completar', () => {
    expect(true).toBe(true);
    render(<TodoItem/>);
    screen.debug();
});
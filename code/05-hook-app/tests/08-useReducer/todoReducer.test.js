import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Prueba en todoReducer', () => {
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });
    
    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todos',
            payload: {
                id:2, 
                description: 'Nuevo todo #2',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Debe de eliminar un Todo', () => {
        let newState = todoReducer(initialState, {});
        const action = {
            type: '[TODO] Remove Todos',
            payload: 1
        };
        newState = todoReducer(newState, action);
        expect(newState.length).toBe(0);
    });

    test('debe de realizar el Toggle del TODO', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };
        let newState = todoReducer(initialState, {});
        expect(newState[0].done).toBe(false);
        newState = todoReducer(newState, action);
        expect(newState[0].done).toBe(true);
    })
});
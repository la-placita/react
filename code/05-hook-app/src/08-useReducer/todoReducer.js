export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {

        case 'ABC':
            throw new Error('Action type not implemented');

            case '[TODO] Add Todos':
            return [...initialState, action.payload];

        case '[TODO] Remove Todos':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        
        default:
            return initialState;
    }
}
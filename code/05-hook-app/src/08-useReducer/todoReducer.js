export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('Action type not implemented');

        default:
            return initialState;
    }
}
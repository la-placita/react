const initialState = [
    {
        id: 1,
        todo: 'Get the sould stone',
        done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {
    console.log({ state, action });
    if (action.type === '[TODO] Add Todos') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Get the power stone',
    done: false
}

const addTodoAction = {
    type: '[TODO] Add Todos',
    payload: newTodo
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
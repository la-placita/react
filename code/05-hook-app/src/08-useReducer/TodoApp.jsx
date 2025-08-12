import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
    const initialState = [
        {
            id: 1,
            description: 'Get the sould stone',
            done: false
        },{
            id: 2,
            description: 'Get the power stone',
            done: false
        },
    ];
    const [todoList, dispatcherTodo] = useReducer(todoReducer, initialState) ;
    const addTodo = (newTodo) => {
        dispatcherTodo({
            type: '[TODO] Add Todos',
            payload: newTodo
        });
        console.log({newTodo});
    }

    const removeTodo = (todoId) => {
        dispatcherTodo({
            type: '[TODO] Remove Todos',
            payload: todoId
        });
    }
    return (
    <>
        <h1>Todo App 10 <small>pending 10</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList list={todoList} onRemoveItem={removeTodo} />
            </div>
            <div className="col-5">
                <h4>Add Todo</h4>
                <TodoAdd onNewTodo={addTodo} />
            </div>
        </div>
        
    </>);
}
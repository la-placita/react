import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {
    
    const initialState = [
        {
            id: 1,
            description: 'Get the sould stone',
            done: false
        },{
            id: 1,
            description: 'Get the power stone',
            done: false
        },
    ];
    const [todoList, dispatcherTodo] = useReducer(todoReducer, initialState) ;

    return (
    <>
        <h1>Todo App 10 <small>pending 10</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                {/* Todo List */}
                <ul className="list-group">
                    {/* Todo Item */}
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="align-self-center">Todo 1</span>
                        <button className="btn btn-danger">Borrar</button>
                    </li>
                    {/* Todo Item ends */}
                </ul>
                {/* Todo List ends*/}
            </div>
            <div className="col-5">
                
                <h4>Add Todo</h4>
                {/* Todo Add, onNewTodo(todo) */}
                <form>
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        className="form-control"
                    />
                    <button
                        type="submit" 
                        className="btn btn-outline-primary mt-2">
                            Add
                    </button>
                </form>
                {/* Todo Add end */}
            </div>
        </div>
        
    </>);
}
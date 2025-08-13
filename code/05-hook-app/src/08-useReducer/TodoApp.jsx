import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "./useTodo";

export const TodoApp = () => {

    const { todoList, addTodo, removeTodo, toggleTodo, todosCount, todoPendingCount } = useTodo();

    return (
        <>
            <h1>Todo App {todosCount} <small>pending {todoPendingCount}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                    list={todoList} 
                    onRemoveItem={removeTodo} 
                    onToggleItem={toggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Add Todo</h4>
                    <TodoAdd onNewTodo={addTodo} />
                </div>
            </div>
        </>
    );
}
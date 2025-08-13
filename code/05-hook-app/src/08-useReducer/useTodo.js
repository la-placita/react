import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodo = () => {
    const [todoList, dispatcherTodo] = useReducer(todoReducer, [], () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    const addTodo = (newTodo) => {
        dispatcherTodo({
            type: '[TODO] Add Todos',
            payload: newTodo
        });
    }

    const removeTodo = (todoId) => {
        dispatcherTodo({
            type: '[TODO] Remove Todos',
            payload: todoId
        });
    }

    const toggleTodo = (todoId) => {
        dispatcherTodo({
            type: '[TODO] Toggle Todo',
            payload: todoId
        });
    }

    return {
        todoList,
        addTodo,
        removeTodo,
        toggleTodo,
        todosCount: todoList.length,
        todoPendingCount: todoList.filter(todo => !todo.done).length
    }
}
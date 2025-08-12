import { TodoItem } from "./TodoItem";

export const TodoList = ({list, onRemoveItem}) => {
    return (
        <>
            <ul className="list-group">
                {
                    list.map(todo => (
                        <TodoItem key={todo.id} todo={todo} onRemoveItem={onRemoveItem} />
                    ))
                }
            </ul>
        </>
    );
}
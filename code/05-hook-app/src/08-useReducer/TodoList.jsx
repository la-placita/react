import { TodoItem } from "./TodoItem";

export const TodoList = ({list, onRemoveItem, onToggleItem}) => {
    return (
        <>
            <ul className="list-group">
                {
                    list.map(todo => (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            onRemoveItem={onRemoveItem}
                            onToggleItem={onToggleItem}
                        />
                    ))
                }
            </ul>
        </>
    );
}
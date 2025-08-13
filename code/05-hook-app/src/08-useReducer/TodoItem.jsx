export const TodoItem = ({todo, onRemoveItem, onToggleItem}) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span 
                    className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`} 
                    onClick={() => onToggleItem(todo.id)}
                    style={{cursor: 'pointer'}}
                >
                    {todo.description}
                </span>
                <button className="btn btn-danger" onClick={() => onRemoveItem(todo.id)}>Borrar</button>
            </li>
        </>
    )
}
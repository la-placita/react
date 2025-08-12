export const TodoItem = ({todo, onRemoveItem}) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{todo.description}</span>
                <button className="btn btn-danger" onClick={() => onRemoveItem(todo.id)}>Borrar</button>
            </li>
        </>
    )
}
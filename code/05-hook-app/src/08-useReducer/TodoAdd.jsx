import { useState } from "react";

export const TodoAdd = ({onNewTodo}) => {
    const [description, setDescription] = useState('');
    const onClick = (e) => {
        e.preventDefault();
        const descriptionTrimmed = description.trim();
        if (descriptionTrimmed.length <= 1) {
            setDescription('');
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: descriptionTrimmed,
            done: false
        };
        onNewTodo(newTodo);
        setDescription('');
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    type="submit" 
                    onClick={onClick}
                    className="btn btn-outline-primary mt-2">
                        Add
                </button>
            </form>
        </>
    );
}
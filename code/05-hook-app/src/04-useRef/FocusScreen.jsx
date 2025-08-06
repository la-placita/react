import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Enter your name"
            />
            <button className="btn btn-primary mt-2" onClick={handleClick}>
                Focus Input
            </button>
        </div>
    );
}
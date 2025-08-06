import { useState } from "react";
import { Small } from "./Small"

export const Memorize = () => {
    const [counter, increment] = useState(10);
    const [show, setShow] = useState(true);
    return (
    <>
        <h1>Memorize</h1>
        <Small value={counter} />
        <button 
            className="btn btn-primary mt-2" 
            onClick={() => increment(counter + 1)}
        >Re-render</button>
        <button 
            className="btn btn-secondary mt-2 ml-2" 
            onClick={() => setShow(!show)}
        >Show/Hide <small>{JSON.stringify(show)}</small></button>
    </>
    )
}
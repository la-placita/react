import { useState, useMemo } from "react";

const havyStuff = (num) => {
    for (let i = 0; i < 5000 + num; i++) {
        console.log('Processing...');
    }
        return num + 1;
};

export const MemoHook = () => {
    const [counter, increment] = useState(1);
    const [show, setShow] = useState(true);
    const memoizedValue = useMemo(() => havyStuff(counter), [counter]);
    return (
    <>
        <h1>Memorize</h1>
        <h2>havyStuff: {memoizedValue}</h2>
        <div>{counter}</div>
        <button 
            className="btn btn-primary mt-2" 
            onClick={() => increment(counter + 1)}
        >+1</button>
        <button 
            className="btn btn-secondary mt-2 ml-2" 
            onClick={() => setShow(!show)}
        >Show/Hide <small>{JSON.stringify(show)}</small></button>
    </>
    )
}
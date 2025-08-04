import { useState } from "react";

export const CounterApp = () => {
    const initState = {
        count1: 10,
        count2: 20,
        count3: 30,
    };
    const [counters, setCounter] = useState(initState);
    const { count1, count2, count3 } = counters;

    return (
        <>
            <h1>Counter App</h1>
            <p>{count1}</p>
            <p>{count2}</p>
            <p>{count3}</p>
            <button className="btn btn-primary" onClick={() => { setCounter({...counters, count1: count1 + 1 })}}> +1 </button>
            <button className="btn btn-primary" onClick={() => { setCounter({...counters, count1: count1 - 1 })}}> -1 </button>
            <button className="btn btn-danger" onClick={() => { setCounter(initState)}} aria-label="btn-reset"> Reset </button>
        </>
    );
}
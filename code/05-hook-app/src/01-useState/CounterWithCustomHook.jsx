import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(10);
    const [steps, setSteps] = useState(1);
    return (
        <>
            <h1>Counter with Custom Hook: {counter}</h1>
            <hr />
            Step {steps}:
            <input className="form-control" type="number" value={steps} onChange={(e) => setSteps(Number(e.target.value))} min={0}/>
            <button className="btn btn-primary" onClick={ () => increment(steps) }>Increment</button>
            <button className="btn btn-primary" onClick={ () => decrement(steps) }>Decrement</button>
            <button className="btn btn-danger" onClick={reset}>Reset</button>
        </>
    );
}
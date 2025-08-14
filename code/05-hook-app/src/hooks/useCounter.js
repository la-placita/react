import { useState } from "react";

export const useCounter = ( initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);
    const increment = (step=1) => setCounter(v => v + step);
    const decrement = (step=1) => {
        const result = counter - step;
        if(result >= 0)
            setCounter(v => v - step);
    };

    const reset = () => setCounter(initialValue);
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
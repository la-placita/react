import { useState } from "react";

export const useCounter = ( initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);
    const increment = (step) => setCounter(counter + step);
    const decrement = (step) => {
        const result = counter - step;
        if(result >= 0)
            setCounter(result);
    };

    const reset = () => setCounter(initialValue);   
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
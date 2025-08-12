import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrementar } from './showIncrement';

const step2=10;

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    const incrementFather = useCallback(
        (step)=> {
            setCounter((value) => value + step2 + step);
        }, []
    );
    useEffect(()=> {

    }, [incrementFather]);
    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrementar increment={incrementFather}/>
        </>
    )
}
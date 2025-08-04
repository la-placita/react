import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

const HooksApp = () => {
    return (
        <>
            <h1>Welcome to the Hook App</h1>
            <CounterWithCustomHook />
        </>
    );
}

export default HooksApp;
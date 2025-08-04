import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useFfect/SimpleForm";
import { FormWithCustomHooks } from "./02-useFfect/FormWithCustomHooks";

const HooksApp = () => {
    return (
        <>
            <h1>Welcome to the Hook App</h1>
            <FormWithCustomHooks />
        </>
    );
}

export default HooksApp;
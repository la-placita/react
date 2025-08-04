import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: 'Pako Díaz',
        email: 'pako.diaz@example.com'
    });
    const { name, email } = formState;
    const users = ['pakodiaz', 'john', 'jane'];

    useEffect(() => {
        console.log('📝 FormState changed:', formState);
    }, [formState]);

    useEffect(() => {
        console.log('✏️ Name changed:', name);
    }, [name]);

    useEffect(() => {
        console.log('📧 Email changed:', email);
    }, [email]);

    useEffect(() => {
        console.log('🚀 Component mounted');
        return () => {
            console.log('🛑 Component unmounted');
        };
    }, []);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Your name"
                value={name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            />
            {users.find((user) => user === name) && <Message user={name} />}
            <input
                type="email"
                className="form-control mt-2"
                placeholder="Your email"
                value={email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
        </>
    );
}

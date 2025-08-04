import { Message } from "./Message";
import { useForm } from "../hooks/useForm";
export const FormWithCustomHooks = () => {
    const { formState, setFormState, name, email, password, resetForm } = useForm({
        name: 'Pako Díaz',
        email: 'pakodiaz@example.com',
        password: ''
    });

    const users = ['pakodiaz', 'john', 'jane'];

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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setFormState({ ...formState, password: e.target.value })}
            />
            <button className="btn btn-primary mt-2" onClick={resetForm}>Reset</button>
        </>
    );
}

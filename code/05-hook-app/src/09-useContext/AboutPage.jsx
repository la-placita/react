import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const AboutPage = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
            <h1>About Page</h1>
            {user ? <p>Welcome, {user.email}</p> : <p>Please log in to see your information.</p>}
        </div>
    );
}

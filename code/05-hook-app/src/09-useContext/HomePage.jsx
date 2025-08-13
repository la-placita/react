import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
            <h1>Home Page</h1>
            {user?.email ? (
                <p>Welcome back, {user.email}!</p>
            ) : (
                <NavLink to="/login">Please log in.</NavLink>
            )}
        </div>
    );
}

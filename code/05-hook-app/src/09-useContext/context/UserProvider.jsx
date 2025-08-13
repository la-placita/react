import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
    
    const [user, setUser ]= useState({});

    const passcheck = "password123";

    const data = {
        user,
        isLoggedIn: !!user,
        login: (email, password) => {
            if(password === passcheck) {
                setUser({ email, password });
            }
        },
        logout: () => {
            setUser({});
        }
    };

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

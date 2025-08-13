import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";



export const Navbar = () => {
    const { logout, user } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div className="navbar-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">useContext</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                            to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                            to="/about">About</NavLink>
                        </li>
                        {
                            !user?.email ?
                            (
                                <li className="nav-item">
                                    <NavLink 
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                    to="/login">Login</NavLink>
                                </li>
                            ):
                            (
                                <li className="nav-item">
                                    <NavLink to="/dashboard" onClick={(e)=>  e.preventDefault() || logout()} className="nav-link">
                                        Logout
                                    </NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

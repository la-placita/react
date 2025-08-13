import { Link, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
    return (
        <div>
            <h1>My page</h1>
            <hr />
            <Navbar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>
        </div>
    );
}

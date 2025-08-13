import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const { login, user } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors, isSubmitting }}  = useForm();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (user?.email) {
            navigate("/", { replace: true });
        }
    }, [user]);

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 500)); 
        login(data.email, data.password);
    }

    return (
        <div>
            <h1>Login Page {user?.email}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>
                        Email:
                        <input 
                            type="email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password" 
                            {...register("password", { required: "Password is required" })}
                        />
                    </label>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Login"}
                </button>
            </form>
        </div>
    );
}

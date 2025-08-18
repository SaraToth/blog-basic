import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // for redirecting

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch("http://localhost:3000/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                // Store token locally
                localStorage.setItem("token", data.token);

                // Navigate to protected route
                navigate("/blog");
            } else {
                alert(data.message || "Login failed");
            }
        } catch(err) {
            console.error(err);
        }
    };

    return(
        <>
            <Navbar/>
            <section>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-item">
                            <label htmlFor="email">Email:</label>
                            <input type="email" value={email} name="email" id="email" required onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password:</label>
                            <input type="password" value={password} name="password" id="password" required onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <span>Not a member? <Link to="/signup">Sign up</Link></span>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </section>
        </>
    )
};

export default Login;
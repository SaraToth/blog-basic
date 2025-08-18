import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const res = await fetch("http://localhost:3000/user/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, password, confirmPassword }),
            });

            const data = await res.json();
            if (res.ok) {
                navigate("/login");
            } else {
                alert(data.message || "Signup failed");
            }
        } catch(err) {
            console.error(err);
        };
    }
    return(
        <>
            <Navbar/>
            <section>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-item">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" name="firstName" required/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" id="lastName" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" required/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" required/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" id="confirmPassword" required/>
                        </div>

                        <span>Already a member? <Link to="/login">Login</Link></span>
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </section>
        </>
    )
};

export default Signup;
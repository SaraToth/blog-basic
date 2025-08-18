import { Link } from "react-router-dom";
import "./SignUp.css";
import Navbar from "../../components/Navbar";

const Signup = () => {
    return(
        <>
            <Navbar/>
            <section>
                <div className="form-container">
                    <form action="http://localhost:3000/user/signup" method="post">
                        <div className="form-item">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" required/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" name="lastName" id="lastName" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" required/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" required/>
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
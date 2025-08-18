import { Link } from "react-router-dom";
import "./Login.css";
import Navbar from "../../components/Navbar";

const Login = () => {
    return(
        <>
            <Navbar/>
            <section>
                <div className="form-container">
                    <form action="http://localhost:3000/user/login" method="post">
                        <div className="form-item">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password"/>
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
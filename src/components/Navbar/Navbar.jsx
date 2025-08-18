import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        navigate("/");
    }

    if (!token) {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Words</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        )
    }

    return(
        <nav>
            <ul>
                <li><Link to="/blog">Words</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link onClick={handleLogout}>Logout</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;
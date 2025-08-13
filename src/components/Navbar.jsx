import "./Navbar.css";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><a href="/">Words</a></li>
                <li><a href="/user/signup">Signup</a></li>
                <li><a href="/user/login">Login</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;
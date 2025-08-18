import Navbar from "../../components/Navbar/Navbar";
import "./BlogHome.css";
import { Link } from "react-router-dom";

const BlogHome = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        return (
            <>
                <Navbar/>
                <div className="blog-home">
                    <div className="blog-home-content">
                        <h1>Blog</h1>
                        <span><p>Sorry, you must <Link to="/login">Login</Link> to access the blog</p></span>
                        <span><p>Not a member? <Link to="/signup">Sign up</Link></p></span>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Navbar/>
            <div className="blog-home">
                <div className="blog-home-content">
                    <h1>Blog</h1>
                    <p>This is the blog home</p>
                </div>
            </div>

        </>
    )
};

export default BlogHome;
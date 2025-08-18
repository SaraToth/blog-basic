import Navbar from "../../components/Navbar/Navbar";
import "./BlogHome.css";

const BlogHome = () => {
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
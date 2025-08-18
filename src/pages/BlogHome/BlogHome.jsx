import Navbar from "../../components/Navbar/Navbar";
import "./BlogHome.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogIcon from "../../components/BlogIcon/BlogIcon";

const BlogHome = () => {
    const token = localStorage.getItem("token");
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        if (!token) return;

        const getPosts = async() => {
            try {
                const res = await fetch("http://localhost:3000/blog", {
                    method: "GET",
                    headers: { Authorization: `Bearer ${token}`, }
                });

                if (!res.ok) throw new Error("Failed to fetch posts");
                const data = await res.json();

                setPosts(data);

            } catch (err) {
                console.error(err);
            }
        };

        getPosts();

    }, [token]); // Rerun if token changes

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
                        {posts.length > 0 ? (
                            <div className="blog-grid-container">
                                {posts.map((post) => {
                                    return <BlogIcon key={post.id} title={post.title} />
                                })}
                            </div>
                        ) : (
                            <p>Sorry, no posts yet!</p>
                        )}
                </div>
            </div>

        </>
    )
};

export default BlogHome;

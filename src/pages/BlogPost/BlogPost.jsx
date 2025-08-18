import "./BlogPost.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const BlogPost = () => {
    const { postSlug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const res = await fetch(`http://localhost:3000/blog/${postSlug}`, {
                    method: "GET",
                    headers: { Authorization: `Bearer ${token}`},
                });

                const data = await res.json();
                setPost(data); // set the post
            } catch (err) {
                console.error(err);
            }
        };

        fetchPost();
    }, [postSlug]);

    if (!post) return <p>Loading...</p>

    return(
        <>
            <Navbar/>
            <div className="blog-post">
                <div className="blog-post-content">
                    <h1>{post.title}</h1>
                    <p>{post.updatedAt || post.createdAt}</p>
                    <p>{post.content}</p>
                    <Link to="/">Back</Link>
                </div>
            </div>
        </>
    )
};

export default BlogPost;
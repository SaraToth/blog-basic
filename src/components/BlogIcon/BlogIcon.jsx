import "./BlogIcon.css";

const BlogIcon = ({ title }) => {
    return (
        <div className="blog-icon">
            <div className="blog-img"></div>
            <h2>{title}</h2>
        </div>
        
    )
};

export default BlogIcon;
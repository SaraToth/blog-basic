import "./LandingPage.css"
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LandingPage = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    // If user is logged in redirect to blog
    useEffect(() => {
        if (token) {
            navigate("/blog");
        }
    }, [token, navigate])

    // Render nothing if token exists
    if (token) return null;

    return (
        <>
            <div className="landing-page">
                <div className="landing-page-content">
                <h1>End the Digital <br/>Clutter</h1>
                <p>Save, Share, and organize with Filer</p>
                <Link to="signup" className="signup">Sign up</Link>
                </div>
            </div>
        </>
    )
};

export default LandingPage;
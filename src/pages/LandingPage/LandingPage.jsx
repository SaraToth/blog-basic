import "./LandingPage.css"
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
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
}

export default LandingPage;
import "./LandingPage.css"
import Navbar from "../../Components/Navbar";

const LandingPage = () => {
    return(
        <>
            <div className="landing-page">
                <div className="landing-page-content">
                <Navbar/>
                <h1>End the Digital <br/>Clutter</h1>
                <p>Save, Share, and organize with Filer</p>
                <a href="/user/signup" className="signup">Sign up</a>
                </div>
            </div>
        </>

    )
}

export default LandingPage;
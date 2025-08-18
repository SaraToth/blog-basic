import App from "../App";
import LandingPage from "../pages/LandingPage/LandingPage";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/SignUp";
import BlogHome from "../pages/BlogHome/BlogHome";
import BlogPost from "../pages/BlogPost/BlogPost";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            { index: true, element: <LandingPage/>},
            { path: "about", element: <About/>}
        ]
    },

    { path: "/login", element: <Login/> },
    { path: "/signup", element: <Signup/> },
    { path: "/blog", element: <BlogHome/> },
    { path: "/blog/:postSlug", element: <BlogPost/> }
];

export default routes;
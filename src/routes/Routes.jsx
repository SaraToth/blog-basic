import App from "../App";
import LandingPage from "../pages/LandingPage/LandingPage";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/SignUp/SignUp";
import BlogHome from "../pages/BlogHome";

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
    { path: "/blog", element: <BlogHome/> }
];

export default routes;
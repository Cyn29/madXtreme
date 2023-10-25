import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/contact/Contact.jsx";
import Login from "../pages/login/Login";
import Register from '../pages/register/Register';
import AboutUsPage from "../pages/AboutUs";
import DetailedCardPage from "../pages/DetailedCard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/activities",
                element: <DetailedCardPage/>,
            },
            {
                path: "/aboutUs",
                element: <AboutUsPage />
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/register",
                element: <Register />
            }
            
        ],
    },
]);

export default router;

import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import DetailedCard from "../pages/DetailedCard";
import Login from "../pages/Login";
import Register from '../pages/register/Register';
import AboutUsPage from "../pages/AboutUs";

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
                path: "/activity",
                element: <DetailedCard />
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

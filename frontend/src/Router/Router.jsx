import Root from "./Root"
import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import DetailedCard from "../pages/DetailedCard"
import AboutUs from "../pages/AboutUs"
import Login from "../pages/Login"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/sports",
                element: <DetailedCard />
            },
            {
                path: "/aboutUs",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])

export default router
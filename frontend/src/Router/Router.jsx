import Root from "./Root"
import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import DetailedCard from "../pages/DetailedCard"
import AboutUs from "../pages/AboutUs"

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
                path: "/sports",
                element: <DetailedCard />
            },
            {
                path: "/aboutus",
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
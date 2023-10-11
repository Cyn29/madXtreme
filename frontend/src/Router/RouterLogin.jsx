import RootLogin from "./RootLogin"
import {createBrowserRouter} from "react-router-dom"
import Login from "../pages/Login"

const routerLogin = createBrowserRouter([
    { path: "/",
    element: <RootLogin />,
    children: [
        {
        path: "/login",
        element: <Login />
        }
    ]
    }
])

export default routerLogin
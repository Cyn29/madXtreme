import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact.jsx";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AboutUsPage from "../pages/aboutus/AboutUs";
import Climbing from "../pages/activities/Climbing";
import Hiking from "../pages/activities/Hiking";
import MountainBike from "../pages/activities/MountainBikePage";
import Boulder from "../pages/activities/Boulder";
import Cannoying from "../pages/activities/Cannoying";
import Kayak from "../pages/activities/Kayak"

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
        path: "/climbing",
        element: <Climbing />,
      },
      {
        path: "/hiking",
        element: <Hiking />,
      },
      {
        path: "/mountainbike",
        element: <MountainBike />,
      },
      {
        path: "/cannoying",
        element: <Cannoying />,
      },
      {
        path: "/boulder",
        element: <Boulder />,
      },
      {
        path: "/kayak",
        element: <Kayak />,
      },
      {
        path: "/aboutus",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

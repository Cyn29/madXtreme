import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Root() {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register") {
    return <Outlet />;
  } else {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Root;

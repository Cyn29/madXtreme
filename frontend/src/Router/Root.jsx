import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function ConditionalHeaderAndFooter() {
    const location = useLocation();
    const showHeaderAndFooter = location.pathname !== "/login";

    if (showHeaderAndFooter) {
        return (
            <>
                <Header />
                <Outlet/>
                <Footer />
            </>
        );
    }

    return null;
}

function Root() {
    return (
        <>
            <ConditionalHeaderAndFooter />
            <Outlet />
        </>
    );
}

export default Root;

import logotype from "../../assets/logotype/logotype.png"
import login from "../../assets/icons/login.png";
import './Navbar.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav aria-label="Navbar" className="navbar-container">
            <a href="/"><img src={logotype} aria-label="logotype" className="logotype-img" alt="Image of logotype"/></a>
            <main className="links-container">
                <ul className="ul-container">
                        <a href="/" className="navbar-li" aria-label="home">Inicio</a>
                        <Link to="/aboutus" className="navbar-li" aria-label="aboutus">Nosotros</Link>
                        <Link to="/contact" className="navbar-li" aria-label="contact">Contacto</Link>
                        <Link to="/login"><img className="login-icon" aria-label="login" height="70rem" src={login} alt="Login icon"/></Link>
            </ul>
            </main>
        </nav>
    );
}

export default Header



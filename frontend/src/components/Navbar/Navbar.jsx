import logotype from "../../assets/logotype.png"
import login from "../../assets/icons/login.png";
import './Navbar.css'

function Header() {
    return (
        <nav aria-label="Navbar" className="navbar-container">
            <a href="/"><img src={logotype} aria-label="logotype" className="logotype-img" alt="Image of logotype"/></a>
            <main className="links-container">
                <ul className="ul-container">
                        <a className="navbar-li" aria-label="Inicio" href="/">Inicio</a>
                        <a className="navbar-li" aria-label="Nosotros" href="/aboutus">Nosotros</a>
                        <a className="navbar-li" aria-label="Contacto" href="/contact">Contacto</a>
                        <a href="/login"><img className="login-icon" aria-label="login-icon" height="70rem" src={login} alt="Login icon"/></a>
            </ul>
            </main>
        </nav>
    );
}

export default Header



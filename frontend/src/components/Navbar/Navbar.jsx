import React, { useState } from "react";
import { Link } from "react-router-dom";
import logotype from "../../assets/logotype/logotype.png";
import login from "../../assets/icons/login.png";
import "./Navbar.css";
function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav aria-label="Navbar" className="navbar-container">
      <a href="/">
        <img
          src={logotype}
          aria-label="logotype"
          className="logotype-img"
          alt="Image of logotype"
        />
      </a>
      <div className="mobile-menu">
        <button
          onClick={toggleDropdown}
          className="mobile-menu-button"
          aria-label="menu"
        >
          ☰
        </button>
        {showDropdown && (
          <ul className="mobile-dropdown">
            <li>
              <a href="/" aria-label="home">
                Inicio
              </a>
            </li>
            <li>
              <Link to="/aboutus" aria-label="aboutus">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contact" aria-label="contact">
                Contacto
              </Link>
            </li>
            <Link to="/login">
              <img
                className="login-icon"
                aria-label="login"
                height="70rem"
                src={login}
                alt="Login icon"
              />
            </Link>
          </ul>
        )}
      </div>
      <main className="links-container">
        <ul className="ul-container">
          <a href="/" className="navbar-li" aria-label="home">
            Inicio
          </a>
          <a href="/aboutus" className="navbar-li" aria-label="aboutus">
            Nosotros
          </a>
          <a href="/contact" className="navbar-li" aria-label="contact">
            Contacto
          </a>
          <a href="/login">
            <img
              className="login-icon"
              aria-label="login"
              height="70rem"
              src={login}
              alt="Login icon"
            />
          </a>
        </ul>
    </main>
    </nav>
  );
}
export default Header;

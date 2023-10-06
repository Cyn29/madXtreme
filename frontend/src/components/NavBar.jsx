import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
    <nav>
        <p>
            <Link to="/">Inicio</Link>
        </p>
        <p>
            <Link to="/sports">Deportes</Link>
        </p>
        <p>
        <Link to="/aboutus">Nosotros</Link>
        </p>
        <p>
            <Link to="/contact">Contacto</Link>
        </p>
    </nav>
    );
}

export default NavBar;
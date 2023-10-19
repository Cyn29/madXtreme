import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logotype from "../../assets/logotype.png"
import login from "../../assets/icons/login.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar aria-label="Navbar" sticky="top" className="bg-white" expand="md" collapseOnSelect>
            <Container>
                <Nav.Link as={Link} to="/"><Image aria-label="logotype" src={logotype} width="65%" height="20%" alt="Image of logotype" fluid/></Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ml-auto">
                    <Nav className="fw-bold">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/activities">Actividades</Nav.Link>
                        <Nav.Link as={Link} to="/aboutUs">Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                    </Nav>
                    <Nav.Link as={Link} to="/login"><Image aria-label="login-icon" className="d-none d-sm-none d-md-block" height="70rem" src={login} alt="Login icon"/></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header



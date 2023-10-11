import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logotype from "../../assets/logotype.png";
import login from "../../assets/icons/login.png";

function Header() {
    return (
        <Navbar sticky="top" className="bg-white" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home"><Image src={logotype} width="65%" height="20%" alt="Image of logotype" fluid/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ml-auto">
                    <Nav className="fw-bold">
                        <Nav.Link to="/">Inicio</Nav.Link>
                        <Nav.Link to="/sports">Deportes</Nav.Link>
                        <Nav.Link to="/aboutUs">Nosotros</Nav.Link>
                        <Nav.Link to="/contact">Contacto</Nav.Link>
                    </Nav>
                    <Nav.Link to="/login"><Image className="d-none d-sm-none d-md-block" height="70rem" src={login} alt="Login icon"/></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header



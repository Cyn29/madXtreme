import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logotype from "../../assets/logotype.png"
import login from "../../assets/icons/login.png";

function Header() {
    return (
        <Navbar sticky="top" className="bg-white" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home"><Image src={logotype} width="65%" height="20%" alt="Image of logotype" fluid/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ml-auto">
                    <Nav className="fw-bold">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#actividades">Actividades</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <Nav.Link href="#login"><Image className="d-none d-sm-none d-md-block" height="70rem" src={login} alt="Login icon"/></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header

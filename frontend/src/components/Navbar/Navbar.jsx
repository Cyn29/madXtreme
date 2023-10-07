import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logotype from "../../assets/logotype.png"
import loginicon from "../../assets/loginicon.png";

function Header() {
    return (
        <Navbar expand="lg" sticky="top" className="bg-white">
            <Container>
                <Navbar.Brand href="#home"><Image src={logotype} alt="Image of logotype" fluid/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ml-auto">
                    <Nav className="fw-bold">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#actividades">Actividades</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <Nav.Link href="#login"><Image className="d-none d-sm-none d-md-block" height="70rem" src={loginicon} alt="Login icon"/></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header

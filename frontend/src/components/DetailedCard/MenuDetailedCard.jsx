import Nav from 'react-bootstrap/Nav';

function MenuDetailedCard() {
    return (
        <Nav className="justify-content-around align-items-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/DetailsCard/Description" disabled>Descripción</Nav.Link>
            </Nav.Item>
              |  
            <Nav.Item>
                <Nav.Link href="/DetailsCard/Price">Precio</Nav.Link>
            </Nav.Item>
              |  
            <Nav.Item>
                <Nav.Link href="/DetailsCard/Details">Detalles</Nav.Link>
            </Nav.Item>
              |  
            <Nav.Item>
                <Nav.Link href="/DetailsCard/Opinions">Opiniones</Nav.Link>
            </Nav.Item>
              |  
            <Nav.Item>
                <Nav.Link href="/DetailsCard/MeetingPoint">Punto de encuentro</Nav.Link>
            </Nav.Item>
              |  
            <Nav.Item>
                <Nav.Link href="/DetailsCard/Group">Grupo</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default MenuDetailedCard;
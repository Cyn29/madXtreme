import Nav from 'react-bootstrap/Nav';

function MenuDetailedCard() {
    return (
        <Nav className="justify-content-around align-items-center mt-2 mb-5" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/activity/Description" disabled>Descripción</Nav.Link>
            </Nav.Item>
              |  
            <Nav.Item>
                <Nav.Link href="/activity/Price">Precio</Nav.Link>
            </Nav.Item>
              |  
            <Nav.Item>
                <Nav.Link href="/activity/Details">Detalles</Nav.Link>
            </Nav.Item>
              |  
            <Nav.Item>
                <Nav.Link href="/activity/Opinions">Opiniones</Nav.Link>
            </Nav.Item>
              |  
            <Nav.Item>
                <Nav.Link href="/activity/MeetingPoint">Punto de encuentro</Nav.Link>
            </Nav.Item>
              |  
            <Nav.Item>
                <Nav.Link href="/activity/Group">Grupo</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default MenuDetailedCard;
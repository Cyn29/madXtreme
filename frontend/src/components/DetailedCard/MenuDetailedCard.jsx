import React from 'react';
import Nav from 'react-bootstrap/Nav';

function MenuDetailedCard() {
    return (
        <Nav className="justify-content-around align-items-center mt-2 mb-5" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="#description" disabled>Descripción</Nav.Link>
            </Nav.Item>
            |  

            <Nav.Item>
                <Nav.Link href="#price">Precio</Nav.Link>
            </Nav.Item>
            |  

            <Nav.Item>
                <Nav.Link href="#details">Detalles</Nav.Link>
            </Nav.Item>
            |  
        
            <Nav.Item>
                <Nav.Link href="#opinions">Opiniones</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default MenuDetailedCard;

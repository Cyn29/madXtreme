import React from "react";
import Card from "react-bootstrap/Card";
import './AboutUs.css';

function AboutUs({ image, name, role, description }) {
    return (
        <main className="d-inline-flex mb-5">
            <Card className="Card"> 
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{role}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </main>
    );
}


export default AboutUs;


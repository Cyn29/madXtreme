import React from "react";
import Card from "react-bootstrap/Card";
import './AboutUs.css';
function AboutUs({ image, name, role, description }) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="Card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{role}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
export default AboutUs;
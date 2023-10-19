import Card from "react-bootstrap/Card";
import "./AboutUs.css"
// eslint-disable-next-line react/prop-types
function AboutUs({ image, name, role, description }) {
    return (
        <main className="d-inline-flex mb-5">
            <Card
                style={{
                    width: "25rem",
                    margin: "2rem",
                    marginLeft: "4rem",
                    borderBottom: "#D10505 0.5rem solid ",
                }}>
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

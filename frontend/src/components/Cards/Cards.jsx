/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ cardImage, title, price, button, opinions }) {
    return (
        <main className="d-inline-flex ">
            <Card
                className="mb-5"
                style={{
                    width: "20rem",
                    marginLeft: "3rem",
                    borderBottom: "#D10505 0.5rem solid ",
                }}>
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <section className="d-flex justify-content-between align-items-center">
                        <Card.Title
                            style={{ fontSize: "2rem", color: "#D10505" }}
                            className="f-25">
                            {" "}
                            {price}
                        </Card.Title>
                        <Button
                            style={{
                                backgroundColor: "#D10505",
                                border: "none",
                            }}
                            className="rounded-pill">
                            {" "}
                            {button}{" "}
                        </Button>
                    </section>
                    <Card.Text>{opinions}</Card.Text>
                </Card.Body>
            </Card>
        </main>
    );
}

export default Cards;

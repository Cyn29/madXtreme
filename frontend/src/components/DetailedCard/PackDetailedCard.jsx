import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PackDetailedCard({ packImage, title, price, button, stock, date}) {
    return (
        <section className="d-inline-flex">
            <Card
                className="mb-4"
                style={{
                    width: "17rem",
                    margin: "0rem",
                    borderBottom: "#D10505 0.5rem solid ",
                }}>
                <Card.Img variant="top" src={packImage} />
                <Card.Body className="d-flex flex-row">
                    <div className="d-flex flex-column w-75">
                        <Card.Title>{date}</Card.Title>
                        {/* <Card.Title>{title}</Card.Title> */}
                        {/* <Card.Text>{date}</Card.Text> */}
                        <Card.Text>¡Quedan {stock} plazas!</Card.Text>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Title
                            style={{ fontSize: "1.5rem", color: "#D10505" }}
                            className="f-25">
                            {""}
                            {price}{"€"}
                        </Card.Title>
                        <Card.Img src={button} style={{width:"2rem"}} />
                    </div>
                </Card.Body>
            </Card>
        </section>
    );
}

export default PackDetailedCard;

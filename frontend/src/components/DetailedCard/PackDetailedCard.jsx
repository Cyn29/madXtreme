import Card from "react-bootstrap/Card";
import Counter from "./Counter";

function PackDetailedCard({packImage, price, button, stock1, date1, stock2, date2, handleCountChange1}) 
{
  return (
    <section className="d-inline-flex">
      <Card
        className="mb-4"
        style={{
          width: "17rem",
          margin: "0rem",
          borderBottom: "#D10505 0.5rem solid ",
        }}
      >
        <Card.Img variant="top" src={packImage} />
        <Card.Body className="d-flex flex-row">
          <div className="d-flex flex-column w-75">
            <Card.Title>{date1}</Card.Title>
            <Counter stock={stock1} onCountChange={handleCountChange1} />
            <Card.Text>¡Quedan {stock1} plazas!</Card.Text>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title
              style={{ fontSize: "1.5rem", color: "#D10505" }}
              className="f-25"
            >
              {""}
              {price}
              {"€"}
            </Card.Title>
            <Card.Img src={button} style={{ width: "2rem" }} />
          </div>
        </Card.Body>
      </Card>

      <Card
        className="mb-4"
        style={{
          width: "17rem",
          margin: "0rem",
          borderBottom: "#D10505 0.5rem solid ",
        }}
      >
        <Card.Img variant="top" src={packImage} />
        <Card.Body className="d-flex flex-row">
          <div className="d-flex flex-column w-75">
            <Card.Title>{date2}</Card.Title>
            <Counter stock={stock1} onCountChange={handleCountChange1} />
            <Card.Text>¡Quedan {stock2} plazas!</Card.Text>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title
              style={{ fontSize: "1.5rem", color: "#D10505" }}
              className="f-25"
            >
              {""}
              {price}
              {"€"}
            </Card.Title>
            <Card.Img src={button} style={{ width: "2rem" }} />
          </div>
        </Card.Body>
      </Card>
    </section>
  );
}

export default PackDetailedCard;

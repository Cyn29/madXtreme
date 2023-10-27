import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "./Card.css";

function Cards({ activity_image, bookingDate, price, stock, onReserve }) {
  return (
    <main className="mainCard mt-4">
      <Card className="sectionCard" aria-label="Card">
        <Card.Img variant="top" src={activity_image} alt="Activity Image" />
        <Card.Body className="CardBody">
          <h5>
            <Card.Text>{bookingDate}</Card.Text>
          </h5>
          <section className="priceBtnContainer">
            <Card.Text className="text-price">{price} €</Card.Text>
            <button className="detail-btn" onClick={onReserve}>
              Reservar
            </button>
          </section>
          <Card.Text>Plazas disponibles: {stock}</Card.Text>
        </Card.Body>
      </Card>
    </main>
  );
}
Cards.propTypes = {
  activity_image: PropTypes.string.isRequired,
  bookingDate: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  onReserve: PropTypes.func.isRequired,
};
export default Cards;

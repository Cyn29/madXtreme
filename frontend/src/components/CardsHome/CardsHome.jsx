import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "./CardsHome.css";
function Cards({ activity_image, price, act_description, opinion, link }) {
  const handleClickBtn = () => {
    window.location.href = link;
  };
  return (
    <Card className="card-section" aria-label="Card">
      <Card.Img variant="top" src={activity_image} alt="Activity Image" />
      <Card.Body className="card-body">
        <h5>
          <Card.Text>{act_description}</Card.Text>
        </h5>
        <div className="price-btn-container">
          <Card.Text className="text-price">{price} €</Card.Text>
          <button className="detail-button" onClick={handleClickBtn}>
            Ver más
          </button>
        </div>
        <Card.Text>{opinion}</Card.Text>
      </Card.Body>
    </Card>
  );
}
Cards.propTypes = {
  activity_image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  act_description: PropTypes.string.isRequired,
  opinion: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default Cards;

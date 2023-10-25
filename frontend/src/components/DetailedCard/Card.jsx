import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
function Cards({ activity_image, bookingDate , price, stock}) {
  return (
    <main className="main">
      <Card className="section" aria-label="Card">
        <Card.Img variant="top" src={activity_image} alt="Activity Image" />
        <Card.Body className='CardBody'>
          <h5><Card.Text>{bookingDate}</Card.Text></h5>
          <section className="d-flex">
            <Card.Text className='text-price'>{price} €</Card.Text>
            <button className="detail-button">
              Reservar actividad
            </button>
          </section>
          <Card.Text>{stock}</Card.Text>
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
};
export default Cards;
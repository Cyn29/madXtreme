import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import "./Cards.css"
function Cards({ image, price, title, button, opinion}) {
  return (
    <main className="d-inline-flex ">
      <Card className="section" aria-label="Card">
        <Card.Img variant="top" src={activity_image} alt="Activity Image" /> 
        <Card.Body>
          <h4><Card.Text>{title}</Card.Text></h4>
          <section className="d-flex">
            <Card.Text className='text-price'>{price}€</Card.Text>
            <button className="detail-button">
              {button}
            </button>
          </section>
          <Card.Text>{opinion}</Card.Text>
        </Card.Body>
      </Card>
    </main>
  ); 
}

Cards.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  opinion: PropTypes.string.isRequired,
};

export default Cards;
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Cards({ activity_image, title, price, act_description, button, opinion, stock }) {
  return (
    <main className="d-inline-flex">
      <Card className="mb-5" style={{ width: '23rem', marginLeft: '2rem', borderBottom: '#D10505 0.5rem solid' }}>
        <Card.Img variant="top" src={activity_image} alt="Activity Image" /> 
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{act_description}</Card.Text>
          <Card.Text>{price} €</Card.Text>
          <section className="d-flex justify-content-between align-items-center">
            <Button style={{ backgroundColor: '#D10505', border: 'none' }} className="rounded-pill">
              {button}
            </Button>
          </section>
          <Card.Text>{opinion}</Card.Text>
        </Card.Body>
      </Card>
    </main>
  );
}

Cards.propTypes = {
  activity_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  act_description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  opinion: PropTypes.string.isRequired,
};

export default Cards;

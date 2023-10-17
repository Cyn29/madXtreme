import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cards({ title, price, act_description, button, opinions, stock }) {
  return (
    <main className="d-inline-flex">
      <Card className="mb-5" style={{ width: '23rem', marginLeft: '2rem', borderBottom: '#D10505 0.5rem solid' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{act_description}</Card.Text>
          <Card.Text>{price} €</Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
          <section className="d-flex justify-content-between align-items-center">
            <Button style={{ backgroundColor: '#D10505', border: 'none' }} className="rounded-pill">
              {button}
            </Button>
          <Card.Text>{opinions}</Card.Text>
          </section>
        </Card.Body>
      </Card>
    </main>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  act_description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  opinions: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};

export default Cards;

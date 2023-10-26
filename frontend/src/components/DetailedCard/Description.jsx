import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Description.css'
// eslint-disable-next-line react/prop-types
function Description({ title, description, text1 , text2, text3, duration, opinion }) {
  return (
    <Card className="container mt-4">
      <Card.Body>
        <Card.Title className='climbing'>{title}</Card.Title>
        <Card.Text >
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item className='text'>{text1}</ListGroup.Item>
        <ListGroup.Item className='text'>{text2}</ListGroup.Item>
        <ListGroup.Item className='text'>{text3}</ListGroup.Item>
        <ListGroup.Item className='text'>{duration}</ListGroup.Item>
        <ListGroup.Item>{opinion}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
export default Description;
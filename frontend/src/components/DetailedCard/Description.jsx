import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Description({ title, description, text1 , text2, text3, duration, opinion }) {
  return (
    <Card className="container mt-4" style={{ width: '84vw', display:'flex', justifyContent:'center'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>{text1}</ListGroup.Item>
        <ListGroup.Item>{text2}</ListGroup.Item>
        <ListGroup.Item>{text3}</ListGroup.Item>
        <ListGroup.Item>{duration}</ListGroup.Item>
        <ListGroup.Item>{opinion}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
export default Description;
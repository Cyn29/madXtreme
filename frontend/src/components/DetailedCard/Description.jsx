import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Description.css";
// eslint-disable-next-line react/prop-types
function Description({
  title,
  description,
  text1,
  text2,
  text3,
  duration,
  opinion,
}) {
  return (
    <Card className="description-container mt-4">
      <ListGroup variant="flush">
        <ListGroup.Item><h2>{title}</h2></ListGroup.Item>
        <ListGroup.Item>{description}</ListGroup.Item>
        <ListGroup.Item className="text">{text1}</ListGroup.Item>
        <ListGroup.Item className="text">{text2}</ListGroup.Item>
        <ListGroup.Item className="text">{text3}</ListGroup.Item>
        <ListGroup.Item className="text">{duration}</ListGroup.Item>
        <ListGroup.Item>{opinion}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
export default Description;

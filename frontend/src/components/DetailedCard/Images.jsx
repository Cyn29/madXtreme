import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Image1 from '../../assets/Images/Escalada.png'
import Image2 from '../../assets/Images/Escalada2.png'
import Image3 from '../../assets/Images/Escalada3.png'

function Images() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Image1} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Image2} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Image3} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Images;
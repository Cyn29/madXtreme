/* eslint-disable react/prop-types */
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Images({image1, image2, image3}) {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={image1} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image2} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image3} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Images;
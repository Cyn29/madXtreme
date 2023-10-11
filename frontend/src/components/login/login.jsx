import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

function Login() {
    return (
        <Container className="Group12 mt-5">
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={6} lg={4}>
                    <Image src="/frontend/src/assets/logotype.png" fluid />
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4}>
                    <Form.Group>
                        <Form.Label style={{ fontFamily: 'Quicksand', fontWeight: '500', fontSize: 20 }}>Email</Form.Label>
                        <Form.Control style={{ background: 'rgba(255, 232.69, 232.69, 0.70)', borderBottom: '2px #D10505 solid', borderRadius: 10 }} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={6} lg={4}>
                    <Form.Group>
                        <Form.Label style={{ fontFamily: 'Quicksand', fontWeight: '500', fontSize: 20 }}>Contraseña</Form.Label>
                        <Form.Control type="password" style={{ background: 'rgba(255, 232.69, 232.69, 0.70)', borderBottom: '2px #D10505 solid', borderRadius: 10 }} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4} className="text-center">
                    <Button variant="link" style={{ fontFamily: 'Quicksand', fontWeight: '500', fontSize: 20, color: 'black' }}>Registrate</Button>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4} className="text-center">
                    <span style={{ fontFamily: 'Quicksand', fontWeight: '500', fontSize: 16 }}>¿Todavía no tienes una cuenta?</span>
                </Col>
            </Row>
            <Row className="justify-content-center mb-5">
                <Col xs={12} md={6} lg={4} className="text-center">
                    <Button variant="link" style={{ fontFamily: 'Quicksand', fontWeight: '700', fontSize: 16, color: 'black' }}>Register</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} style={{ background: '#D10505', height: 180 }}></Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6} lg={4} className="text-center">
                    <Image src= "frontend/src/assets/Vector 10.png" alt="Vector Image" fluid />
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
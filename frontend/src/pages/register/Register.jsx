import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import logotype from '../../assets/logotype.png';
import './Register.css';

function Register() {
    return (
        <Container className="register">
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={6} lg={4}>
                    <Image src={logotype} fluid />
                </Col>
            </Row>   
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4}>
                    <Form.Group>
                        <h5>Nombre</h5>
                        <Form.Control />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4}>
                    <Form.Group>
                        <h5>Apellidos</h5>
                        <Form.Control />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4}>
                    <Form.Group>
                        <h5>Email</h5>
                        <Form.Control type="email" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4}>
                    <Form.Group>
                        <h5>Contraseña</h5>
                        <Form.Control type="password" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4}>
                    <Form.Group>
                        <h5>Confirmar Contraseña</h5>
                        <Form.Control type="password" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4} className="text-center">
                    <Button variant="primary" className="Button1 mt-3">
                        Registrarse
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col xs={12} md={6} lg={4} className="text-center">
                    <p>¿Tienes una cuenta?</p>
                    <a className="login-link" href="/login">Iniciar sesión</a>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;

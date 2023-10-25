import { Container, Row, Col, Form, Button, Image, Alert } from 'react-bootstrap';
import logotype from '../../assets/logotype.png';
import './Register.css';
import { useState } from 'react';
import { registrationService } from '../../Services/RegisterServices';

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false)

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = registrationService.postRegistration()
            if (response.ok) {
                const data = await response.json();
                console.log('Registration status:', data);
                setShowSuccessAlert(true);
                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 10000);
            } else {
                console.error('Registration error');
                setShowErrorAlert(true)
                setTimeout(() => {
                    setShowErrorAlert(false);
                }, 10000);
            }
        } catch (error) {
            console.error('Failed request:', error);
        }
    };

    return (
        <Form onSubmit={handleRegisterSubmit}>
            <Container className="register">
                <Row className="justify-content-center mb-4">
                    <Col xs={12} md={6} lg={4}>
                        <Image name="logotype" src={logotype} fluid />
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group>
                            <h5>Nombre y apellidos</h5>
                            <Form.Control name="fullname" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group>
                            <h5>Email</h5>
                            <Form.Control type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group>
                            <h5>Contraseña</h5>
                            <Form.Control type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={user_password} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <Button type="submit" variant="primary" className="Button1 mt-3">
                            Registrarse
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <Alert show={showSuccessAlert} variant="success">
                            Registro exitoso. ¡Bienvenido!
                        </Alert>
                        <Alert show={showErrorAlert} variant="danger">
                            Ha habido un error con su registro.
                        </Alert>
                        <p>¿Tienes una cuenta?</p>
                        <a className="login-link" href="/login">
                            Iniciar sesión
                        </a>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default Register;

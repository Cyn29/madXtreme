import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import logotype from '../../assets/logotype.png';
import './Register.css';
import { useState } from 'react';

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, user_password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registration success:', data);
            } else {
                console.error('Registration error');
            }
        } catch (error) {
            console.error('Failed request:', error);
        }
    };

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
        </Container>
    );
}

export default Register;

import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import logotype from '../../assets/logotype.png';
import './Register.css';
import { useState } from 'react';

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleFullNameChange = (e) => {
        setFullName(e.target.value)
    }
    
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({fullName, email, user_password}),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registro exitoso:', data);
            } else {
                console.error('Error en el registro');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <Form onSubmit={handleRegisterSubmit}>
            <Container className="register">
                <Row className="justify-content-center mb-4">
                    <Col xs={12} md={6} lg={4}>
                        <Image src={logotype} fluid />
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group>
                            <h5>Nombre y apellidos</h5>
                            <Form.Control onChange={handleFullNameChange} value={fullName}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group>
                            <h5>Email</h5>
                            <Form.Control type="email" onChange={handleEmailChange} value={email}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group>
                            <h5>Contraseña</h5>
                            <Form.Control type="password" onChange={handlePasswordChange} value={user_password}/>
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
            </Container>
        </Form>
    );
}

export default Register;

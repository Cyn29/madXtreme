import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import logotype from '../assets/logotype.png'
import { useState } from 'react';
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log("Email:", email)
        console.log("Contraseña", password)
    }
    return (
        <Container className="group-12" style={{marginTop: "9rem"}}>
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={6} lg={4}>
                    <Image src= {logotype} fluid />
                </Col>
            </Row>   
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4}>
                    <Form.Group>
                        <h5>Email</h5>
                        <Form.Control onChange={handleEmailChange} style={{ background: 'rgba(255, 232.69, 232.69, 0.70)', borderBottom: '2px #D10505 solid', borderRadius: 10 }} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={6} lg={4}>
                    <Form.Group>
                        <h5>Contraseña</h5>
                        <Form.Control onChange={handlePasswordChange} type="password" style={{ background: 'rgba(255, 232.69, 232.69, 0.70)', borderBottom: '2px #D10505 solid', borderRadius: 10 }} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4} className="text-center">
                    <Button onClick={handleLoginSubmit} variant="primary" className="button1 mt-3" style={{ border: "none", width: 130, height: 36, background: '#D10505', borderRadius: 50, color: 'white' }}>
                        Acceder
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col xs={12} md={6} lg={4} className="text-center">
                    <h6 className="mt-3">¿Todavía no tienes una cuenta?</h6>
                </Col>
            </Row>
            <Row className="justify-content-center mb-5">
                <Col xs={12} md={6} lg={4} className="text-center">
                    <Button variant="link" style={{color: "black"}}>Regístrate</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;

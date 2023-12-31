import { useState } from "react";
import { Container, Row, Col, Form, Button, Image, Alert } from "react-bootstrap";
import { loginService } from "../../services/LoginService"; 
import logotype from "../../assets/logotype/logotype.png";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        
        const result = await loginService.postLogin(email, user_password);

        if (result.success) {
            const data = result.data;
            if (data.message === "Welcome back!") {
                window.location.href = "/";
            } else {
                setShowErrorAlert(true);
                setShowErrorAlert("Email or password does not match");
                setTimeout(() => {
                    setShowErrorAlert(false);
                }, 3000);
            }
    }
}

    return (
        <Form onSubmit={handleLoginSubmit}>
            <Container className="group-12" style={{ marginTop: "9rem" }}>
                <Row className="justify-content-center mb-4">
                    <Col xs={12} md={6} lg={4}>
                        <Link to="/"><Image src={logotype} fluid /></Link>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group>
                            <h5>Email</h5>
                            <Form.Control
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                style={{
                                    background: "rgba(255, 232.69, 232.69, 0.70)",
                                    borderBottom: "2px #D10505 solid",
                                    borderRadius: 10,
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group>
                            <h5>Contraseña</h5>
                            <Form.Control
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                value={user_password}
                                style={{
                                    background: "rgba(255, 232.69, 232.69, 0.70)",
                                    borderBottom: "2px #D10505 solid",
                                    borderRadius: 10,
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <Button
                            type="submit"
                            variant="primary"
                            className="button1 mt-3"
                            style={{
                                border: "none",
                                width: 130,
                                height: 36,
                                background: "#D10505",
                                borderRadius: 50,
                                color: "white",
                            }}>
                            Acceder
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <Alert show={showErrorAlert} variant="danger">
                            Usuario no registrado
                        </Alert>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <h6 className="mt-3">¿Todavía no tienes una cuenta?</h6>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <Button
                            as={Link}
                            to="/register"
                            variant="link"
                            style={{ color: "black" }}>
                            Regístrate
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default Login;


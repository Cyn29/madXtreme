import { useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Image,
    Alert,
} from "react-bootstrap";
import logotype from "../../assets/logotype.png";
import { Link } from "react-router-dom";
import { loginService } from "../../Services/LoginServices";

function Login() {
    const [email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = loginService.postLogin()
            if (response.ok) {
                const data = await response.json();
                console.log("Login status:", data);
                if (data.message === "Welcome back!") {
                    window.location.href = "/";
                } else {
                    console.error("Email  or password does not match");
                    setShowErrorAlert(true);
                    setTimeout(() => {
                        setShowErrorAlert(false);
                    }, 10000);
                }
            }
        } catch (error) {
            console.error("Failed request:", error);
        }
    };

    return (
        <Form onSubmit={handleLoginSubmit}>
            <Container className="group-12" style={{ marginTop: "9rem" }}>
                <Row className="justify-content-center mb-4">
                    <Col xs={12} md={6} lg={4}>
                        <Image name="logotype" src={logotype} fluid />
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group>
                            <h5>Email</h5>
                            <Form.Control
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                style={{
                                    background:
                                        "rgba(255, 232.69, 232.69, 0.70)",
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
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                value={user_password}
                                style={{
                                    background:
                                        "rgba(255, 232.69, 232.69, 0.70)",
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

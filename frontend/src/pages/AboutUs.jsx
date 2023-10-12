import { Container, Row, Col, Card } from "react-bootstrap";

function AboutUs() {
    const teamMembers = [
        {
            name: "Andrea",
            role: "La vigilante de la montaña",
            image: "ruta-a-la-imagen-de-andrea.jpg",
            description:
                "Andrea no solo es una experta en barranquismo, sino que también es la encargada de la seguridad y auxilio en montaña. Su conocimiento la sierra y su destreza en los barrancos la convierten en nuestra roca en la montaña.",
        },
        {
            name: "Wanda",
            role: "Experta en Kayak y animadora sociocultural",
            image: "ruta-a-la-imagen-de-wanda.jpg",
            description:
                "Wanda es nuestra reina de las aguas y una talentosa animadora sociocultural y coordinadora de equipos. Su dominio del kayak es equiparable a su habilidad para unir a las personas y crear momentos inolvidables. Con Wanda, cada aventura es una fiesta en el agua.",
        },
        {
            name: "Cynthia",
            role: "Experta en deportes acuáticos y directora de operaciones",
            image: "ruta-a-la-imagen-de-cynthia.jpg",
            description:
                "Cynthia, nuestra directora de operaciones y creadora de rutas, es la mente maestra detrás de nuestras emocionantes expediciones. Su pasión por los deportes y su visión estratégica dan forma a experiencias inolvidables en la Comunidad de Madrid y alrededores. Bajo su dirección, cada ruta es una obra maestra en movimiento.",
        },
        {
            name: "Ainhoa",
            role: "Capturadora de momentos extremos",
            image: "ruta-a-la-imagen-de-ainhoa.jpg",
            description:
                "Ainhoa es nuestra aventurera, fotógrafa extrema y creadora de contenidos. Con su cámara, conjura la esencia de la adrenalina en cada instantánea, transformando momentos audaces en obras maestras visuales. Además, es una experta en supervivencia, lo que añade un toque de intriga y seguridad a nuestras expediciones.",
        },
        {
            name: "Jaime",
            role: "El rey en la montaña",
            image: "ruta-a-la-imagen-de-jaime.jpg",
            description:
                "Jaime, el maestro de la escalada, el boulder y el MTB enduro, es un mago en las rocas y los bosques. Cada ascenso y descenso es un desafío que Jaime conquista con maestría y pasión.",
        },
        {
            name: "Raúl",
            role: "El Explorador de rios, bosques y Montañas",
            image: "ruta-a-la-imagen-de-raúl.jpg",
            description:
                "Raúl, nuestro guía de montaña, aventurero y mountain biker, lidera nuestras expediciones a través de montañas y bosques. Su espíritu intrépido nos lleva más allá de lo conocido, explorando terrenos inexplorados y creando historias inolvidables.",
        },
    ];

    return (
        <Container>
            <h1 className="text-center mt-5">Conócenos</h1>
            <p className="text-center mt-2">
                <em>El Alma de MadXtreme</em>
            </p>
            <p className="text-center mt-2">
                Nuestra pasión es explorar y descubrir la emoción en cada rincón de la Comunidad de Madrid. Déjanos presentarte a los héroes que hacen que MadXtreme sea más que una aventura: es una experiencia inolvidable.
            </p>
            <Row>
                {teamMembers.map((member, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
                        <Card
                            style={{
                                borderBottom: '#D10505 0.5rem solid',
                                marginBottom: '40px',
                                cursor: 'pointer',
                                height: '100%',
                            }}
                        >
                            <div
                                style={{
                                    height: '300px',
                                    overflow: 'hidden',
                                }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.role}</Card.Text>
                                <Card.Text>{member.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <p className="text-center mt-4">
                Únete a nosotros en MadXtreme y descubre la Comunidad de Madrid como nunca antes. Con un equipo apasionado como el nuestro, cada aventura se convierte en una historia que contar, una experiencia que cambiará tu vida.
            </p>
            <p className="text-center">
                ¡Deja que MadXtreme sea tu puerta de entrada a un mundo de emociones y descubrimientos en la naturaleza!
            </p>
        </Container>
    );
}


export default AboutUs;

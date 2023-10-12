import Image from 'react-bootstrap/Image';
//import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";

function PackDetailedCard({pack1, pack2, pack3}) {
  return (
      <figcaption className='d-flex flex-column justify-content-end mt-4' style={{width:"15vw"}}>
        <Image src={pack1} fluid className='p-2'/> 
        <Image src={pack2} fluid className='p-2'/> 
        <Image src={pack3} fluid className='p-2'/> 
      </figcaption>
  );
}

export default PackDetailedCard;
/* Aqui deberiamos tener el componente cardx3. en cada card imagen, texto, precio..*/ 

/*
function Cards({ cardImage, title, price, button, opinions }) {
    return (
        <section className="d-inline-flex ">
            <Card
                className="mb-5"
                style={{
                    width: "20rem",
                    margin: ".5rem",
                    borderBottom: "#D10505 0.5rem solid ",
                }}>
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <section className="d-flex justify-content-between align-items-center">
                        <Card.Title
                            style={{ fontSize: "2rem", color: "#D10505" }}
                            className="f-25">
                            {" "}
                            {price}
                        </Card.Title>
                        <Button
                            style={{
                                backgroundColor: "#D10505",
                                border: "none",
                            }}
                            className="rounded-pill">
                            {" "}
                            {button}{" "}
                        </Button>
                    </section>
                    <Card.Text>{opinions}</Card.Text>
                </Card.Body>
            </Card>
        </section>
    );
}

export default Cards;*/

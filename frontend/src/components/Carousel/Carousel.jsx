import Carousel from "react-bootstrap/Carousel";
import rafting from "../../assets/carousel/rafting.png"
import climbing from "../../assets/carousel/climbing.png"
import mtb from "../../assets/carousel/mtb.png"
import snow from "../../assets/carousel/mtb.png"
import cave from "../../assets/carousel/cave.png"
import mountain from "../../assets/carousel/mountain.png"
import Button from "react-bootstrap/Button";

function CarouselComponent() {
    return (
        <Carousel className="mb-3">
            <Carousel.Item style={{ color: "black" }}>
                <img src={mountain} className="img-fluid" width="100%"/>
            </Carousel.Item>
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-3" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>
            <Carousel.Item style={{ color: "black" }}>
                <img src={rafting} className="img-fluid" width="100%" />
            </Carousel.Item>
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-3" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>
            <Carousel.Item style={{ color: "black" }}>
                <img src={climbing} className="img-fluid" width="100%" />
            </Carousel.Item>
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-3" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>
            <Carousel.Item style={{ color: "black" }}>
                <img src={mtb} className="img-fluid"width="100%"/>
            </Carousel.Item>
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-3" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>
            <Carousel.Item style={{ color: "black" }}>
                <img src={snow} className="img-fluid" width="100%"/>
            </Carousel.Item> 
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-3" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>   
            <Carousel.Item style={{ color: "black" }}>
                <img src={cave} className="img-fluid" width="100%"/>
            </Carousel.Item>
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-3" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>
        </Carousel>
    );
}

export default CarouselComponent;

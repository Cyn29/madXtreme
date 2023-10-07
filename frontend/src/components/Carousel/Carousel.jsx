import Carousel from "react-bootstrap/Carousel";
import rafting from "../../assets/carousel/rafting.jpg"
import climbing from "../../assets/carousel/climbing.jpg"
import mtb from "../../assets/carousel/mtb.jpg"
import snow from "../../assets/carousel/snow.jpg"
import cave from "../../assets/carousel/cave.jpg"
import mountain from "../../assets/carousel/boymountain.jpg"
import Button from "react-bootstrap/Button";

function CarouselComponent() {
    return (
        <Carousel className="mb-5">
            <Carousel.Item style={{ color: "black" }}>
                <img src={mountain} width="100%" height="100%" />
            </Carousel.Item>
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-5" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>
            <Carousel.Item style={{ color: "black" }}>
                <img src={rafting} width="100%" height="100%" />
            </Carousel.Item>
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-5" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>
            <Carousel.Item style={{ color: "black" }}>
                <img src={climbing} width="100%" height="100%" />
            </Carousel.Item>
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-5" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>
            <Carousel.Item style={{ color: "black" }}>
                <img src={mtb} width="100%" height="100%" />
            </Carousel.Item>
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-5" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>
            <Carousel.Item style={{ color: "black" }}>
                <img src={snow} width="100%" height="100%" />
            </Carousel.Item> 
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-5" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>   
            <Carousel.Item style={{ color: "black" }}>
                <img src={cave} width="100%" height="100%" />
            </Carousel.Item>
            <Carousel.Caption className="d-flex justify-content-end">
                <Button className="rounded-pill mb-5" style={{width: "18rem", color: "#D10505", backgroundColor: "#fff", border: "none"}}><h4>Reserva tu aventura</h4></Button>
            </Carousel.Caption>
        </Carousel>
    );
}

export default CarouselComponent;

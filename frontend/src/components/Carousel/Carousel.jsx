import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import mountain from "../../assets/carousel/mountain.png";
import rafting from "../../assets/carousel/rafting.png";
import climbing from "../../assets/carousel/climbing.png";
import mtb from "../../assets/carousel/mtb.png";
import snow from "../../assets/carousel/snow.png";
import cave from "../../assets/carousel/cave.png";

const carouselImages = [mountain, rafting, climbing, mtb, snow, cave];

function CarouselComponent() {
    return (
        <Carousel className="mb-3">
            {carouselImages.map((image, index) => (
                <Carousel.Item key={index} style={{ color: "black" }}>
                    <img 
                        src={image}
                        className="img-fluid"
                        alt="Carousel image"
                        width="100%"
                    />
                    <Carousel.Caption className="d-flex justify-content-end">
                        <Button
                            className="rounded-pill mb-3"
                            style={{
                                width: "18rem",
                                color: "#D10505",
                                backgroundColor: "#fff",
                                border: "none",
                            }}>
                            <h4>Reserva tu aventura</h4>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselComponent;

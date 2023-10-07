import Carousel from "react-bootstrap/Carousel";
import rafting from "../../assets/carousel/rafting.jpg"
import climbing from "../../assets/carousel/climbing.jpg"
import mtb from "../../assets/carousel/mtb.jpg"
import snow from "../../assets/carousel/snow.jpg"
import cave from "../../assets/carousel/cave.jpg"
import mountain from "../../assets/carousel/boymountain.jpg"

function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item style={{ color: "black" }}>
                <img src={mountain} width="100%" height="100%" />
            </Carousel.Item>
            <Carousel.Item style={{ color: "black" }}>
                <img src={rafting} width="100%" height="100%" />
            </Carousel.Item>
            <Carousel.Item style={{ color: "black" }}>
                <img src={climbing} width="100%" height="100%" />
            </Carousel.Item>
            <Carousel.Item style={{ color: "black" }}>
                <img src={mtb} width="100%" height="100%" />
            </Carousel.Item>
            <Carousel.Item style={{ color: "black" }}>
                <img src={snow} width="100%" height="100%" />
            </Carousel.Item>    
            <Carousel.Item style={{ color: "black" }}>
                <img src={cave} width="100%" height="100%" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;

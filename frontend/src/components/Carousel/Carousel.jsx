import Carousel from "react-bootstrap/Carousel";
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
          <Carousel.Caption className="d-flex justify-content-end"></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;

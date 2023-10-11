import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "../components/Cards/Cards";
import climbing from "../assets/cards/climbing.jpg";
import hiking from "../assets/cards/hiking.png";
import mtb from "../assets/cards/mtb.jpg";
import kayak from "../assets/cards/kayak.jpg";
import CarouselComponent from "../components/Carousel/Carousel.jsx";

function Home() {
  return (
    <>
      <CarouselComponent />
      <Cards
        cardImage={climbing}
        title={"Escalada en rocas naturales en un paisaje ídilico."}
        price={"65 €"}
        button={"Ver más"}
        opinions={"4.5/5  15 opiniones"}
      />
      <Cards
        cardImage={hiking}
        title={"Rutas de senderismo en la sierra de Madrid."}
        price={"75 €"}
        button={"Ver más"}
        opinions={"5/5  30 opiniones"}
      />
      <Cards
        cardImage={mtb}
        title={"MTB/Enduro-DH experiencia extrema."}
        price={"85 €"}
        button={"Ver más"}
        opinions={"4.7/5  20 opiniones"}
      />
      <Cards
        cardImage={kayak}
        title={"Kayak en río natural con los mejores paisajes."}
        price={"60 €"}
        button={"Ver más"}
        opinions={"4.9/5  10 opiniones"}
      />
    </>
  );
}

export default Home;

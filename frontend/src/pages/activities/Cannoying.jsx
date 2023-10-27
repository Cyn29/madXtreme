import Images from "../../components/DetailedCard/Images";
import Description from "../../components/DetailedCard/Description";
import { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { activitiesService } from "../../services/ActivityService";
import Card from "../../components/DetailedCard/Card";
import YouTubeVideo from "../../components/DetailedCard/videoActivities.jsx";
import cannoying1 from "../../assets/activitiesImages/climbing1.png";
import cannoying2 from "../../assets/activitiesImages/canyoning2.png";
import cannoying3 from "../../assets/activitiesImages/canyoning3.png";
import cannoying4 from "../../assets/activitiesImages/cannoying4.png";
import cannoying5 from "../../assets/activitiesImages/cannoying5.png";
import cannoying6 from "../../assets/activitiesImages/cannoying6.png";

function Cannoying() {
  const [activities, setActivities] = useState([]);
  const cardIndexToShow = 3;
  useEffect(() => {
    activitiesService
      .getProducts()
      .then((fetchedActivities) => {
        setActivities(fetchedActivities);
      })
      .catch((error) => {
        console.error("Error fetching activities", error);
      });
  }, []);
  return (
    <Container>
      <div>
        <YouTubeVideo />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-60 m-5">
          <Description
            title="El mejor Barranquismo"
            description="¡Sumérgete en la emoción del barranquismo en la Sierra de Madrid! Esta experiencia única te llevará a través de impresionantes cañones y gargantas naturales, donde te enfrentarás a desafiantes obstáculos acuáticos y descensos emocionantes. Equipado con cuerdas, arneses y el espíritu aventurero, te aventurarás en terrenos escarpados, explorando lugares que pocos han tenido la oportunidad de ver. Mientras te abres paso a través de cascadas, toboganes naturales y aguas cristalinas, experimentarás una conexión profunda con la naturaleza y una dosis inigualable de adrenalina. El cañonismo en la Sierra de Madrid es la manera perfecta de vivir una aventura acuática inolvidable. ¡Ven y únete a nosotros para una experiencia emocionante en medio de la belleza natural!"
            text1="Ubicación Escénica: Barranquismo, rapela por increíbles ríos de Madrid."
            text2="Aventura de barrancos: Tanto para principiantes como para expertos, ¡hay rutas para todos!"
            text3="Seguridad en Todo Momento: Equipamiento y guías profesionales para una experiencia segura."
            duration="Duración 6 horas  |  Idioma: Español/Inglés"
            opinion=":estrella2::estrella2::estrella2::estrella2::estrella2:"
          />
        </div>
        <div>
          {cardIndexToShow < activities.length && (
            <Card
              activity_image={activities[cardIndexToShow].activity_image}
              bookingDate={activities[cardIndexToShow].bookingDate}
              price={activities[cardIndexToShow].price}
              stock={activities[cardIndexToShow].stock}
            />
          )}
        </div>
      </div>
      <div className="w-60 m-5">
        <Images image1={cannoying1} image2={cannoying2} image3={cannoying3} />
        <Images image1={cannoying4} image2={cannoying5} image3={cannoying6} />
      </div>
    </Container>
  );
}

export default Cannoying;

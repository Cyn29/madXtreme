import { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Images from '../components/DetailedCard/Images';
import Description from '../components/DetailedCard/Description';
import Card from '../components/DetailedCard/Card';
import YouTubeVideo from '../components/DetailedCard/videoActivities.jsx.jsx';
import canyoning1 from '../assets/activitiesImages/canyoning1.png';
import canyoning2 from '../assets/activitiesImages/canyoning2.png';
import canyoning3 from '../assets/activitiesImages/canyoning3.png';
import { activitiesService } from '../Services/ActivitiesServices';
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
        console.error('Error fetching activities', error);
      });
  }, []);
  return (
    <Container>
      <div className="">
            <YouTubeVideo/>
          </div>
        <Col lg={12} xs={12} className="mb-5">
          <Description
            title="El mejor Barranquismo"
            description="¡Sumérgete en la emoción del barranquismo en la Sierra de Madrid! Esta experiencia única te llevará a través de impresionantes cañones y gargantas naturales, donde te enfrentarás a desafiantes obstáculos acuáticos y descensos emocionantes. Equipado con cuerdas, arneses y el espíritu aventurero, te aventurarás en terrenos escarpados, explorando lugares que pocos han tenido la oportunidad de ver. Mientras te abres paso a través de cascadas, toboganes naturales y aguas cristalinas, experimentarás una conexión profunda con la naturaleza y una dosis inigualable de adrenalina. El cañonismo en la Sierra de Madrid es la manera perfecta de vivir una aventura acuática inolvidable. ¡Ven y únete a nosotros para una experiencia emocionante en medio de la belleza natural!"
            text1="Ubicación Escénica: Barranquismo, rapela por increíbles ríos de Madrid."
            text2="Aventura de barrancos: Tanto para principiantes como para expertos, ¡hay rutas para todos!"
            text3="Seguridad en Todo Momento: Equipamiento y guías profesionales para una experiencia segura."
            duration="Duración 6 horas  |  Idioma: Español/Inglés"
            opinion=":estrella2::estrella2::estrella2::estrella2::estrella2:"
          />
        </Col>
        <div className='d-flex'>
        <Col lg={12} xs={1} className='section d-flex align-items-center justify-content-center w-100 h-100 m-5'>
          {cardIndexToShow < activities.length && (
            <Card
              activity_image={activities[cardIndexToShow].activity_image}
              bookingDate={activities[cardIndexToShow].bookingDate}
              price={activities[cardIndexToShow].price}
              stock={activities[cardIndexToShow].stock}
            />
          )}
           <Col >
          <Images lg={12} xs={1}
            image1={canyoning1}
            image2={canyoning2}
            image3={canyoning3}
          />
           <Images lg={12} xs={1}
            image1={canyoning1}
            image2={canyoning2}
            image3={canyoning3}
          />
        </Col>
        </Col>
        </div>
    </Container>
  );
}
export default Cannoying;
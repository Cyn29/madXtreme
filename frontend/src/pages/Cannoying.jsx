import Images from '../components/DetailedCard/Images';
import Description from '../components/DetailedCard/Description';
import { useState, useEffect } from 'react';
import { activitiesService } from '../Services/ActivitiesServices';
import Card from '../components/DetailedCard/Card';
import canyoning1 from '../assets/activitiesImages/canyoning1.png'
import canyoning2 from '../assets/activitiesImages/canyoning2.png'
import canyoning3 from '../assets/activitiesImages/canyoning3.png'

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
    <>
      <Images
      image1={canyoning1}
      image2={canyoning2}
      image3={canyoning3} />
      <Description 
      title={"El mejor Barranquismo"}
      description={"¡Sumérgete en la emoción del barranquismo en la Sierra de Madrid! Esta experiencia única te llevará a través de impresionantes cañones y gargantas naturales, donde te enfrentarás a desafiantes obstáculos acuáticos y descensos emocionantes. Equipado con cuerdas, arneses y el espíritu aventurero, te aventurarás en terrenos escarpados, explorando lugares que pocos han tenido la oportunidad de ver. Mientras te abres paso a través de cascadas, toboganes naturales y aguas cristalinas, experimentarás una conexión profunda con la naturaleza y una dosis inigualable de adrenalina. El cañonismo en la Sierra de Madrid es la manera perfecta de vivir una aventura acuática inolvidable. ¡Ven y únete a nosotros para una experiencia emocionante en medio de la belleza natural!"} 
      text1={"Ubicación Escénica: Barranquismo, rapela por íncreibles ríos de Madrid."}
      text2={"Aventura de barrancos: Tanto para principiantes como para expertos, ¡hay rutas para todos!"}
      text3={"Seguridad en Todo Momento: Equipamiento y guías profesionales para una experiencia segura."}
      duration={"Duración 6 horas  |  Idioma: Español/Inglés"} 
      opinion={"🌟🌟🌟🌟🌟"} />
      {cardIndexToShow < activities.length && (
        <Card
          activity_image={activities[cardIndexToShow].activity_image}
          bookingDate={activities[cardIndexToShow].bookingDate}
          price={activities[cardIndexToShow].price}
          stock={activities[cardIndexToShow].stock}
        />
      )}
    </>
  );
}
export default Cannoying;
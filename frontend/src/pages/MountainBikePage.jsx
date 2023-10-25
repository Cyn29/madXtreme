import Images from '../components/DetailedCard/Images';
import Description from '../components/DetailedCard/Description';
import { useState, useEffect } from 'react';
import { activitiesService } from '../Services/ActivitiesServices';
import Card from '../components/DetailedCard/Card';
import MTB1 from '../assets/activitiesImages/MTB1.png'
import MTB2 from '../assets/activitiesImages/MTB2.png'
import MTB3 from '../assets/activitiesImages/MTB3.png'

function MountainBike () {
  const [activities, setActivities] = useState([]);
  const cardIndexToShow = 2
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
      image1={MTB1}
      image2={MTB2}
      image3={MTB3} />
      <Description 
      title={"MTB-Enduro/DH"}
      description={"¡Embárcate en una emocionante aventura en la Sierra de Madrid y descubre la emoción del MTB Enduro y el Downhill (DH)! Nuestra experiencia de ciclismo de montaña te lleva a través de intrincados senderos, empinadas pendientes y descensos vertiginosos. Siente la adrenalina bombeando mientras te lanzas cuesta abajo en terrenos desafiantes, desafiando tus habilidades de ciclismo en una experiencia única. Ya sea que seas un apasionado del Enduro o un amante de la velocidad en DH, la Sierra de Madrid ofrece un escenario impresionante para que experimentes la emoción de la montaña de una manera completamente nueva. ¡Únete a nosotros para un paseo que nunca olvidarás!"} 
      text1={"Ubicación escénica: MTB/Enduro-DH experiencia extrema en bici."}
      text2={"Aventura en las rutas y BikeParks: Tanto para principiantes como para expertos, ¡hay rutas para todos!"}
      text3={"Seguridad en todo momento: Equipamiento y guías profesionales para una experiencia segura."}
      duration={"Duración 3 horas  |  Idioma: Español/Inglés"} 
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
export default MountainBike;
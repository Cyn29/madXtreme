import Images from '../components/DetailedCard/Images';
import Description from '../components/DetailedCard/Description';
import { useState, useEffect } from 'react';
import { activitiesService } from '../Services/ActivitiesServices';
import Card from '../components/DetailedCard/Card';
import boulder1 from '../assets/activitiesImages/boulder1.png'
import boulder2 from '../assets/activitiesImages/boulder2.png'
import boulder3 from '../assets/activitiesImages/boulder3.png'

function Boulder() {
  const [activities, setActivities] = useState([]);
  const cardIndexToShow = 4
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
      image1={boulder1}
      image2={boulder2}
      image3={boulder3} />
      <Description 
      title={"Disfruta de los mejores bloques"}
      description={"¡Prepárate para desafiar tu fuerza y habilidad en la Sierra de Madrid a través de una emocionante experiencia de boulder! El boulder es una forma de escalada en la que te enfrentas a rocas y paredes naturales sin necesidad de cuerdas ni arneses. Aquí, en medio de un entorno natural único, encontrarás formaciones rocosas impresionantes que te invitarán a escalar y superar obstáculos. Cada movimiento y agarre son cruciales mientras te abres paso a través de las rocas, experimentando la emoción de la escalada al máximo. Descubre la belleza de la escalada en boulder en la Sierra de Madrid y experimenta la naturaleza y la emoción en su máxima expresión. ¡Ven y únete a nosotros para una aventura inolvidable en medio de la roca!"} 
      text1={"Ubicación escénica: Boulder, vive la experiencia de escalar sin cuerda."}
      text2={"Aventura en las rocas: Tanto para principiantes como para expertos, ¡hay bloques para todos!"}
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
export default Boulder;
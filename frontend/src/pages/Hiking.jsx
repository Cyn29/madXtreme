import Images from '../components/DetailedCard/Images';
import Description from '../components/DetailedCard/Description';
import { useState, useEffect } from 'react';
import { activitiesService } from '../Services/ActivitiesServices';
import Card from '../components/DetailedCard/Card';
import hiking1 from '../assets/activitiesImages/hiking1.png'
import kiking2 from '../assets/activitiesImages/kiking2.png'
import hiking3 from '../assets/activitiesImages/hiking3.png'

function hiking() {
  const [activities, setActivities] = useState([]);
  const cardIndexToShow = 1;
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
      image1={hiking1}
      image2={kiking2}
      image3={hiking3} />
      <Description 
      title={"Puro senderismo"}
      description={"¡Explora la belleza natural de la Sierra de Madrid a través de una apasionante experiencia de senderismo! El senderismo te permite sumergirte en la majestuosidad de la naturaleza mientras recorres intrincados caminos y senderos que serpentean a través de paisajes impresionantes. Con cada paso, descubrirás la diversidad de la flora y fauna locales, respirarás aire fresco y te sentirás en armonía con el entorno natural. Ya sea que prefieras un tranquilo paseo por senderos suaves o desafiantes rutas de montaña, el senderismo en la Sierra de Madrid ofrece una experiencia única para todos los amantes de la naturaleza. Únete a nosotros en una emocionante aventura a pie y descubre la maravilla de la Sierra de Madrid en cada paso que des. ¡No te lo pierdas!"} 
      text1={"Ubicación Escénica: Senderismo, rutas en la sierra de Guadarrama."}
      text2={"Aventura en el monte: Tanto para principiantes como para expertos, ¡hay rutas para todos!"}
      text3={"Seguridad en Todo Momento: Guías profesionales para una experiencia segura."}
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
export default hiking;
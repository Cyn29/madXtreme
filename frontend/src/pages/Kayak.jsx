import Images from '../components/DetailedCard/Images';
import Description from '../components/DetailedCard/Description';
import { useState, useEffect } from 'react';
import { activitiesService } from '../Services/ActivitiesServices';
import Card from '../components/DetailedCard/Card';
import kayak1 from '../assets/activitiesImages/kayak1.png'
import kayak2 from '../assets/activitiesImages/kayak2.png'
import kayak3 from '../assets/activitiesImages/kayak3.png'

function Kayak() {
  const [activities, setActivities] = useState([]);
  const cardIndexToShow = 5
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
      image1={kayak1}
      image2={kayak2}
      image3={kayak3} />
       <Description 
       title={"Kayak río natural"}
      description={"¡Sumérgete en la emoción de explorar las aguas cristalinas de un entorno natural único en la Sierra de Madrid con nuestra experiencia de kayak! Navegar en kayak te brinda la oportunidad de disfrutar de la belleza de la naturaleza mientras remas a través de impresionantes paisajes. Aventúrate en este emocionante viaje acuático y descubre la serenidad de los lagos y ríos de la región en una experiencia de kayak inolvidable. ¡Ven y rema con nosotros!"} 
      text1={"Ubicación escénica: Kayak en río natural con los mejores paisajes."}
      text2={"Aventura en los ríos: Tanto para principiantes como para expertos, ¡hay rutas para todos!"}
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
export default Kayak;
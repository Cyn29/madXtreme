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
  const [availableStock, setAvailableStock] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);
  const cardIndexToShow = 3;

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const fetchedActivities = await activitiesService.getProducts();
        setActivities(fetchedActivities);

        const reservedStock = localStorage.getItem('reservedStockCannoying') || 0;
        const initialStock = fetchedActivities.length > 0 ? fetchedActivities[cardIndexToShow].stock : 0;
        setAvailableStock(initialStock - parseInt(reservedStock, 10));
      } catch (error) {
        console.error('Error fetching activities', error);
      }
    };

    fetchActivities();
  }, [cardIndexToShow]);

  const handleReserve = () => {
    if (availableStock >= 1) {
      setAvailableStock(availableStock - 1);

      const reservedStock = localStorage.getItem('reservedStockCannoying') || 0;
      localStorage.setItem('reservedStockCannoying', parseInt(reservedStock, 10) + 1);
    } else {
      alert('No hay plazas disponibles');
    }
  };

  const handleReset = () => {
    const initialStock = activities.length > 0 ? activities[cardIndexToShow].stock : 0;
    setAvailableStock(initialStock);
    localStorage.removeItem('reservedStockCannoying');
  };

  return (
    <>
      <Images
        image1={canyoning1}
        image2={canyoning2}
        image3={canyoning3} />
      <Description
        title={"El mejor Barranquismo"}
        description={"¡Sumérgete en la emoción del barranquismo en la Sierra de Madrid! Esta experiencia única te llevará a través de impresionantes cañones y gargantas naturales, donde te enfrentarás a desafiantes obstáculos acuáticos y descensos emocionantes."}
        text1={"Ubicación Escénica: Barranquismo, rapela por increíbles ríos de Madrid."}
        text2={"Aventura de barrancos: Tanto para principiantes como para expertos, ¡hay rutas para todos!"}
        text3={"Seguridad en Todo Momento: Equipamiento y guías profesionales para una experiencia segura."}
        duration={"Duración 6 horas  |  Idioma: Español/Inglés"}
        opinion={"🌟🌟🌟🌟🌟"} />
      {showResetButton && <button onClick={handleReset}>Resetear Contador</button>}
      {cardIndexToShow < activities.length && (
        <Card
          activity_image={activities[cardIndexToShow].activity_image}
          bookingDate={activities[cardIndexToShow].bookingDate}
          price={activities[cardIndexToShow].price}
          stock={availableStock}
          onReserve={handleReserve}
        />
      )}
    </>
  );
}

export default Cannoying;
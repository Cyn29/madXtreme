import Images from '../../components/DetailedCard/Images';
import Description from '../../components/DetailedCard/Description';
import { useState, useEffect } from 'react';
import { activitiesService } from '../../services/ActivityService';
import Card from '../../components/DetailedCard/Card';
import MTB1 from '../../assets/activitiesImages/MTB1.png'
import MTB2 from '../../assets/activitiesImages/MTB2.png'
import MTB3 from '../../assets/activitiesImages/MTB3.png'

function MountainBike() {
  const [activities, setActivities] = useState([]);
  const [availableStock, setAvailableStock] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);
  const cardIndexToShow = 2;

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const fetchedActivities = await activitiesService.getProducts();
        setActivities(fetchedActivities);

        const reservedStock = localStorage.getItem('reservedStockMTB') || 0;
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

      const reservedStock = localStorage.getItem('reservedStockMTB') || 0;
      localStorage.setItem('reservedStockMTB', parseInt(reservedStock, 10) + 1);
    } else {
      alert('No hay plazas disponibles');
    }
  };

  const handleReset = () => {
    const initialStock = activities.length > 0 ? activities[cardIndexToShow].stock : 0;
    setAvailableStock(initialStock);
    localStorage.removeItem('reservedStockMTB');
  };

  return (
    <>
      <Images
        image1={MTB1}
        image2={MTB2}
        image3={MTB3} />
      <Description
        title={"MTB-Enduro/DH"}
        description={"¡Embárcate en una emocionante aventura en la Sierra de Madrid y descubre la emoción del MTB Enduro y el Downhill (DH)! Nuestra experiencia de ciclismo de montaña te lleva a través de intrincados senderos, empinadas pendientes y descensos vertiginosos."}
        text1={"Ubicación escénica: MTB/Enduro-DH experiencia extrema en bici."}
        text2={"Aventura en las rutas y BikeParks: Tanto para principiantes como para expertos, ¡hay rutas para todos!"}
        text3={"Seguridad en todo momento: Equipamiento y guías profesionales para una experiencia segura."}
        duration={"Duración 3 horas  |  Idioma: Español/Inglés"}
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

export default MountainBike;
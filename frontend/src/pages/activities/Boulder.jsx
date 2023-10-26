import Images from '../../components/DetailedCard/Images';
import Description from '../../components/DetailedCard/Description';
import { useState, useEffect } from 'react';
import { activitiesService } from '../../services/ActivityService';
import Card from '../../components/DetailedCard/Card';
import boulder1 from '../../assets/activitiesImages/boulder1.png';
import boulder2 from '../../assets/activitiesImages/boulder2.png';
import boulder3 from '../../assets/activitiesImages/boulder3.png';

function Boulder() {
  const [activities, setActivities] = useState([]);
  const [availableStock, setAvailableStock] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);
  const cardIndexToShow = 4;

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const fetchedActivities = await activitiesService.getProducts();
        setActivities(fetchedActivities);

        const reservedStock = localStorage.getItem('reservedStockBoulder') || 0;
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

      const reservedStock = localStorage.getItem('reservedStockBoulder') || 0;
      localStorage.setItem('reservedStockBoulder', parseInt(reservedStock, 10) + 1);
    } else {
      alert('No hay plazas disponibles');
    }
  };

  const handleReset = () => {
    const initialStock = activities.length > 0 ? activities[cardIndexToShow].stock : 0;
    setAvailableStock(initialStock);
    localStorage.removeItem('reservedStockBoulder');
  };

  return (
    <>
      <Images
        image1={boulder1}
        image2={boulder2}
        image3={boulder3}
      />
      <Description
        title={"Disfruta de los mejores bloques"}
        description={
          "¡Prepárate para desafiar tu fuerza y habilidad en la Sierra de Madrid a través de una emocionante experiencia de boulder! El boulder es una forma de escalada en la que te enfrentas a rocas y paredes naturales sin necesidad de cuerdas ni arneses."
        }
        text1={"Ubicación escénica: Boulder, vive la experiencia de escalar sin cuerda."}
        text2={"Aventura en las rocas: Tanto para principiantes como para expertos, ¡hay bloques para todos!"}
        text3={"Seguridad en todo momento: Equipamiento y guías profesionales para una experiencia segura."}
        duration={"Duración 3 horas  |  Idioma: Español/Inglés"}
        opinion={"🌟🌟🌟🌟🌟"}
      />
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

export default Boulder;
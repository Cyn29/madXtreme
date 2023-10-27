'../../components/DetailedCard/Images';
import Description from '../../components/DetailedCard/Description';
import { useState, useEffect } from 'react';
import { activitiesService } from '../../services/ActivityService';
import Card from '../../components/DetailedCard/Card';
import kayak1 from '../../assets/activitiesImages/kayak1.png'
import kayak2 from '../../assets/activitiesImages/kayak2.png'
import kayak3 from '../../assets/activitiesImages/kayak3.png'
import kayak4 from '../../assets/activitiesImages/kayak4.png'
import kayak5 from '../../assets/activitiesImages/kayak5.png'
import kayak6 from '../../assets/activitiesImages/kayak6.png'
import YouTubeVideo from '../../components/DetailedCard/videoActivities.jsx';
import Images from '../../components/DetailedCard/Images';

function Kayak() {
  const [activities, setActivities] = useState([]);
  const [availableStock, setAvailableStock] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
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
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 10000);
    }
  };

  const handleReset = () => {
    const initialStock = activities.length > 0 ? activities[cardIndexToShow].stock : 0;
    setAvailableStock(initialStock);
    localStorage.removeItem('reservedStockBoulder');
  };

  return (
    <>
      <div>
        <YouTubeVideo /> {/* Agrega el componente del video */}
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='w-60 m-5'>
          <Description
            title="Emoción en kayak"
            description="¡Sumérgete en la emoción de explorar las aguas cristalinas de un entorno natural único en la Sierra de Madrid con nuestra experiencia de kayak!"
            text1="Ubicación escénica: Kayak en río natural con los mejores paisajes."
            text2="Aventura en los ríos: Tanto para principiantes como para expertos, ¡hay rutas para todos!"
            text3="Seguridad en todo momento: Equipamiento y guías profesionales para una experiencia segura."
            duration="Duración 3 horas  |  Idioma: Español/Inglés"
            opinion="Valoraciones: 🌟🌟🌟🌟🌟"
          />
        </div>
        <div>
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
        </div>
      </div>
      <div className="w-60 m-5">
        <Images image1={kayak1} image2={kayak2} image3={kayak3} />
        <Images image1={kayak4} image2={kayak5} image3={kayak6} />
      </div>
    </>
  );
}

export default Kayak;

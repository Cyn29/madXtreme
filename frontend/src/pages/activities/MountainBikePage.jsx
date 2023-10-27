import Images from '../../components/DetailedCard/Images';
import Description from '../../components/DetailedCard/Description';
import { useState, useEffect } from 'react';
import { activitiesService } from '../../services/ActivityService';
import Card from '../../components/DetailedCard/Card';
import mtb1 from '../../assets/activitiesImages/mtb1.png';
import mtb2 from '../../assets/activitiesImages/mtb2.png';
import mtb3 from '../../assets/activitiesImages/mtb3.png';
import mtb4 from '../../assets/activitiesImages/mtb4.png';
import mtb5 from '../../assets/activitiesImages/mtb5.png';
import mtb6 from '../../assets/activitiesImages/mtb6.png';
import YouTubeVideo from '../../components/DetailedCard/videoActivities.jsx';
import {Alert} from 'react-bootstrap'

function MountainBike() {
  const [activities, setActivities] = useState([]);
  const [availableStock, setAvailableStock] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const cardIndexToShow = 2;
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const fetchedActivities = await activitiesService.getProducts();
        setActivities(fetchedActivities);
        const reservedStock = localStorage.getItem("reservedStockBoulder") || 0;
        const initialStock =
          fetchedActivities.length > 0
            ? fetchedActivities[cardIndexToShow].stock
            : 0;
        setAvailableStock(initialStock - parseInt(reservedStock, 10));
      } catch (error) {
        console.error("Error fetching activities", error);
        console.error("Error fetching activities", error);
      }
    };
    fetchActivities();
  }, [cardIndexToShow]);
  const handleReserve = () => {
    if (availableStock >= 1) {
      setAvailableStock(availableStock - 1);
      const reservedStock = localStorage.getItem("reservedStock") || 0;
      localStorage.setItem(
        "reservedStock",
        parseInt(reservedStock, 10) + 1
      );
    } else {
      setShowErrorAlert(true);
    }
  };
  const handleReset = () => {
    const initialStock =
      activities.length > 0 ? activities[cardIndexToShow].stock : 0;
    setAvailableStock(initialStock);
    localStorage.removeItem("reservedStock");
  };
  return (
    <>
      <div>
        <YouTubeVideo /> {/* Agrega el componente del video */}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-60 m-5">
          <Description
            title="MTB-Enduro/DH"
            description="¡Embárcate en una emocionante aventura en la Sierra de Madrid y descubre la emoción del MTB Enduro y el Downhill (DH)! Nuestra experiencia de ciclismo de montaña te lleva a través de intrincados senderos, empinadas pendientes y descensos vertiginosos."
            text1="Ubicación escénica: MTB/Enduro-DH experiencia extrema en bici."
            text2="Aventura en las rutas y BikeParks: Tanto para principiantes como para expertos, ¡hay rutas para todos!"
            text3="Seguridad en todo momento: Equipamiento y guías profesionales para una experiencia segura."
            duration="Duración 3 horas  |  Idioma: Español/Inglés"
            opinion="Valoraciones: 🌟🌟🌟🌟🌟"
          />
        </div>
        <div>
          {showResetButton && (
            <button onClick={handleReset}>Resetear Contador</button>
          )}
          {cardIndexToShow < activities.length && (
            <Card
              activity_image={activities[cardIndexToShow].activity_image}
              bookingDate={activities[cardIndexToShow].bookingDate}
              price={activities[cardIndexToShow].price}
              stock={availableStock}
              onReserve={handleReserve}
            />
          )}
          {showErrorAlert && (
          <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
            No hay plazas disponibles
          </Alert>
        )}
        </div>
      </div>
      <div className="w-60 m-5">
        <Images image1={mtb1} image2={mtb2} image3={mtb3} />
        <Images image1={mtb4} image2={mtb5} image3={mtb6} />
      </div>
    </>
  );
}
export default MountainBike;
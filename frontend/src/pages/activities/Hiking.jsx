import Images from "../../components/DetailedCard/Images";
import Description from "../../components/DetailedCard/Description";
import { useState, useEffect } from "react";
import { activitiesService } from "../../services/ActivityService";
import Card from "../../components/DetailedCard/Card";
import hiking1 from "../../assets/activitiesImages/hiking1.png";
import hiking2 from "../../assets/activitiesImages/kiking2.png";
import hiking3 from "../../assets/activitiesImages/hiking3.png";
import hiking4 from "../../assets/activitiesImages/hiking4.png";
import hiking5 from "../../assets/activitiesImages/hiking5.png";
import hiking6 from "../../assets/activitiesImages/hiking6.png";
import YouTubeVideo from "../../components/DetailedCard/videoActivities.jsx";

function Hiking() {
  const [activities, setActivities] = useState([]);
  const [availableStock, setAvailableStock] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const cardIndexToShow = 1;

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const fetchedActivities = await activitiesService.getProducts();
        setActivities(fetchedActivities);

        const reservedStock = localStorage.getItem("reservedStockHiking") || 0;
        const initialStock =
          fetchedActivities.length > 0
            ? fetchedActivities[cardIndexToShow].stock
            : 0;
        setAvailableStock(initialStock - parseInt(reservedStock, 10));
      } catch (error) {
        console.error("Error fetching activities", error);
      }
    };

    fetchActivities();
  }, [cardIndexToShow]);

  const handleReserve = () => {
    if (availableStock >= 1) {
      setAvailableStock(availableStock - 1);

      const reservedStock = localStorage.getItem("reservedStockHiking") || 0;
      localStorage.setItem(
        "reservedStockHiking",
        parseInt(reservedStock, 10) + 1
      );
    } else {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 10000);
    }
  };

  const handleReset = () => {
    const initialStock =
      activities.length > 0 ? activities[cardIndexToShow].stock : 0;
    setAvailableStock(initialStock);
    localStorage.removeItem("reservedStockHiking");
  };

  return (
    <>
      <div>
        <YouTubeVideo /> 
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-60 m-5">
          <Description
            title="Puro senderismo"
            description="¡Explora la belleza natural de la Sierra de Madrid a través de una apasionante experiencia de senderismo! El senderismo te permite sumergirte en la majestuosidad de la naturaleza mientras recorres intrincados caminos y senderos que serpentean a través de paisajes impresionantes."
            text1="Ubicación Escénica: Senderismo, rutas en la sierra de Guadarrama."
            text2="Aventura en el monte: Tanto para principiantes como para expertos, ¡hay rutas para todos!"
            text3="Seguridad en Todo Momento: Guías profesionales para una experiencia segura."
            duration="Duración 6 horas  |  Idioma: Español/Inglés"
            opinion="🌟🌟🌟🌟🌟"
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
        </div>
      </div>
      <div className="w-60 m-5">
        <Images image1={hiking1} image2={hiking2} image3={hiking3} />
        <Images image1={hiking4} image2={hiking5} image3={hiking6} />
      </div>
    </>
  );
}

export default Hiking;

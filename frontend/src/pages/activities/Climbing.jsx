import Images from "../../components/DetailedCard/Images";
import Description from "../../components/DetailedCard/Description";
import { useState, useEffect } from "react";
import { activitiesService } from "../../services/ActivityService";
import Card from "../../components/DetailedCard/Card";
import climbing1 from "../../assets/activitiesImages/climbing1.png";
import climbing2 from "../../assets/activitiesImages/climbing2.png";
import climbing3 from "../../assets/activitiesImages/climbing3.png";
import climbing4 from "../../assets/activitiesImages/climbing4.png";
import climbing5 from "../../assets/activitiesImages/climbing5.png";
import climbing6 from "../../assets/activitiesImages/climbing6.png";
import Video from "../../components/DetailedCard/videoActivities.jsx";
import { Alert } from "react-bootstrap";

function Climbing() {
    const [activities, setActivities] = useState([]);
    const [availableStock, setAvailableStock] = useState(0);
    const [showResetButton, setShowResetButton] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const cardIndexToShow = 0;
    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const fetchedActivities = await activitiesService.getProducts();
                setActivities(fetchedActivities);
                const reservedStock =
                    localStorage.getItem("reservedStockClimbing") || 0;
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
            const reservedStock =
                localStorage.getItem("reservedStockClimbing") || 0;
            localStorage.setItem(
                "reservedStockClimbing",
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
        localStorage.removeItem("reservedStockClimbing");
    };
    return (
        <>
            <div>
                <Video />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-60 m-5">
                    <Description
                        title="Escalada deportiva"
                        description="¡Vive la emoción de la escalada con cuerdas en un entorno natural único en la Sierra de Madrid! Nuestra experiencia de escalada con cuerdas te ofrece!"
                        text1="Ubicación Escénica: Disfruta de las majestuosas montañas y vistas panorámicas."
                        text2="Aventura en la Roca: Tanto para principiantes como para expertos, ¡hay rutas para todos!"
                        text3="Seguridad en Todo Momento: Equipamiento y guías profesionales para una experiencia segura."
                        duration="Duración 6 horas  |  Idioma: Español/Inglés"
                        opinion="Valoraciones: 🌟🌟🌟🌟🌟"
                    />
                </div>
                <div>
                    {showResetButton && (
                        <button onClick={handleReset}>Resetear Contador</button>
                    )}
                    {cardIndexToShow < activities.length && (
                        <Card
                            activity_image={
                                activities[cardIndexToShow].activity_image
                            }
                            bookingDate={
                                activities[cardIndexToShow].bookingDate
                            }
                            price={activities[cardIndexToShow].price}
                            stock={availableStock}
                            onReserve={handleReserve}
                        />
                    )}
                    {showErrorAlert && (
                        <Alert
                            variant="danger"
                            onClose={() => setShowErrorAlert(false)}
                            dismissible>
                            No hay plazas disponibles
                        </Alert>
                    )}
                </div>
            </div>
            <div className="w-60 m-5">
                <Images image1={climbing1} image2={climbing2} image3={climbing3} Images image4={climbing4} image5={climbing5} image6={climbing6} />
            </div>
        </>
    );
}
export default Climbing;

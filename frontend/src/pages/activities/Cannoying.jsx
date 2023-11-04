import Images from "../../components/DetailedCard/Images";
import Description from "../../components/DetailedCard/Description";
import { useState, useEffect } from "react";
import { activitiesService } from "../../services/ActivityService";
import Card from "../../components/DetailedCard/Card";
import Video from "../../components/DetailedCard/videoActivities.jsx";
import { Alert } from "react-bootstrap";

function Cannoying() {
    const [activities, setActivities] = useState([]);
    const [availableStock, setAvailableStock] = useState(0);
    const [showResetButton, setShowResetButton] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const cardIndexToShow = 3;
    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const fetchedActivities = await activitiesService.getProducts();
                setActivities(fetchedActivities);
                const reservedStock =
                    localStorage.getItem("reservedStockCannoying") || 0;
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
                localStorage.getItem("reservedStockCannoying") || 0;
            localStorage.setItem(
                "reservedStockCannoying",
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
        <div>
            <div>
                <Video />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-60 m-5">
                    <Description
                        title="El mejor Barranquismo"
                        description="¡Sumérgete en la emoción del barranquismo en la Sierra de Madrid! Esta experiencia única te llevará a través de impresionantes cañones y gargantas naturales, donde te enfrentarás a desafiantes obstáculos acuáticos y descensos emocionantes. Equipado con cuerdas, arneses y el espíritu aventurero, te aventurarás en terrenos escarpados, explorando lugares que pocos han tenido la oportunidad de ver. Mientras te abres paso a través de cascadas, toboganes naturales y aguas cristalinas, experimentarás una conexión profunda con la naturaleza y una dosis inigualable de adrenalina. El cañonismo en la Sierra de Madrid es la manera perfecta de vivir una aventura acuática inolvidable. ¡Ven y únete a nosotros para una experiencia emocionante en medio de la belleza natural!"
                        text1="Ubicación Escénica: Barranquismo, rapela por increíbles ríos de Madrid."
                        text2="Aventura de barrancos: Tanto para principiantes como para expertos, ¡hay rutas para todos!"
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
                <Images image1={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123001/cannoying5_b0pkdm.png"} image2={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123001/cannoying6_etyqxm.png"} image3={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123000/cannoying1_jmx21r.jpg"} Images image4={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123001/cannoying4_cwmjgh.png"} image5={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123000/cannoying3_s1k5oy.png"} image6={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123000/cannoying2_fnnoun.png"} />
            </div>
        </div>
    );
}
export default Cannoying;

/* eslint-disable no-unused-vars */
import Images from "../../components/DetailedCard/Images";
import Description from "../../components/DetailedCard/Description";
import { useState, useEffect } from "react";
import { activitiesService } from "../../services/ActivityService";
import Card from "../../components/DetailedCard/Card.jsx";
import Video from "../../components/DetailedCard/videoActivities.jsx";
import { Alert } from "react-bootstrap";

function Boulder() {
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
                const reservedStock =
                    localStorage.getItem("reservedStock") || 0;
                const initialStock =
                    fetchedActivities.length > 0
                        ? fetchedActivities[0].stock
                        : 0;
                setAvailableStock(initialStock - parseInt(reservedStock, 10));
            } catch (error) {
                console.error("Error fetching activities", error);
            }
        };
        fetchActivities();
    }, []);
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
        const initialStock = activities.length > 0 ? activities[0].stock : 0;
        setAvailableStock(initialStock);
        localStorage.removeItem("reservedStock");
    };
    return (
        <div>
            <Video />
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-60 m-5">
                    <Description
                        title={"Boulder"}
                        description={
                            "¡Vive la emoción de la escalada sin cuerdas en un entorno natural único en la Sierra de Madrid!"
                        }
                        text1={
                            "Ubicación Escénica: Disfruta de las majestuosas montañas y vistas panorámicas."
                        }
                        text2={
                            "Aventura en la Roca: Tanto para principiantes como para expertos, ¡hay rutas para todos!"
                        }
                        text3={
                            "Seguridad en Todo Momento: Equipamiento y guías profesionales para una experiencia segura."
                        }
                        duration={"Duración 3 horas  |  Idioma: Español/Inglés"}
                        opinion={
                            "Valoraciones: 🌟🌟🌟🌟🌟"
                        }
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
                <Images image1={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123000/boulder6_gzmhpp.png"} image2={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123000/boulder5_fufjkm.png"} image3={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123000/boulder1_upidri.png"} Images image4={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123000/boulder3_durxtc.png"} image5={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123000/boulder4_mbz4js.png"} image6={"https://res.cloudinary.com/dqj4pvyva/image/upload/v1699123000/boulder2_b3zimu.png"} />
            </div>
        </div>
    );
}
export default Boulder;

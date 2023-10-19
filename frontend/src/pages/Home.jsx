import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComponent from "../components/Carousel/Carousel.jsx";
import Cards from "../components/Cards/Cards";
import { useState, useEffect } from "react";


function Home() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/activities")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error to obtain activities');
        }
        return response.json()
      })

      .then((data) => {
        setActivities(data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error getting activities:", error);
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <CarouselComponent />
      {activities.map((activity) => (
        <Cards
          key={activity.id_activity}
          activity_image={activity.activity_image}
          title={activity.title}
          act_description={activity.act_description}
          price={activity.price}
          button={"Ver más"}
          opinion={activity.opinion}
         /* opinions={`Rating: ${activity.rating}/5  ${activity.reviews} opiniones`}*/

        />
      ))}
    </>
  );
}

export default Home;


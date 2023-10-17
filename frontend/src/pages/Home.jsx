import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "../components/Cards/Cards";
import CarouselComponent from "../components/Carousel/Carousel.jsx";
import React, { useState, useEffect } from "react";


function Home() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/activities")
      .then((response) => response.json())
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
          cardImage={activity.imageURL} 
          title={activity.title}
          price={`${activity.price} €`}
          button={"Ver más"}
          opinions={`Rating: ${activity.rating}/5  ${activity.reviews} opiniones`}
        />
      ))}
    </>
  );
}

export default Home;

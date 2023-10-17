import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComponent from "../components/Carousel/Carousel.jsx";
import { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards.jsx';

function Home() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/activities') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error to obtain activities');
        }
        return response.json();
      })
      .then((activities) => {
        setActivities(activities);
      })
      .catch((error) => {
        console.error('Error to obtain activities', error);
      });
  },);

  return (
    <>
      <CarouselComponent />
      
       {activities.map((activity, index) => (
        <Cards
          key={index}
          title={activity.title}
          act_description={activity.act_description}
          price={activity.price}
          button={"Ver más"}
          opinions={activity.opinions}
          stock={activity.stock}
        />
      ))}
    </>
  );
}

export default Home;


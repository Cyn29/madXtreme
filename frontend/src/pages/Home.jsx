    import "bootstrap/dist/css/bootstrap.min.css";
    import CarouselComponent from "../components/Carousel/Carousel.jsx";
    import Cards from "../components/Cards/Cards";

    import { useState, useEffect } from "react";
    import { Link } from "react-router-dom";


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
            <Link to={`/activities/categories/${activity.category_activity}`} key={activity.id_activity}>
            <Cards
              image={activity.activity_image}
              title={activity.title_activity}
              description={activity.act_description}
              price={activity.price_activity}
              button={"Ver más"}
              opinion={activity.opinion_activity}
            />
            </Link>
          ))}
        </>
      );
    }

    export default Home;


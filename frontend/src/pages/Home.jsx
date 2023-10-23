import { useState, useEffect } from 'react';
import CarouselComponent from '../components/Carousel/Carousel';
import Cards from '../components/Cards/Cards';
import { activitiesService } from '../Services/ActivitiesServices';
import { Row, Col } from 'react-bootstrap';

function Home() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    activitiesService.getProducts()
      .then((fetchedActivities) => {
        setActivities(fetchedActivities);
      })
      .catch((error) => {
        console.error('Error fetching activities', error);
      });
  }, []); 

  return (
    <>
      <CarouselComponent />
      <Row xs={1} md={2} lg={3} className='mb-5'>
        {activities.map((activity, index) => (
          <Cards
            key={index}
            activity_image={activity.activity_image}
            title={activity.title}
            act_description={activity.act_description}
            price={activity.price}
            button={"Ver más"}
            opinion={activity.opinion}
          />
        ))}
      </Row>
    </>
  );
}

export default Home;


import { useState, useEffect } from 'react';
import CarouselComponent from '../../components/Carousel/Carousel';
import Cards from '../../components/CardsHome/CardsHome';
import { activitiesService } from '../../services/ActivitiesServices';
import { Row, Col } from 'react-bootstrap';
import './Home.css'

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
    <div className='home-container'>
      <CarouselComponent />
      <div className='container-father'>
      <div className='cards-container'>
      <Row xs={1} md={2} lg={3}>
        {activities.map((activity, index) => (
      <Col key={index} className="mt-4">
          <Cards
            key={index}
            activity_image={activity.activity_image}
            title={activity.title}
            act_description={activity.act_description}
            price={activity.price}
            opinion={activity.opinion}
          />
          </Col>
        ))}
      </Row>
      </div>
      </div>
    </div>
  );
}

export default Home;


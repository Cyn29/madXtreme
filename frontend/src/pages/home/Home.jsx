import { useState, useEffect } from 'react';
import CarouselComponent from '../../components/Carousel/Carousel';
import Cards from '../../components/Cards/Cards';
import { activitiesService } from '../../Services/ActivitiesServices';
import { Row, Col } from 'react-bootstrap';
import './Home.css';

function Home() {
  const [activities, setActivities] = useState([]);
  const activitiesLinks = [
    'http://localhost:5173/climbing',
    'http://localhost:5173/hiking',
    'http://localhost:5173/mountainbike',
    'http://localhost:5173/cannoying',
    'http://localhost:5173/boulder',
    'http://localhost:5173/kayak'
  ];

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
                  link={activitiesLinks[index]}
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

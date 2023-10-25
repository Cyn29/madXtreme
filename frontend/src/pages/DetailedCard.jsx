import Images from '../components/DetailedCard/Images';
import Card from '../components/DetailedCard/Card';
import { useState, useEffect } from 'react';
import { activitiesService } from '../Services/ActivitiesServices';
import Description from '../components/DetailedCard/Description';

function DetailedCardPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    activitiesService
      .getProducts()
      .then((fetchedActivities) => {
        setActivities(fetchedActivities);
      })
      .catch((error) => {
        console.error('Error fetching activities', error);
      });
  }, []);
  return (
    <>
      <Images />
      <Description/>
      {activities.map((activity, index) => (
        <div key={index}>
          <Card
            activity_image={activity.activity_image}
            bookingDate={activity.bookingDate}
            price={activity.price}
            stock={activity.stock}
          />
        </div>
      ))}
    </>
  );
}
export default DetailedCardPage;  
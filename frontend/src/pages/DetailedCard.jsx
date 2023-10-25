import Images from '../components/DetailedCard/Images';
import Card from '../components/DetailedCard/Card';
import { useState, useEffect } from 'react';
import { activitiesService } from '../Services/ActivitiesServices';
import Description from '../components/DetailedCard/Description';
function DetailedCardPage() {
  const [activities, setActivities] = useState([]);
  const cardIndexToShow = 0;
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
      <Description />
      {cardIndexToShow < activities.length && (
        <Card
          activity_image={activities[cardIndexToShow].activity_image}
          bookingDate={activities[cardIndexToShow].bookingDate}
          price={activities[cardIndexToShow].price}
          stock={activities[cardIndexToShow].stock}
        />
      )}
    </>
  );
}
export default DetailedCardPage;
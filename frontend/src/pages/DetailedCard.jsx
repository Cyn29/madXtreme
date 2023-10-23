import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BannerDetailedCard from "../components/DetailedCard/BannerDetailedCard";
import ImgDetailedCard from "../components/DetailedCard/ImgDetailedCard.jsx";
import MenuDetailedCard from "../components/DetailedCard/MenuDetailedCard.jsx";
import ItineraryDetailedCard from "../components/DetailedCard/ItineraryDetailedCard.jsx";
import PackDetailedCard from "../components/DetailedCard/PackDetailedCard.jsx";

import iconBoulder from "../assets/detailedCard/iconBoulder.png";
import bgRed from "../assets/detailedCard/bgRed.png";
import buyIcon from "../assets/detailedCard/buyIcon.png";

function DetailedCard() {
  const { category } = useParams();
  const [activitiesDetails, setActivitiesDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/activities/categories/${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error to obtain activity details");
        }
        return response.json();
      })
      .then((data) => {
        setActivitiesDetails(data);
        console.log(activitiesDetails)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error getting activity details:", error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <main>
      <BannerDetailedCard
       /*title={`${category.charAt(0).toUpperCase() + category.slice(1)}`}*/
      title={category.category_activity}
       /*title={activitiesDetails[0].category_activity}*/
        /* title={"Escalada/Boulder"}*/
        icon={iconBoulder}
        backgroundRed={bgRed}
      />

      <ImgDetailedCard img={activitiesDetails[0].activity_image} />
     


      <section className="w-75 mx-auto">
        <MenuDetailedCard />
        {activitiesDetails.map((activity) => (
          <article key={activity.id_activity} className="d-flex flex-column flex-lg-row justify-content-between align-items-start">
            <div>
              <ItineraryDetailedCard
                title={activity.title_activity}
                description={activity.act_description}
                details={activity.details_activity}
              /> 
            </div>
            <div className="d-flex flex-column justify-content-cener align-items-center">
              {activitiesDetails.map((activity) => (
                <PackDetailedCard
                  packImage={activity.activity_image}
                  title={activity.category_activity}
                  date={"12 Septiembre"}
                  price={activity.price_activity}
                  button={buyIcon}
                  stock={activity.stock_activity}
                />
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default DetailedCard;

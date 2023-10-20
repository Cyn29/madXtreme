import CommentsDetailedCard from '../DetailedCard/CommentsDetailedCard.jsx'

function ItineraryDetailedCard({title, description, details, price}) {
    return (
      <article className="w-100" m-left>
        {/* <ul className="justify-content-around align-items-center mt-2 mb-5">
         <li><a href="#description">Descripción</a></li>
          <li><a href="#details">Detalles</a></li>
          <li><a href="#price">Precio</a></li>
          <li><a href="#comments">Comentarios</a></li>
         </ul> */}

        <p>Itinerario</p>
        <h3>{title}</h3>
        <p className="my-4"id='description'>{description}</p>     
        <p className="my-4"id='details'>{details}</p>     
        <p className="my-4" id='price'>{price}</p>         
        <CommentsDetailedCard />
      </article>
    );
  }
  
  export default ItineraryDetailedCard;
  
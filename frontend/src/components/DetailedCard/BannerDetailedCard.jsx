import Image from 'react-bootstrap/Image';


function BannerDetailedCard({title, icon, backGoundRed}) {
  return (
    <section className='container-fluid' style={{height: "20rem", backgroundImage: `url(${backGoundRed})`, backgroundSize: "cover"}} >
      <figcaption className='text-end' style={{width:"90vw"}}>
        <Image src={icon} style={{height: "10rem",width:"23rem"}}/> 
      </figcaption>
      <h1 className='text-center translate-middle-y'>{title}</h1>
    </section>
  );
}

export default BannerDetailedCard;

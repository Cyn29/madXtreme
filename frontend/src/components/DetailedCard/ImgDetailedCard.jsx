import Image from 'react-bootstrap/Image';


function ImgDetailedCard({img}) {
  return (
      <figcaption style={{width:"100vw"}}>
        <Image src={img} style={{width:"110vw"}} fluid /> 
      </figcaption>
  );
}

export default ImgDetailedCard;

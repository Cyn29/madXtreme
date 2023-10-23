import Image from 'react-bootstrap/Image';


function ImgDetailedCard({img}) {
  console.log(img)
  return (
      <figcaption style={{width:"100vw", height:"70vh", overflow:"hidden"}}>
        <Image src={img} style={{width:"100vw", height:"100vh", objectFit:"cover", objectPosition: "center"}} fluid /> 
      </figcaption>
  );
}

export default ImgDetailedCard;

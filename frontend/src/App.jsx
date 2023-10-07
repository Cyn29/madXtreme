import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Cards from './components/Cards/Cards.jsx'
import climbing from './assets/climbingphoto.jpg'
import hiking  from './assets/hiking.png'
import mtb from './assets/mtb.jpg'
import canyoning from './assets/canyoning.jpg'
import CarouselComponent from './components/Carousel/Carousel.jsx'

function App() {
  return (
    <>
      <Header />
      <CarouselComponent/>
      <Cards
      cardImage={climbing}
      title={"Escalada en rocas naturales en un paisaje ídilico."}
      price={"65 €"}
      button={"Ver más"}
      opinions={"4.5/5  15 opiniones"}
      />
       <Cards
      cardImage={hiking}
      title={"Rutas de senderismo en la sierra de Madrid."}
      price={"75 €"}
      button={"Ver más"}
      opinions={"5/5  30 opiniones"}
      />
        <Cards
      cardImage={mtb}
      title={"MTB/Enduro-DH experiencia extrema."}
      price={"85 €"}
      button={"Ver más"}
      opinions={"4.7/5  20 opiniones"}
      />
      <Cards
      cardImage={canyoning}
      title={"Barranquismo en río natural con los mejores paisajes."}
      price={"60 €"}
      button={"Ver más"}
      opinions={"4.9/5  10 opiniones"}
      />
      
      <Footer />
      
    </>
  )
}

export default App

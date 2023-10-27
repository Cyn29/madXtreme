import andrea from "../../assets/team/andrea.png";
import wanda from "../../assets/team/wanda.png";
import cynthia from "../../assets/team/cynthia.png";
import ainhoa from "../../assets/team/ainhoa.png";
import jaime from "../../assets/team/jaime.png";
import raul from "../../assets/team/raul.png";
import AboutUs from "../../components/AboutUs/AboutUs";
function AboutUsPage() {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Conoce el alma de MadXtreme</h1>
      <h5 className="text-center mt-2">
        Nuestra pasión es explorar y descubrir la emoción en cada rincón de la
        Comunidad de Madrid. Déjanos presentarte a los héroes que hacen que
        MadXtreme sea más que una aventura: es una experiencia inolvidable.
      </h5>
      <div className="container-fluid">
        <div className="row">
          <AboutUs
            image={andrea}
            name={"Andrea"}
            role={"La vigilante de la montaña"}
            description={
              "Andrea no solo es una experta en barranquismo, sino que también es la encargada de la seguridad y auxilio en montaña. Su conocimiento de la sierra y su destreza en los barrancos la convierten en nuestra roca en la montaña. Andrea es una apasionada de la naturaleza y los deportes de aventura."
            }
          />
          <AboutUs
            image={wanda}
            name={"Wanda"}
            role={"Experta en kayak y animación"}
            description={
              "Wanda es nuestra reina de las aguas y una talentosa animadora sociocultural y coordinadora de equipos. Su dominio del kayak es equiparable a su habilidad para unir a las personas y crear momentos inolvidables. Con Wanda, cada aventura es una fiesta en el agua y siempre hay café de por medio."
            }
          />
          <AboutUs
            image={cynthia}
            name={"Cynthia"}
            role={"Experta en deportes acuáticos y risas"}
            description={
              "Cynthia, nuestra directora de operaciones y creadora de rutas, es la mente maestra detrás de nuestras emocionantes expediciones. Su pasión por los deportes y su visión estratégica dan forma a experiencias inolvidables. Bajo su dirección, cada ruta es una obra maestra en movimiento."
            }
          />
          <AboutUs
            image={ainhoa}
            name={"Ainhoa"}
            role={"Capturadora de momentos extremos"}
            description={
              "Ainhoa es nuestra aventurera, fotógrafa extrema y creadora de contenidos. Con su cámara, conjura la esencia de la adrenalina en cada instantánea, transformando momentos audaces en obras maestras visuales. Además, es una experta en supervivencia, lo que añade un toque de intriga y seguridad a todo."
            }
          />
          <AboutUs
            image={jaime}
            name={"Jaime"}
            role={"El rey en la montaña"}
            description={
              "Jaime, el maestro de la escalada, el boulder y el MTB enduro, es un mago en las rocas y los bosques. Cada ascenso y descenso es un desafío que Jaime conquista con maestría y pasión. La sierra de Madrid es su hábitat natural donde siempre podrás encontrarlo con una sonrisa en la cara."
            }
          />
          <AboutUs
            image={raul}
            name={"Raúl"}
            role={"Explorador de ríos, bosques y montañas"}
            description={
              "Raúl, nuestro guía de montaña, aventurero y mountain biker, lidera nuestras expediciones a través de montañas y bosques. Su espíritu intrépido nos lleva más allá de lo conocido, explorando terrenos inexplorados y creando historias inolvidables. Le encanta ayudar al resto en todo lo que necesiten."
            }
          />
        </div>
      </div>
      <h5 className="text-center mb-5">
        Únete a MadXtreme y descubre la Comunidad de Madrid como nunca antes.
        Con un equipo apasionado como el nuestro, cada aventura se convierte en
        una historia que contar, una experiencia que cambiará tu vida. ¡Deja que
        MadXtreme sea tu puerta de entrada a un mundo de emociones y
        descubrimientos en la naturaleza!
      </h5>
    </>
  );
}
export default AboutUsPage;

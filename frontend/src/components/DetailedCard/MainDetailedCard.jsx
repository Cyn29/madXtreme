import InfoDetailedCard from "./InfoDetailedCard";
import MenuDetailedCard from "./MenuDetailedCard";
import PackDetailedCard from "./PackDetailedCard";
import pack1 from "../../assets/detailedCard/pack1Boulder.jpg"
import pack2 from "../../assets/detailedCard/pack2Boulder.jpg"
import pack3 from "../../assets/detailedCard/pack3Boulder.jpg"

function MainDetailedCard() {
  return (
   <>
    <main style={{width:"80vw", margin: "auto"}}>
        <MenuDetailedCard style={{border:"1px solid red"}}/>
        <section className="d-flex flex-row justify-content-between align-items-center">
          <InfoDetailedCard />
          <PackDetailedCard pack1={pack1} pack2={pack2} pack3={pack3} />
        </section>

    </main>
   </>
  );
}

export default MainDetailedCard;

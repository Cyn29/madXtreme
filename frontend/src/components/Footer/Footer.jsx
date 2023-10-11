import { MDBFooter } from "mdb-react-ui-kit";
import logotype from "../../assets/logotype.png";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import tiktok from "../../assets/icons/tiktok.png";
import twitter from "../../assets/icons/twitter.png";

function Footer() {
    return (
        <MDBFooter className="text-center" color="black" bgColor="white">
            <section
                style={{ backgroundColor: "#D10505", height: 90 }}
                className="text-white d-flex justify-content-center align-items-center">
                <h3>Tus deportes de aventura en Madrid</h3>
            </section>
            <section width="100%">
                <img
                    className="mt-4"
                    width="15%"
                    src={logotype}
                    alt="Image of logotype"
                />
            </section>
            <section>
                <img src={instagram} alt="Instagram icon" />
                <img src={facebook} alt="Facebook icon" />
                <img src={twitter} alt="Twitter icon" />
                <img src={tiktok} alt="Tik tok icon" />
            </section>
            <div className="text-center p-3">
                © 2023 Copyright:
                <a className="text-black" href="https://madXtreme.com/">
                    madXtreme.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;
